export const EVENTS = {
  MESSAGE_CREATED: "message.created",
  MESSAGE_UPDATED: "message.updated",
  MESSAGE_DELETED: "message.deleted",
  TYPING_UPDATE: "typing.update"
} as const;

export type MessagePayload = {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
};
