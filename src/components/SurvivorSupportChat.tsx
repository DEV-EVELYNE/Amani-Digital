import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const mockResponses = {
  default: "I'm here to help. Ask me about solutions for survivors, preventing abuse, securing your identity, or healthier digital interactions.",
  solutions: "For solutions, we offer resources on reporting abuse, collecting evidence, and finding legal and mental health support. You can find more in the 'Solutions for Survivors' section.",
  prevention: "To prevent abuse, learn to recognize warning signs and create safer online spaces. Check out our 'Preventing Abuse' section for tips on handling online harassment and promoting digital consent.",
  identity: "To secure your identity, use strong, unique passwords and enable two-factor authentication. Our 'Securing Your Identity' section has guides on managing privacy settings and avoiding phishing scams.",
  health: "For healthier digital interactions, focus on empathy and respectful communication. Our resources provide strategies for conflict resolution and building positive online relationships.",
  greeting: "Hello! How can I assist you today? I can answer questions about digital safety and survivor support.",
};

const getMockResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return mockResponses.greeting;
  }
  if (lowerCaseMessage.includes('solution') || lowerCaseMessage.includes('help') || lowerCaseMessage.includes('support')) {
    return mockResponses.solutions;
  }
  if (lowerCaseMessage.includes('prevent') || lowerCaseMessage.includes('stop')) {
    return mockResponses.prevention;
  }
  if (lowerCaseMessage.includes('identity') || lowerCaseMessage.includes('secure') || lowerCaseMessage.includes('privacy')) {
    return mockResponses.identity;
  }
  if (lowerCaseMessage.includes('health') || lowerCaseMessage.includes('safe') || lowerCaseMessage.includes('interaction')) {
    return mockResponses.health;
  }
  return mockResponses.default;
};

export default function SurvivorSupportChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([{
      text: mockResponses.default,
      sender: 'bot'
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      const botMessage = { text: getMockResponse(input), sender: 'bot' };
      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl flex flex-col" style={{ height: '70vh' }}>
      <div className="bg-purple-600 text-white p-4 rounded-t-xl flex items-center shadow-md">
        <MessageSquare className="mr-3" />
        <h2 className="text-xl font-bold">Survivor Support Chat</h2>
      </div>
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex my-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-2xl px-4 py-2 max-w-md shadow ${msg.sender === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          className="flex-1 border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button onClick={handleSend} className="ml-4 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-transform transform hover:scale-110">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}