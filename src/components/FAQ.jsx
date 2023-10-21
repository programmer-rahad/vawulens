import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="faq">
      <div onClick={() => setOpen(!open)}>
        <h4>{question}</h4>
        <button className="faq__icon">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {open && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
