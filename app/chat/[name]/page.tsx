'use client'
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { usePathname  } from 'next/navigation';

interface Message {
  sender: string;
  content: string;
}

const Chat: React.FC = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const pathname = usePathname();
  const senseiName = pathname.split('/').pop();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        sender: session?.user?.name || 'User',
        content: newMessage,
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Chat with Sensei</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <div className="h-64 overflow-y-scroll mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === 'Sensei' ? 'text-left' : 'text-right'}`}>
              <span className="font-bold">{msg.sender}: </span>
              <span>{msg.content}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow border rounded-l-lg p-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;