import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import data from '../json/judgeStep2Data.js';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';

function ValueCheck() {
    let valueList = [];
    valueList = data;
    if(true) {
        alert=('adfad');
    }
}

function JudgeStep2Data() {

    let dispatch = useDispatch();
    let arrAnswer = useSelector((state) => state.answerStep1 );
    console.log(arrAnswer);
    
    const [show, setShow] = useState(false);
    let jsonItemList = [];
    jsonItemList = data;
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const changeHandler = (checked, id) => {
        if (checked) {
            setDisabled(isAllChecked)
            setCheckedButtons([...checkedButtons, id]);
            console.log('체크 반영 완료');
        } else {
            setDisabled(isAllChecked)
            setCheckedButtons(checkedButtons.filter(button => button !== id));
            console.log('체크 해제 반영 완료');

        }
    };
    const isAllChecked = checkedButtons.length === 1;

    return (
        <>
            <Table bordered size="sm">
                <tbody>
                    {
                        jsonItemList.map(function (data, idx) {
                            return (
                                <tr>
                                    <td>
                                        {data.id}. {data.title} <br />
                                        {data.standardVal}<br />
                                        <ItemForm data={data} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <td>
                {data.title}
            </td>
            <div key="default-radio" className="mb-3">
                <Form.Check onChange={e => {
                    changeHandler(e.currentTarget.checked, 'check');
                }}
                    checked={checkedButtons.includes('check') ? true : false}
                    type="checkbox"
                    name="checkbox"
                    label="위 내용을 확인하였습니다." />
            </div>
            <button disabled={disabled} onClick={ValueCheck}>확인</button>
            
        </>
    );
}


function ItemForm(props) {
    let dispatch = useDispatch();
    if (props.data.type == "select") {
        return (
            <>
                <Form>
                    <div key="default-radio" className="mb-3">
                        {
                            props.data.buttonList.map(function (data) {
                                return (
                                    <Form.Check 
                                    type="radio"
                                    name="radio-group"
                                    id={data.id}
                                    label={data.value}
                                    onClick={(e)=>{
                                        if("on" == e.target.value){
                                            let obj = {
                                                idx : props.data.id,
                                                id: data.id,
                                                value: data.value
                                            }
                                            dispatch(changeAnswer(obj));
                                        }
                                    }}>
                                    </Form.Check>
                                );
                            })
                        }
                    </div>
                </Form>
            </>
        );
    }
}


export default JudgeStep2Data;