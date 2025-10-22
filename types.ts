
export interface LandListing {
  id: number;
  name: string;
  pricePerAcre: number;
  location: string;
  sizeAcres: number;
  potential: 'High' | 'Medium' | 'Low';
  details: string;
  imageUrl: string;
  zillowUrl: string;
}

export interface FilterState {
  searchTerm: string;
  priceRange: string;
  location: string;
  potential: string;
}

export interface AIScore {
  score: number;
  justification: string;
  pros: string[];
  cons: string[];
}
