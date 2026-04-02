import React, { useRef, useEffect } from 'react';
import { Message } from './types';
import { ChatbotButtons } from './ChatbotButtons';
import { CALENDLY_LINK } from './serviceData';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatbotMessagesProps {
  messages: Message[];
  isTyping: boolean;
  onButtonClick: (value: string) => void;
}

export const ChatbotMessages: React.FC<ChatbotMessagesProps> = ({ 
  messages, 
  isTyping, 
  onButtonClick 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const isLastMessageWithButtons = (index: number) => {
    // Only show buttons for the last message that has buttons
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].buttons && messages[i].buttons!.length > 0) {
        return i === index;
      }
    }
    return false;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-2 ${
              message.role === 'user'
                ? 'bg-primary text-primary-foreground rounded-br-md'
                : 'bg-secondary/50 text-foreground rounded-bl-md'
            }`}
          >
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            
            {message.isCalendly && (
              <Button
                variant="glow"
                size="sm"
                className="mt-3 w-full"
                onClick={() => window.open(CALENDLY_LINK, '_blank')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Meeting
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            )}
            
            {message.buttons && isLastMessageWithButtons(index) && (
              <ChatbotButtons 
                buttons={message.buttons} 
                onButtonClick={onButtonClick}
              />
            )}
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-secondary/50 rounded-2xl rounded-bl-md px-4 py-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};
