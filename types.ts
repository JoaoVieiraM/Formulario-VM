
export interface FormData {
  brandName: string;
  userEmail: string; // Novo campo essencial
  brandSoul: string;
  realWhy: string;
  targetAudience: string;
  competitiveTerritory: string;
  services: {
    branding: boolean;
    webDev: boolean;
    socialMedia: boolean;
  };
  currentMaturity: string;
  techPainPoints: string;
  visualReferences: string;
  voiceTone: string;
  successGoal: string;
}

export enum SectionId {
  ORGANISM = 'organismo',
  ECOSYSTEM = 'ecossistema',
  ENGINEERING = 'engenharia',
  ALCHEMY = 'alquimia'
}
