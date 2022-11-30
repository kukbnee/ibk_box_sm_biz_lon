import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/judgeStep1Data.js';
import cmmData from '../common/cmmData.js';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';

// let [arrAnswer, setArrAnswer] = useState([99,99,99,99,99,99,99,99,99,99,99,99]);

function JudgeStep1Data() {
    
    let jsonItemList = [];
    jsonItemList = data;
    let dispatch = useDispatch();

    
    let a = useSelector((state) => state.answerStep1 );
    console.log(a);
    return (
        <Table bordered size="sm">
        <tbody>
        {
            jsonItemList.map(function(data, idx) {
                return (
                    <tr>
                        <td align='left'>
                            {data.id}. {data.title} <br/>
                            <ItemForm data={data}/>
                        </td>
                    </tr>
                )
            })
        }    
            <tr>
                <td>
                    <Button variant="primary" onClick={()=>{dispatch(changeAnswer())}}>다음</Button>
                </td>
            </tr>
        </tbody>
      </Table>
    );
}

function ItemForm(props) {

    let [selCrdBru, setSelCrdBru] = useState("평가기관 선택");
    let [selEmail, setSelEmail] = useState("직접입력");
    let [stlEmailTxt, setStlEmailTxt] = useState("none");

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
                            onClick={(e)=>{
                              
                                
                            }}
                            />
                        );
                    })
                }
            
                </div>
                    
            </Form>
        );
    }else if(props.data.type == "text") {
        if(props.data.id == 2) {
            return (
                <>
                <InputGroup size="sm" className="mb-3">
                    
                    <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    />
                    <InputGroup.Text id="inputGroup-sizing-sm">세</InputGroup.Text>
                </InputGroup>
                
                </>
            );
        }else if(props.data.id == 10) {
            
            return (
                <>
                <InputGroup>
                    <InputGroup.Radio aria-label="Radio button for following text input" name="creditScore" />
                    <DropdownButton
                    variant="outline-secondary"
                    title={selCrdBru}
                    id="input-group-dropdown-1"
                    >
                    {
                        cmmData("crdBru").map(function(data, idx) {
                            return (
                                <Dropdown.Item onClick={()=>{
                                    setSelCrdBru(data.title);
                                }}>{data.title}</Dropdown.Item>
                            );
                        })
                    }
                    </DropdownButton>
                    <Form.Control aria-label="Text input with radio button" />
                    <InputGroup.Text id="inputGroup-sizing-sm">점(1~1000점)</InputGroup.Text>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Radio aria-label="Radio button for following text input" name="creditScore" />
                    <InputGroup.Text id="inputGroup-sizing-sm">잘 모름</InputGroup.Text>
                </InputGroup>
                </>
            );
        }else {
            return (
                <>
                <InputGroup>
                    <Form.Control aria-label="Text input with radio button" />
                    <InputGroup.Text id="inputGroup-sizing-sm">@</InputGroup.Text>
                    <Form.Control aria-label="Text input with radio button" style={{"display":stlEmailTxt}} />
                    <DropdownButton
                    variant="outline-secondary"
                    title={selEmail}
                    id="input-group-dropdown-1"
                    >
                    {
                        cmmData("email").map(function(data, idx) {
                            return (
                                <Dropdown.Item onClick={()=>{
                                    setSelEmail(data.title);
                                    if(data.name == "") {
                                        setStlEmailTxt("block");
                                    }else {
                                        setStlEmailTxt("none");
                                    }
                                    
                                }}>{data.title}</Dropdown.Item>
                            );
                        })
                    }
                    </DropdownButton>
                </InputGroup>
                </>
            );
        }
        
    }
}


function validCheck() {
    let msg = "";

}

/**
 * 단어별 맞춤 조사 선택을 위한 함수
 * @param {*} word 
 * @returns 
 */
 function checkBatchimEnding(word) {
    if (typeof word !== 'string') return null;
   
    var lastLetter = word[word.length - 1];
    var uni = lastLetter.charCodeAt(0);
   
    if (uni < 44032 || uni > 55203) return null;
   
    return (uni - 44032) % 28 != 0;
}

export default JudgeStep1Data;