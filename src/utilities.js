'use strict';
var fetch = require('fetch-ponyfill')().fetch;
var uuidV4 = require('uuid/v4');
var constants = require('./private/constants.js');

// Declare private variables
var _id;

/**
 * @module utilities
 */
module.exports = {
  /**
   * @param {string} [newId] - If given string, sets a new user ID. If null, turns of user id. Else simply returns current ID.
   * @return {string} id - Current user ID
   */
  user: (newId) => {
    if(_id === undefined || newId !== undefined) {
      if(typeof newId === "string") {
        newId = constants.idPrefix + newId;
      }
      else if(newId === null) {
        newId = "";
      }
      else if(newId === undefined) {
        newId = constants.idPrefix + uuidV4();
      }
      _id = newId;
    }
    return _id;
  },

  /**
   * @param {number} [timeout=1000] Sets length of time before timeout in milliseconds
   * @return {boolean} PC2 Status
   */
  pcCheck: (timeout) => { // timeout is in milliseconds
    var address = constants.pcAddress + "search?q=p53&user=" + constants.idPrefix + "pcCheck";
    var timeoutValue = Number(timeout != null ? timeout : 0) || 1000; // default timeout is 1000ms
    return new Promise((resolve, reject) => {
      if (typeof XMLHttpRequest !== "undefined") { // Assume browserside: done using xhr because network connections cancellable
        var xhttp = new XMLHttpRequest();
        var timeoutRef = setTimeout(() => {
          xhttp.abort();
          resolve(false);
        }, timeoutValue);
        xhttp.open("GET", address);
        xhttp.onreadystatechange = () => {
          if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
            clearTimeout(timeoutRef);
            resolve(true);
          }
        };
        xhttp.send();
      } else { // Assume serverside: done using fetch as ponyfill already available and residual network connections immaterial
        var timeoutRef = setTimeout(() => {
          resolve(false);
        }, timeoutValue);
        fetch(address, {
            method: 'get',
            timeout: timeoutValue
          })
          .then(response => {
            if (response.status === 200) {
              clearTimeout(timeoutRef);
              resolve(true);
            } else {
              clearTimeout(timeoutRef);
              resolve(false);
            }
          })
          .catch(e => {
            clearTimeout(timeoutRef);
            resolve(false);
          });
      }
    });
  },

  /**
   * @param {string} sourceName - Name of source type to validate against (eg. uniprot)
   * @param {string} id - ID to validate
   * @return {boolean} idValidity
   */
  sourceCheck: (sourceName, id) => {
    var checkFunction = constants.dsIdValidation[
      sourceName
	      .toLowerCase() // Make all lowercase
	      .replace(/[^a-zA-Z0-9]/g, "") // Remove any non letter or number symbols
    ];
    if (typeof checkFunction === "function") {
      return checkFunction(id);
    } else {
      throw new SyntaxError(sourceName + " is an invalid source");
    }
  }
}
