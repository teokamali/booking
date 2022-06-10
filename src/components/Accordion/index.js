import React from "react";
import "./index.scss";
const Accordion = ({ items }) => {
	return (
		<main id='mainFAQ'>
			<div className='accordion accordion-flush' id='accordionFlushExample'>
				{items.map((item, i) => (
					<div className='accordion-item' key={item.id}>
						<h2 className='accordion-header' id={`faq${i + 1}`}>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target={`#faq${item.id}`}
								aria-expanded='false'
								aria-controls={item.id}
							>
								<h6>
									{i + 1}. {item.question}
								</h6>
							</button>
						</h2>
						<div
							id={`faq${item.id}`}
							className='accordion-collapse collapse'
							aria-labelledby={`faq${i + 1}`}
							data-bs-parent='#accordionFlushExample'
						>
							<div className='accordion-body'>{item.answer}</div>
						</div>
					</div>
				))}
			</div>
		</main>
	);
};

export default Accordion;
