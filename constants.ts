
import type { LandListing } from './types';

export const MOCK_LAND_LISTINGS: LandListing[] = [
  {
    id: 1,
    name: 'I-20 Frontier Plot',
    pricePerAcre: 2000,
    location: 'Midland',
    sizeAcres: 20,
    potential: 'High',
    details: 'Prime location near Midland International Airport with direct access to I-20. Brackish water sources identified, ideal for desalination and recycling.',
    imageUrl: 'https://picsum.photos/seed/plot1/600/400',
    zillowUrl: 'https://www.zillow.com/midland-tx/land/'
  },
  {
    id: 2,
    name: 'Odessa Opportunity Zone',
    pricePerAcre: 5000,
    location: 'Odessa',
    sizeAcres: 15,
    potential: 'Medium',
    details: 'Located on a major artery off I-20. Aquifer levels show moderate decline, requiring careful water management. Close to population center.',
    imageUrl: 'https://picsum.photos/seed/plot2/600/400',
    zillowUrl: 'https://www.zillow.com/odessa-tx/land/'
  },
  {
    id: 3,
    name: 'San Angelo Seclusion',
    pricePerAcre: 8000,
    location: 'San Angelo',
    sizeAcres: 10,
    potential: 'Low',
    details: 'Peaceful, remote plot. Significant distance from major interstate highways and airports limits large-scale resort viability. Water rights are solid.',
    imageUrl: 'https://picsum.photos/seed/plot3/600/400',
    zillowUrl: 'https://www.zillow.com/san-angelo-tx/land/'
  },
  {
    id: 4,
    name: 'Lubbock Plains expanse',
    pricePerAcre: 3500,
    location: 'Lubbock',
    sizeAcres: 50,
    potential: 'Medium',
    details: 'Large, flat parcel near Lubbock Preston Smith International Airport. Sits atop the Ogallala Aquifer, but usage is heavily regulated.',
    imageUrl: 'https://picsum.photos/seed/plot4/600/400',
    zillowUrl: 'https://www.zillow.com/lubbock-tx/land/'
  },
  {
    id: 5,
    name: 'The Permian Gamble',
    pricePerAcre: 2500,
    location: 'Midland',
    sizeAcres: 30,
    potential: 'High',
    details: 'Adjacent to existing commercial zoning. Excellent road infrastructure and proximity to DFW metroplex makes it a strong contender.',
    imageUrl: 'https://picsum.photos/seed/plot5/600/400',
    zillowUrl: 'https://www.zillow.com/midland-tx/land/'
  },
  {
    id: 6,
    name: 'West Odessa Outpost',
    pricePerAcre: 4200,
    location: 'Odessa',
    sizeAcres: 25,
    potential: 'Medium',
    details: 'Good access to utilities and labor from Odessa. Water survey suggests potential for deep brackish wells.',
    imageUrl: 'https://picsum.photos/seed/plot6/600/400',
    zillowUrl: 'https://www.zillow.com/odessa-tx/land/'
  }
];

export const NEWS_ALERTS = [
    { title: "Sands Lobbies $10M in TX", content: "Las Vegas Sands intensifies lobbying efforts in Austin, signaling confidence in the 2025 legislative session for casino legalization.", date: "Oct 21, 2025" },
    { title: "TX Legalization Odds at 60%", content: "Recent polling shows strong voter support for casino gaming, putting pressure on lawmakers to capture billions in lost revenue.", date: "Oct 18, 2025" },
    { title: "Vegas Water Crisis Deepens", content: "As Lake Mead hits a new low, investors are looking to water-resilient regions like West Texas for future development.", date: "Oct 15, 2025" },
    { title: "Ogallala Aquifer Report", content: "New study highlights sustainable water extraction techniques, boosting confidence in West Texas's long-term viability.", date: "Oct 12, 2025"},
];
