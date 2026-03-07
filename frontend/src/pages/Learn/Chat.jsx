import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello 🌾 I am GramLink AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;

    // show user message immediately
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry 😔 I am unable to respond right now.",
        },
      ]);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-full sm:w-[420px] h-[75vh] rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col"
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#214e3b] text-white rounded-t-2xl">
            <h3 className="font-semibold">GramLink AI Assistant</h3>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-amber-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-[#214e3b] text-white"
                    : "bg-white text-gray-800 shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about farming, schemes, market..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-[#214e3b] text-white p-2 rounded-lg hover:bg-green-800"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Chat;
