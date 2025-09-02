import { useState } from 'react';

interface ToastState {
  message: string;
  visible: boolean;
  type: 'success' | 'error' | 'info';
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastState>({
    message: '',
    visible: false,
    type: 'info',
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, visible: true, type });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  return { toast, showToast, hideToast };
};