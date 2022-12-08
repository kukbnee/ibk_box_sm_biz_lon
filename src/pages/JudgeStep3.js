import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/judgeStep3Data.js';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function JudgeStep3() {

  let jsonItemList = [];
  jsonItemList = data;

  //Modal pdf밸류 분할필요
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [visible, setVisible] = useState(false);



  return (
    <Table bordered size="sm">
      <thead>
        <b><br />정보제공동의 [필수] <br />
          대출 약정신청을 위해 아래 내용을 충분히 이해하신 후 동의하시기 바랍니다.
        </b>
      </thead>
      <tbody>
        {
          jsonItemList.map(function (data, idx) {
            return (

              <tr>
                <th>
                  {data.id}. {data.title} <br />
                  {data.contents}
                </th>
                <td>
                  {values.map((v, idx) => (
                    <Button key={idx} className="me-1 mb-1" onClick={() => handleShow(v)}>
                      {data.pdf}
                    </Button>
                  ))}
                  <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body><iframe src={} height="100%" width="100%" title="ModalPdfViewer"/></Modal.Body> */}
                  </Modal> 
                <Button className="me-2 mb-2" onClick={()=> {setVisible(!visible);}}>{visible ? "동의완료" : "동의"}</Button>

                </td>

                {/**내용보기 Modal로 pdf파일 뷰어 출력 데이터??where*/}

              </tr>

            )
          })
        }
        <tr>
                <td>
                    <Button variant="primary">다음</Button>
                </td>
            </tr>
      </tbody>
    </Table>
  );
}


function ItemForm(props) {
  console.log(props.data.type);
  if (props.data.type == "select") {
    return (
      <Form>

        <div key="default-radio" className="mb-3">
          {
            props.data.radioList.map(function (data) {
              return (
                <Form.Check
                  type="radio"
                  name="radio-group"
                  id={data.id}
                  label={data.value}
                />
              );
            })
          }

        </div>

      </Form>
    );
  }
}

export default JudgeStep3;