import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AlertModal({open, setPopup, message, title, isHeader, callback}) {
  console.log("asdf"+isHeader);
  const handleClose = () => {
    
    setPopup({open: false});
    // if(callback){
    //   callback();
    // }
  }

  return (
    <>
      <Modal size="sm" show={open} onHide={handleClose}>
        {
        isHeader?
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        :null
        }
        <Modal.Body>
        {
          message.split('\n').map( line => {
            return (<>{line}<br/></>)
          })
        }  
        </Modal.Body>
        <Modal.Footer>
        {
          ["아니오", "예"].map((data, idx)=>{
            return (
              <Button variant={idx===0?"secondary":"primary"} onClick={handleClose}>{data}</Button>  
            )
          })
        }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;