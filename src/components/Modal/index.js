import React from "react";
import "./index.scss";

const Modal = ({
	id = "modal1",
	buttonText,
	buttonClassnames,
	modalTitle,
	children,
	submitButtonText,
	submitButtonClassNames,
	submitButtonOnClick,
	isScrollable = false,
	renderCloseButton = false,
	isCentered = false,
}) => {
	return (
		<div className='modal-custom'>
			<button
				type='button'
				className={buttonClassnames}
				data-bs-toggle='modal'
				data-bs-target={`#${id}`}
			>
				{buttonText}
			</button>

			<div
				className='modal fade'
				id={id}
				// data-bs-backdrop='static'
				data-bs-keyboard='false'
				tabIndex='-1'
				aria-labelledby='staticBackdropLabel'
				aria-hidden='true'
			>
				<div
					className={`modal-dialog ${isCentered ? "modal-dialog-centered" : ""} ${
						isScrollable ? "modal-dialog-scrollable" : ""
					}`}
				>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='staticBackdropLabel'>
								{modalTitle}
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<>{children}</>
						</div>
						{renderCloseButton && (
							<div className='modal-footer'>
								<button
									type='button'
									className='btn-main'
									data-bs-dismiss='modal'
									aria-label='Close'
								>
									Submit
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
