"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, User, Bot } from "lucide-react";
import { helpChatAction } from "@/actions/chat-action";
import ReactMarkdown from "react-markdown";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

export default function HelpChatComp() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    setError(null);

    const newMessages: ChatMessage[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await helpChatAction(newMessages);
      if (reply.type === "error") {
        setError(reply.content);
        setMessages([
          ...newMessages,
          { role: "assistant", content: reply.content },
        ]);
      } else {
        setMessages([
          ...newMessages,
          { role: "assistant", content: reply.content },
        ]);
      }
    } catch (err) {
      setError("Sorry, something went wrong. Please try again.");
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* Fixed Chat Bubble */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all flex items-center justify-center"
        onClick={() => setOpen(true)}
        aria-label="Open Help Chat"
        type="button"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full p-0 rounded-xl overflow-hidden">
          <DialogHeader className="p-4 border-b bg-secondary">
            <DialogTitle>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                CodeWithTabish AI Assistant
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="h-96 overflow-y-auto px-2 py-2 bg-secondary">
            {messages.length === 0 && (
              <div className="text-gray-400 text-center mt-10">
                Start a conversation with our AI assistant!
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="mr-2 flex-shrink-0">
                    <div className="bg-primary/90 text-white rounded-full p-1">
                      <Bot className="w-5 h-5" />
                    </div>
                  </div>
                )}
                <div
                  className={`rounded-lg px-3 py-2 max-w-[80%] break-words overflow-x-auto ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-900 border border-gray-200"
                  }`}
                  style={{ wordBreak: "break-word" }}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        // @ts-ignore
                        code({ node, inline, className, children, ...props }) {
                          return inline ? (
                            <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props}>
                              {children}
                            </code>
                          ) : (
                            <pre className="bg-gray-100 rounded p-2 overflow-x-auto my-2">
                              <code {...props}>{children}</code>
                            </pre>
                          );
                        },
                        a({ node, ...props }) {
                          return (
                            <a
                              {...props}
                              className="text-blue-600 underline break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          );
                        },
                        ul({ node, ...props }) {
                          return <ul className="list-disc pl-5 my-2" {...props} />;
                        },
                        ol({ node, ...props }) {
                          return <ol className="list-decimal pl-5 my-2" {...props} />;
                        },
                        li({ node, ...props }) {
                          return <li className="mb-1" {...props} />;
                        },
                        blockquote({ node, ...props }) {
                          return (
                            <blockquote
                              className="border-l-4 border-primary pl-3 italic text-gray-600 my-2"
                              {...props}
                            />
                          );
                        },
                        strong({ node, ...props }) {
                          return <strong className="font-semibold" {...props} />;
                        },
                        em({ node, ...props }) {
                          return <em className="italic" {...props} />;
                        },
                        p({ node, ...props }) {
                          return <p className="mb-2" {...props} />;
                        },
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="ml-2 flex-shrink-0">
                    <div className="bg-primary text-white rounded-full p-1">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="mb-2 flex items-end justify-start">
                <div className="mr-2 flex-shrink-0">
                  <div className="bg-primary/90 text-white rounded-full p-1">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <div className="rounded-lg px-3 py-2 bg-white text-gray-400 border border-gray-200">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Error Message */}
          {error && (
            <div className="px-4 py-2 text-sm text-red-600 bg-red-50 border-t border-red-200">
              {error}
            </div>
          )}
          {/* Chat Input */}
          <form
            className="flex items-center gap-2 p-4 border-t bg-white"
            onSubmit={handleSubmit}
          >
            <textarea
              className={`
                flex-1 resize-none rounded-lg
                bg-gray-100
                outline-none
                text-gray-900
                placeholder-gray-500
                px-4 py-3
                min-h-[48px] max-h-32
                transition-all
                border-none
                focus:border-none
                focus:ring-0
                hover:bg-gray-200
                focus:bg-gray-200
                shadow-none
              `}
              placeholder="What would you like to know?"
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={1}
              disabled={loading}
              style={{ fontSize: "1rem" }}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 rounded-xl p-2"
              disabled={loading || !input.trim()}
              size="icon"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
