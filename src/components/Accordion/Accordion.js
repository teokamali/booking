import React from "react";
import "./Accordion.scss";
import "bootstrap/dist/css/bootstrap-grid.rtl.min.css";
import "bootstrap/dist/css/bootstrap-utilities.rtl.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle"

const Accordion = ({ items }) => {
  return (
    <main id="mainFAQ">
      {/* row 1 */}
      {/* <h5 className="accordion-title"> پرسش‌های متداول</h5> */}
      <br />
      {/* row 2 */}

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {items.map((item) => (
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
                <h6>{item.label}</h6>
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
      {/* row 3 */}
      <div className="bottomText">
        <h6>پاسخ پرسش خود را پیدا نکردید؟</h6>
        <p>
          پرسش خود را ثبت کنید، ما بزودی پاسخ آن را برایتان ارسال خواهیم کرد.
        </p>
        <a className="accordion-link" href="/"> ثبت سوال</a>
      </div>
    </main>
  );

};

export default Accordion;
