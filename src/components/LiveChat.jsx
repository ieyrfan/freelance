import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './LiveChat.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="live-chat-wrapper">
      {isOpen && (
        <div className="chat-popup glass animate-fade-in">
          <div className="chat-header">
            <div>
              <h4>FunTechz Support</h4>
              <p>We typically reply in minutes</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <X size={20} />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message">
              Hi there! 👋<br/><br/>Need a custom website or booking system? Let us know how we can help your business today.
            </div>
          </div>
          <div className="chat-footer">
            <a href="https://wa.me/60103796742?text=Hai%20FunTechz,%20saya%20berminat%20nak%20buat%20website" target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-btn">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button 
        className="floating-chat-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default LiveChat;
