import JudgeStepCss from '../css/JudgeStep2.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import data from '../json/judgeStep2Data.js';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function JudgeStep2() {

    let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99]);
    useEffect(() => {
        console.log(answer);
    }, [answer]);

    let jsonItemList = [];
    jsonItemList = data;
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const changeHandler = (checked, id) => {
        if (checked) {
            setDisabled(isAllChecked)
            setCheckedButtons([...checkedButtons, id]);
        } else {
            setDisabled(isAllChecked)
            setCheckedButtons(checkedButtons.filter(button => button !== id));
            console.log(isAllChecked.length)
        }
    };
    const isAllChecked = checkedButtons.length === 1;

    const [isCheck, setIsCheck] = useState(false);

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState([arraydata]);

    const arraydata = [0,0,0,0,0,0,0,0,0];

    return (
        <>
            <h2 id="judge2H2">
                심사준비 2단계
            </h2>
            {/*결과값 예 아니오 answer배열에 value값 넣고 버튼 각각 하드 코딩 */}
            <Table className="TotalSection2">
                <tbody>
                    {arraydata.map(function (data, index){
                    {
                        jsonItemList.map(function (data, idx) {
                            return (
                                <tr>
                                    <td colSpan={2}>
                                        {data.id}. {data.title} <br />
                                        {data.standardVal}
                                        <ToggleButtonForm
                                             data={data} answer={answer} setAnswer= {setAnswer} id={data.id}
                                             setChecked= {setChecked} setRadioValue={setRadioValue} arraydata={arraydata}
                                        />
                                    </td>

                                </tr>
                            )
                        })
                    }})}
                    <Form.Check onChange={e => {
                        changeHandler(e.currentTarget.checked, 'check');

                    }}
                        checked={checkedButtons.includes('check') ? true : false}
                        type="checkbox"
                        name="checkbox"
                        label="위 내용을 확인하였습니다."
                    />
                    <Link onClick={() => {
                    }} to="/judgestep3">
                        <Button variant='primary' disabled={disabled}>확인</Button></Link>
                </tbody>
            </Table>


        </>
    );
}
// Todo: 예 아니요 jsonlist로 분할
function ToggleButtonForm(props) {
    
      if(props.data.type == "select"){
    return (
        <>
        {props.data.map((radio, idx) => (
        <ButtonGroup key={props.id}>
            <ToggleButton
                key={props.data.id} 
                id={`radio-${idx}`}
                type="radio"
                name="radio-group"
                variant={idx % 2 ? 'outline-danger' : 'outline-primary'}
                value={radio.value}
                checked={true}
                onChange={(e) => {
                    //setRadioValue(e.currentTarget.value);
                    let copy = [...props.data.idx];
                    copy[props.data.idx] = e.currentTarget.value;
                    props.setRadioValue(copy);
                    if (true) {
                        let obj = {
                            idx : props.data.idx,
                            value: radio.value
                        }
                        
                        let copy = [...props.answer];
                        copy[obj.idx] = obj;
                        props.setAnswer(copy);
                    };
                }}
            >
            {radio.name}
            </ToggleButton>
            
            
            </ButtonGroup>
            ))}
        </>
    )
}
}

export default JudgeStep2;