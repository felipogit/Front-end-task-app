import { useEffect, useRef } from 'react';
import { StyledContainerBox } from './../DeletingBox/styled';
import { StyledModalAddTech } from './styled';
import { UpdatePostForm } from './../editBoxForm/index';

export const ModalUpdate = ({ post, setIsEditing }) => {
  const modalRef = useRef();

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <StyledModalAddTech>
      <StyledContainerBox ref={modalRef}>
        <UpdatePostForm post={post} setIsEditing={setIsEditing} />
      </StyledContainerBox>
    </StyledModalAddTech>
  );
};
