import React, { useEffect } from 'react';
import { MessageCircle, X, Minus } from 'lucide-react';
import { useChatbot } from '@/hooks/useChatbot';
import { ChatbotForm } from './ChatbotForm';
import { ChatbotMessages } from './ChatbotMessages';

export const ChatbotWidget: React.FC = () => {
  const { 
    state, 
    isOpen, 
    setIsOpen, 
    handleFormSubmit, 
    handleButtonClick 
  } = useChatbot();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-[9999] w-[380px] h-[550px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-3 flex items-center justify-between border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Bharat – AI & Growth Consultant</h3>
              <p className="text-xs text-muted-foreground">We typically reply instantly</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-background/50 flex items-center justify-center transition-colors"
              aria-label="Minimize chat"
            >
              <Minus className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-background/50 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Content */}
        {state.step === 'INITIAL' ? (
          <ChatbotForm onSubmit={handleFormSubmit} />
        ) : (
          <ChatbotMessages
            messages={state.messages}
            isTyping={state.isTyping}
            onButtonClick={handleButtonClick}
          />
        )}
      </div>
    </>
  );
};
