import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import data from '../json/judgeStep2Data.js';
import Button from 'react-bootstrap/Button';

function ValueCheck() {
    let valueList = [];
    valueList = data;
    if(true) {
        alert=('adfad');
    }
}

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

    console.log(props.data.type);
    if (props.data.type === "select") {
        return (
            <>
                <Form>
                    <div key="default-button" className="mb-3">
                        {
                            props.data.buttonList.map(function (data) {
                                return (
                                    <Button variant='primary' id={data.value} value={data.value}>
                                        {data.value}
                                    </Button>
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