export type ChatStep = 
  | 'INITIAL' 
  | 'WELCOME' 
  | 'SUB_SERVICE' 
  | 'CONFIRM' 
  | 'CALENDLY_DECISION' 
  | 'SHARE_LINK' 
  | 'END' 
  | 'RESTART';

export interface UserInfo {
  fullName: string;
  email: string;
  country: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  buttons?: ButtonOption[];
  isForm?: boolean;
  isCalendly?: boolean;
}

export interface ButtonOption {
  label: string;
  value: string;
}

export interface ChatState {
  step: ChatStep;
  userInfo: UserInfo | null;
  mainService: string | null;
  subService: string | null;
  messages: Message[];
  isTyping: boolean;
}
