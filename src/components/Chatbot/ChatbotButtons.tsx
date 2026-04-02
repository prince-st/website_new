import React from 'react';
import { Button } from '@/components/ui/button';
import { ButtonOption } from './types';

interface ChatbotButtonsProps {
  buttons: ButtonOption[];
  onButtonClick: (value: string) => void;
  disabled?: boolean;
}

export const ChatbotButtons: React.FC<ChatbotButtonsProps> = ({ 
  buttons, 
  onButtonClick,
  disabled = false
}) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {buttons.map((button) => (
        <Button
          key={button.value}
          variant="outline"
          size="sm"
          onClick={() => onButtonClick(button.value)}
          disabled={disabled}
          className="text-xs bg-background/30 border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};
