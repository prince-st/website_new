import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserInfo } from './types';
import { countries } from './serviceData';

interface ChatbotFormProps {
  onSubmit: (userInfo: UserInfo) => void;
}

export const ChatbotForm: React.FC<ChatbotFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserInfo>({
    fullName: '',
    email: '',
    country: ''
  });
  const [errors, setErrors] = useState<Partial<UserInfo>>({});

  const validate = (): boolean => {
    const newErrors: Partial<UserInfo> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-sm font-semibold text-foreground">Hi 👋 I’m Bharat.
            Thanks for stopping by — what are you looking to build or improve right now?</h3>
        <p className="text-sm text-muted-foreground">Please fill in your details to start chatting</p>
      </div>
      

      <div className="space-y-3">
        <div>
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="bg-background/50 border-border/50 focus:border-primary"
          />
          {errors.fullName && <span className="text-xs text-destructive mt-1">{errors.fullName}</span>}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="bg-background/50 border-border/50 focus:border-primary"
          />
          {errors.email && <span className="text-xs text-destructive mt-1">{errors.email}</span>}
        </div>

        <div>
          <select
            value={formData.country}
            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
            className="w-full h-10 px-3 rounded-md border border-border/50 bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="" className="bg-background text-muted-foreground">Select Country</option>
            {countries.map(country => (
              <option key={country} value={country} className="bg-background text-foreground">
                {country}
              </option>
            ))}
          </select>
          {errors.country && <span className="text-xs text-destructive mt-1">{errors.country}</span>}
        </div>
      </div>

      <Button type="submit" className="w-full" variant="glow">
        Start Chat
      </Button>
    </form>
  );
};
