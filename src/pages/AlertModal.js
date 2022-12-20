import { Button, Modal } from 'react-bootstrap';

function AlertModal({open, setPopup, message, title, isHeader, confirmBtn, callback}) {
  
  const handleClose = (props) => {
    
    setPopup({open: false, message: "", callback: callback});
    
    if(typeof callback === "function"){
      callback(props);
    }
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
          confirmBtn.map((data, idx)=>{
            return (
              <Button variant={idx===0?"secondary":"primary"} onClick={()=>{handleClose(idx)}}>{data}</Button>  
            )
          })
        }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;