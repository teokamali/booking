import React from "react";
import "./index.scss";
const Accordion = ({ items }) => {
  return (
    <main id="mainFAQ">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {items.map((item, i) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header" id={item.headingId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.htmlId}`}
                aria-expanded="false"
                aria-controls={item.htmlId}
              >
                <h6>
                  {i + 1}. {item.label}
                </h6>
              </button>
            </h2>
            <div
              id={item.htmlId}
              className="accordion-collapse collapse"
              aria-labelledby={item.headingId}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Accordion;
