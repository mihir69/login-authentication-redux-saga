import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector } from 'react-redux';
function ModalLogin() {
  
  const [modal, setModal] = useState(true);
 const  isUserAuthenticate = useSelector(state => state.isUserAuthenticate);
   const [modalData, setmodalData] = useState({
    modalTitle: 'something goes wrong',
    modalBody: 'check your internet connection , or api field or email/password'
  })

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal &&( !isUserAuthenticate)} toggle={toggle} >
        <ModalHeader toggle={toggle}>{modalData.modalTitle}</ModalHeader>
        <ModalBody>
          {modalData.modalBody}
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            ok
          </Button>{' '}
          <Button outline color='primary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalLogin;
