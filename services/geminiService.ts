
import { GoogleGenAI, Type } from "@google/genai";
import type { LandListing, AIScore } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this prototype, we'll log a warning.
  // The UI will show a message if the API call fails.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        score: {
            type: Type.INTEGER,
            description: 'A score from 1 (worst) to 10 (best) for casino viability.',
        },
        justification: {
            type: Type.STRING,
            description: 'A brief, one-sentence justification for the score.',
        },
        pros: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'A list of 2-3 key advantages of this plot.',
        },
        cons: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'A list of 2-3 key disadvantages or risks for this plot.',
        }
    },
    required: ["score", "justification", "pros", "cons"]
};

export const getCasinoPotentialScore = async (listing: LandListing): Promise<AIScore | null> => {
    if (!API_KEY) {
        throw new Error("Gemini API key is not configured.");
    }
    
    const { name, location, pricePerAcre, sizeAcres, details } = listing;

    const prompt = `
        Analyze the following plot of land in West Texas for its viability as a large-scale casino resort destination.
        Consider these key factors:
        1.  **Proximity to Infrastructure**: Major highways (like I-10, I-20), international airports (Midland, DFW), and population centers (DFW Metroplex).
        2.  **Water Access**: Availability of water from sources like the Ogallala Aquifer or brackish groundwater, and the feasibility of water recycling/desalination.
        3.  **Cost**: The price per acre. Lower is better, with $2k-$10k being the target range.
        4.  **Zoning & Feasibility**: Assume commercial/resort zoning is possible. Focus on physical and logistical viability.
        
        Plot Details:
        -   Name: ${name}
        -   Location: ${location}, Texas
        -   Price: $${pricePerAcre}/acre
        -   Size: ${sizeAcres} acres
        -   Description: "${details}"
        
        Based on this information, provide a score and analysis in the specified JSON format.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.3,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);

        // Basic validation
        if (typeof parsedJson.score === 'number' && parsedJson.justification && Array.isArray(parsedJson.pros) && Array.isArray(parsedJson.cons)) {
            return parsedJson as AIScore;
        } else {
            console.error("Invalid JSON structure received from Gemini:", parsedJson);
            return null;
        }

    } catch (error) {
        console.error("Error fetching AI score from Gemini:", error);
        throw error;
    }
};
