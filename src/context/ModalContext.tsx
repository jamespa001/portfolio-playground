'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import ContactModal from '@/components/ContactModal';

interface ModalContextType {
  openContactModal: () => void;
  closeContactModal: () => void;
  isGetInTouchFocused: boolean;
  triggerGetInTouchFocus: () => void;
  resetGetInTouchFocus: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGetInTouchFocused, setIsGetInTouchFocused] = useState(false);

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  const triggerGetInTouchFocus = () => {
    setIsGetInTouchFocused(true);
    window.history.pushState(null, '', '#getInTouch');
  };

  const resetGetInTouchFocus = () => setIsGetInTouchFocused(false);

  return (
    <ModalContext.Provider
      value={{
        openContactModal,
        closeContactModal,
        isGetInTouchFocused,
        triggerGetInTouchFocus,
        resetGetInTouchFocus,
      }}
    >
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
