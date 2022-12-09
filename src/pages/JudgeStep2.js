import JudgeStepCss from '../css/JudgeStep2.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from '../json/judgeStep2Data.js';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';


function JudgeStep2Data() {


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

    const [isCheck, setIsCheck] = useState(false)

    return (
        <>
            <h2 >
                심사준비 2단계
            </h2>
            <Table className="TotalSection">
                <tbody>
                    {
                        jsonItemList.map(function (data, idx) {
                            return (
                                <tr>
                                    <td align='left' colSpan={2}>
                                        {data.id} {data.title} <br />
                                        {data.standardVal}<br />
                                        <ItemForm data={data} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <td>
                        {data.title}
                    </td>
                        <Form.Check onChange={e => {
                            changeHandler(e.currentTarget.checked, 'check');
                        }}
                            checked={checkedButtons.includes('check') ? true : false}
                            type="checkbox"
                            name="checkbox"
                            label="위 내용을 확인하였습니다." />
                    <Button variant='primary' disabled={disabled}>확인</Button>
                </tbody>
            </Table>


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
                                        onClick={(e) => {
                                            if ("on" == e.target.value) {
                                                let obj = {
                                                    idx: props.data.id,
                                                    id: data.id,
                                                    value: data.value
                                                }
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