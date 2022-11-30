import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import data from '../json/judgeStep3Data.js';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import PdfView from '../common/PdfView.js';

function JudgeStep3() {

    let jsonItemList = [];
    jsonItemList = data;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    

    return (
        <Table bordered size="sm">
          <thead>
          <b><br/>정보제공동의 [필수] <br/>
          대출 약정신청을 위해 아래 내용을 충분히 이해하신 후 동의하시기 바랍니다.
          </b>
          </thead>
        <tbody>
        {
            jsonItemList.map(function(data, idx) {
                return (
                    <tr>
                        <th>
                            {data.id}. {data.title} <br/>
                            {data.contents}
                        </th>
                        <td>{data.data}<br/>
                        <Button variant='primary' onClick={PdfView}>동의</Button>
                        </td>
                        {/**내용보기 Modal로 pdf파일 뷰어 출력 데이터??where*/}
                        
                    </tr>
                )
            })
        }    
        </tbody>
      </Table>
    );
}

function ItemForm(props) {
    console.log(props.data.type);
    if(props.data.type == "select") {
        return (
            <Form>
            
                <div key="default-radio" className="mb-3">
                {
                    props.data.radioList.map(function(data) {
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