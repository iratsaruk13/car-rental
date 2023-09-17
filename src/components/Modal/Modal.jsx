import { createPortal } from "react-dom";
import { CloseButton, ModalCard, Overlay } from "./Modal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {

    useEffect(() => {

        const handleKeyDown = e => {
          if (e.code === 'Escape') {
             onClose();
             document.body.style.overflow = 'visible'; 
          };
          };
          
          window.addEventListener('keydown', handleKeyDown);
          
          return () => window.removeEventListener('keydown', handleKeyDown);
    
       }, [onClose]);

       const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
           onClose();
           document.body.style.overflow = 'visible'; 
        };
     };
  
     document.body.style.overflow = 'hidden'; 

     const handleCloseBtn = () => {
        onClose();
          document.body.style.overflow = 'visible';
      }
    
      document.body.style.overflow = 'hidden';

  return (
    createPortal(
        <Overlay onClick={handleBackdropClick}>
            <ModalCard>
                <CloseButton type="button" onClick={handleCloseBtn}>
×
                </CloseButton>
                {children}

            </ModalCard>
        </Overlay>, modalRoot
    )
   
  )
}

export default Modal