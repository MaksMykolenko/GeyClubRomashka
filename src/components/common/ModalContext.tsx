'use client';

import React, { createContext, useContext, useState } from 'react';
import { EventItem } from '@/types';
import { TicketModal } from '@/features/events/TicketModal';
import { IncidentReportModal } from '@/features/safety/IncidentReportModal';

interface ModalContextType {
  openTicketModal: (event?: EventItem) => void;
  openReportModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTicketEvent, setSelectedTicketEvent] = useState<EventItem | null>(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const openTicketModal = (event?: EventItem) => {
    setSelectedTicketEvent(event || null);
    setTicketModalOpen(true);
  };

  const openReportModal = () => {
    setReportModalOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openTicketModal, openReportModal }}>
      {children}
      <TicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        event={selectedTicketEvent}
      />
      <IncidentReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </ModalContext.Provider>
  );
};

export const useModals = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};
