
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 h-96 chat-glass rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">CodeCure.ai Support</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="text-primary-foreground hover:bg-black/10 h-6 w-6"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs mt-1 text-primary-foreground/80">
                Ask about our security products or get help
              </p>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto min-h-0">
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                  <p className="text-sm text-foreground">
                    👋 Hi! I'm here to help you with CodeCure.ai products. Ask me about:
                  </p>
                  <ul className="text-xs text-muted-foreground mt-2 space-y-1">
                    <li>• VS Code Extension setup & features</li>
                    <li>• CodeScope Chrome Extension</li>
                    <li>• Security vulnerability detection</li>
                    <li>• Pricing plans & enterprise solutions</li>
                    <li>• Technical support & documentation</li>
                  </ul>
                </div>
                
                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <p className="text-sm text-foreground">
                    💡 Quick tips: Our VS Code extension provides real-time vulnerability scanning while you code, and our Chrome extension lets you analyze GitHub repositories instantly!
                  </p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background/50 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about CodeCure.ai products..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      // Handle send message
                      console.log("Sending message:", message);
                      setMessage("");
                    }
                  }}
                />
                <Button 
                  size="sm" 
                  className="button-gradient flex-shrink-0"
                  onClick={() => {
                    console.log("Sending message:", message);
                    setMessage("");
                  }}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full button-gradient shadow-lg hover:scale-105 transition-transform"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ChatWidget;
