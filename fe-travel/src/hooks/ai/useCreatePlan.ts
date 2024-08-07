
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Schedule } from '../../types/ai/Schedule';

export const useCreatePlan = (schedule: Schedule) => {

  const apiKey = import.meta.env.VITE_GEMINIAI;
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' }); // Ensure you use the correct model

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    // maxOutputTokens: 8192,
    responseMimeType: "application/json"
  };

  const req = `Generate Travel Plan for Location: ${schedule.address}, for ${schedule.time} Days for ${schedule.type} with a ${schedule.budget} budget. Give me a Flight options list with Flight name, Flight time, price. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, ticket Pricing, Time to travel each of the location for ${schedule.time} days with each day plan with best time to visit in JSON format.`;

  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          { text: req }
        ]
      }
    ]
  })

  const response = chatSession.sendMessage(req);
  return response
};

// export const useCreatePlan = (schedule: Schedule) => {
//   return useQuery(['travelPlan', schedule], () => fetchPlan(schedule), {
//     // enabled: Boolean(schedule.address && schedule.time && schedule.type && schedule.budget),
//     staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//     cacheTime: 1000 * 60 * 10 // Cache data for 10 minutes
//   });
// };
