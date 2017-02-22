module.exports = {
  BioPaxClass: [
    "BindingFeature",
    "BiochemicalPathwayStep",
    "BiochemicalReaction",
    "BioSource",
    "Catalysis",
    "CellularLocationVocabulary",
    "CellVocabulary",
    "ChemicalStructure",
    "Complex",
    "ComplexAssembly",
    "Control",
    "ControlledVocabulary",
    "Conversion",
    "CovalentBindingFeature",
    "Degradation",
    "DeltaG",
    "Dna",
    "DnaReference",
    "DnaRegion",
    "DnaRegionReference",
    "Entity",
    "EntityFeature",
    "EntityReference",
    "EntityReferenceTypeVocabulary",
    "Evidence",
    "EvidenceCodeVocabulary",
    "ExperimentalForm",
    "ExperimentalFormVocabulary",
    "FragmentFeature",
    "Gene",
    "GeneticInteraction",
    "Interaction",
    "InteractionVocabulary",
    "KPrime",
    "ModificationFeature",
    "Modulation",
    "MolecularInteraction",
    "Named",
    "Pathway",
    "PathwayStep",
    "PhenotypeVocabulary",
    "PhysicalEntity",
    "Protein",
    "ProteinReference",
    "Provenance",
    "PublicationXref",
    "RelationshipTypeVocabulary",
    "RelationshipXref",
    "Rna",
    "RnaReference",
    "RnaRegion",
    "RnaRegionReference",
    "Score",
    "SequenceInterval",
    "SequenceLocation",
    "SequenceModificationVocabulary",
    "SequenceRegionVocabulary",
    "SequenceSite",
    "SimplePhysicalEntity",
    "SmallMolecule",
    "SmallMoleculeReference",
    "Stoichiometry",
    "TemplateReaction",
    "TemplateReactionRegulation",
    "TissueVocabulary",
    "Transport",
    "TransportWithBiochemicalReaction",
    "UnificationXref",
    "Xref",
    "XReferrable"
  ],

  pc2Formats: [
    "BINARY_SIF",
    "BIOPAX",
    "EXTENDED_BINARY_SIF",
    "GSEA",
    "JSONLD",
    "SBGN"
  ],

  fileFormats: {
    "BINARY_SIF": "sif",
    "BIOPAX": "owl",
    "EXTENDED_BINARY_SIF": "sif",
    "GSEA": "gsea",
    "JSONLD": "json",
    "SBGN": "sbgn"
  },

  graphKind: [
    "COMMONSTREAM",
    "NEIGHBORHOOD",
    "PATHSBETWEEN",
    "PATHSFROMTO"
  ],

  graphDirection: [
    "BOTHSTREAM",
    "DOWNSTREAM",
    "UNDIRECTED",
    "UPSTREAM"
  ]
};