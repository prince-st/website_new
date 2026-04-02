import { useState, useCallback } from 'react';
import { ChatState, ChatStep, UserInfo, Message, ButtonOption } from '../components/Chatbot/types';
import { mainServices, subServices, CALENDLY_LINK } from '../components/Chatbot/serviceData';

const generateId = () => Math.random().toString(36).substring(2, 9);

const createBotMessage = (content: string, buttons?: ButtonOption[], isCalendly?: boolean): Message => ({
  id: generateId(),
  role: 'assistant',
  content,
  buttons,
  isCalendly
});

const createUserMessage = (content: string): Message => ({
  id: generateId(),
  role: 'user',
  content
});

export const useChatbot = () => {
  const [state, setState] = useState<ChatState>({
    step: 'INITIAL',
    userInfo: null,
    mainService: null,
    subService: null,
    messages: [],
    isTyping: false
  });

  const [isOpen, setIsOpen] = useState(false);

  const simulateTyping = useCallback((callback: () => void, delay = 800) => {
    setState(prev => ({ ...prev, isTyping: true }));
    setTimeout(() => {
      setState(prev => ({ ...prev, isTyping: false }));
      callback();
    }, delay);
  }, []);

  const addMessage = useCallback((message: Message) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }, []);

  const handleFormSubmit = useCallback((userInfo: UserInfo) => {
    setState(prev => ({
      ...prev,
      userInfo,
      step: 'WELCOME'
    }));

    const serviceButtons: ButtonOption[] = mainServices.map(service => ({
      label: service,
      value: service
    }));

    simulateTyping(() => {
      addMessage(createBotMessage(
        `Hi ${userInfo.fullName} 👋\nWelcome to StoreTransform!\n\nWhich service are you interested in?`,
        serviceButtons
      ));
    });
  }, [simulateTyping, addMessage]);

  const handleMainServiceSelect = useCallback((service: string) => {
    addMessage(createUserMessage(service));
    
    setState(prev => ({
      ...prev,
      mainService: service,
      step: 'SUB_SERVICE'
    }));

    const subServiceButtons: ButtonOption[] = (subServices[service] || []).map(sub => ({
      label: sub,
      value: sub
    }));

    simulateTyping(() => {
      addMessage(createBotMessage(
        `Great choice! Please select a specific ${service} service:`,
        subServiceButtons
      ));
    });
  }, [simulateTyping, addMessage]);

  const handleSubServiceSelect = useCallback((subService: string) => {
    addMessage(createUserMessage(subService));
    
    setState(prev => ({
      ...prev,
      subService,
      step: 'CONFIRM'
    }));

    simulateTyping(() => {
      addMessage(createBotMessage(
        `Great! 🎉\nYou selected **${state.mainService} – ${subService}**.\n\nWould you like to schedule a meeting with our expert now?`,
        [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ]
      ));
    });
  }, [simulateTyping, addMessage, state.mainService]);

  const handleConfirmResponse = useCallback((response: string) => {
    addMessage(createUserMessage(response === 'yes' ? 'Yes' : 'No'));

    if (response === 'yes') {
      setState(prev => ({ ...prev, step: 'END' }));
      simulateTyping(() => {
        addMessage(createBotMessage(
          `Perfect! 😊\nPlease use the link below to book a meeting at your convenience:`,
          undefined,
          true
        ));
        setTimeout(() => {
          addMessage(createBotMessage(
            'Would you like to restart the chat?',
            [
              { label: 'Restart Chat', value: 'restart' },
              { label: 'No, thanks', value: 'end' }
            ]
          ));
        }, 1000);
      });
    } else {
      setState(prev => ({ ...prev, step: 'CALENDLY_DECISION' }));
      simulateTyping(() => {
        addMessage(createBotMessage(
          `No worries at all! 😊\nIf you'd like, I can share a link so you can book a call anytime later — whenever it's convenient for you.`,
          [
            { label: 'Yes, share the link', value: 'share' },
            { label: 'No, thanks', value: 'no_share' }
          ]
        ));
      });
    }
  }, [simulateTyping, addMessage]);

  const handleCalendlyDecision = useCallback((response: string) => {
    addMessage(createUserMessage(response === 'share' ? 'Yes, share the link' : 'No, thanks'));

    if (response === 'share') {
      setState(prev => ({ ...prev, step: 'SHARE_LINK' }));
      simulateTyping(() => {
        addMessage(createBotMessage(
          `Here you go! 📅\nYou can book a meeting anytime using the link below:`,
          undefined,
          true
        ));
        setTimeout(() => {
          addMessage(createBotMessage(
            'Would you like to restart the chat?',
            [
              { label: 'Restart Chat', value: 'restart' },
              { label: 'No, thanks', value: 'end' }
            ]
          ));
        }, 1000);
      });
    } else {
      setState(prev => ({ ...prev, step: 'END' }));
      simulateTyping(() => {
        addMessage(createBotMessage(
          `Alright! 😊\nThanks for connecting with StoreTransform.\nHave a wonderful day!`,
          [
            { label: 'Restart Chat', value: 'restart' },
            { label: 'No, thanks', value: 'end' }
          ]
        ));
      });
    }
  }, [simulateTyping, addMessage]);

  const handleRestartDecision = useCallback((response: string) => {
    addMessage(createUserMessage(response === 'restart' ? 'Restart Chat' : 'No, thanks'));

    if (response === 'restart') {
      setState({
        step: 'INITIAL',
        userInfo: null,
        mainService: null,
        subService: null,
        messages: [],
        isTyping: false
      });
    } else {
      simulateTyping(() => {
        addMessage(createBotMessage(
          `Chat ended. 👋\nWe're always here if you need us!`
        ));
      });
    }
  }, [simulateTyping, addMessage]);

  const handleButtonClick = useCallback((value: string) => {
    switch (state.step) {
      case 'WELCOME':
        handleMainServiceSelect(value);
        break;
      case 'SUB_SERVICE':
        handleSubServiceSelect(value);
        break;
      case 'CONFIRM':
        handleConfirmResponse(value);
        break;
      case 'CALENDLY_DECISION':
        handleCalendlyDecision(value);
        break;
      case 'SHARE_LINK':
      case 'END':
        handleRestartDecision(value);
        break;
    }
  }, [state.step, handleMainServiceSelect, handleSubServiceSelect, handleConfirmResponse, handleCalendlyDecision, handleRestartDecision]);

  return {
    state,
    isOpen,
    setIsOpen,
    handleFormSubmit,
    handleButtonClick,
    CALENDLY_LINK
  };
};
