import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hello! Welcome to the Amani Digital community chat. This is a safe space for discussion.',
    sender: 'Admin',
    timestamp: '10:00 AM',
  },
  {
    id: 2,
    text: 'Hi everyone, glad to be here!',
    sender: 'User123',
    timestamp: '10:01 AM',
  },
    {
    id: 3,
    text: 'What are some good resources for online safety?',
    sender: 'User456',
    timestamp: '10:03 AM',
  },
   {
    id: 4,
    text: 'You can check out the Safety Tools and Prevention Resources pages on this site. They have great information.',
    sender: 'Admin',
    timestamp: '10:05 AM',
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: user?.email || 'You',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Community Chat</h2>
       <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-white border rounded-lg shadow-md">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-2.5 ${msg.sender === (user?.email || 'You') ? 'flex-row-reverse' : ''}`}>
             <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 rounded-xl ${msg.sender === (user?.email || 'You') ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900">{msg.sender}</span>
                    <span className="text-sm font-normal text-gray-500">{msg.timestamp}</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="flex items-center p-4 mt-4 bg-white border-t">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button type="submit" className="px-4 py-2 ml-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Send
        </button>
      </form>
    </div>
  );
}
