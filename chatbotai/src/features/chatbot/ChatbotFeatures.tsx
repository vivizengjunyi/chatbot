export default function ChatbotFeatures() {
    const features = [
        "Simplifies form completion through conversational assistance",
        "Triggers specific conversation flows based on different answers",
        "Offers dynamic answer types for diverse questions",
        "Adjusting answers alters the conversation flow for coherent interactions",
        "Supports answering looped questions multiple times as needed",
        "Displays answers in a visual table format for easy review"
    ]
    return (
        <div className="w-1/5">
            <h2 className="text-2xl font-bold text-gray-800">Chatbot AI Features</h2>
            <div className="mt-4">
  <ul className="space-y-4">
    {features.map((feature, index) => (
      <li 
        key={index} 
        className="flex items-center p-4 bg-gray-100 rounded-lg shadow hover:scale-105 transform transition duration-200 cursor-pointer hover:bg-gray-200"
      >
        <div className="flex items-center justify-center flex-shrink-0 h-10 w-10 rounded-full bg-green-500 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-800 hover:text-gray-900">{feature}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
        </div>
    )
};