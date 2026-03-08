"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function ChatPage() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [draft, setDraft] = useState("");
  const conversationId = useMemo(() => "general", []);

  useEffect(() => {
    const s = io(process.env.NEXT_PUBLIC_WS_URL || "http://localhost:8081", {
      auth: { token: localStorage.getItem("accessToken") || "dev-token" }
    });

    s.on("connect", () => s.emit("conversation.join", conversationId));
    s.on("message.created", (p: { content: string }) => setMessages((m) => [...m, p.content]));

    setSocket(s);
    return () => s.disconnect();
  }, [conversationId]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100 p-4">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Chat</motion.h1>
      <div className="mt-4 h-[60vh] overflow-y-auto rounded border border-zinc-700 bg-panel p-3">
        {messages.map((m, i) => <div key={i} className="mb-2 rounded bg-zinc-800 px-3 py-2">{m}</div>)}
      </div>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim() || !socket) return;
          socket.emit("message.send", { conversationId, content: draft, senderId: "web-user" });
          setDraft("");
        }}
      >
        <input value={draft} onChange={(e) => setDraft(e.target.value)} className="flex-1 rounded bg-zinc-800 px-3 py-2" placeholder="Type message" />
        <button className="rounded bg-accent px-4 py-2 font-semibold text-black">Send</button>
      </form>
    </main>
  );
}
