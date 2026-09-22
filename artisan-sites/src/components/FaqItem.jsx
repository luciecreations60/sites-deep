import { useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
