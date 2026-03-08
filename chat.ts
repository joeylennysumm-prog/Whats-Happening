import { create } from "zustand";

type ChatState = {
  activeConversationId?: string;
  setActiveConversation: (id: string) => void;
};

export const useChatStore = create<ChatState>((set) => ({
  activeConversationId: undefined,
  setActiveConversation: (id) => set({ activeConversationId: id })
}));
