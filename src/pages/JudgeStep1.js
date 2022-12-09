import JudgeStep1 from '../css/JudgeStep1.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import judgeData from '../json/judgeStep1Data.js';
import cmmData from '../common/cmmData.js';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';


// let [answer, setAnswer] = useState([99,99,99,99,99,99,99,99,99,99,99,99]);

function JudgeStep1Data() {
    let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
    useEffect(() => {

        console.log(answer);
    }, [answer]);

    let jsonItemList = judgeData;

    let dispatch = useDispatch();
    let arrAnswer = useSelector((state) => state.answerStep1);
    console.log(arrAnswer);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
         
            
                <h2 >
                    심사준비 1단계
                </h2>
            
            <Table className="TotalSection">
                <tbody>
                    {
                        jsonItemList.map(function (data, idx) {
                            return (
                                <tr>
                                    <td align='left' colSpan={2}>
                                        <b>{data.id + 1}. {data.title}</b> <br />
                                        <ItemForm data={data} answer={answer} setAnswer={setAnswer} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header><b>유의사항</b></Accordion.Header>
                    <Accordion.Body className='Noticon'>
                        <td>
                            <Button className='showcontent' variant="primary" onClick={() => { handleShow() }}>내용보기</Button>
                        </td>
                    <tr>
                        <td  >
                            ㆍ보유자산, 부채 항목은 작성일 기준 / 현재소득은 최근 1년기준으로 작성<br />
                            ㆍ본 확인서는 『금융소비자 보호에 관한 법률』 제17조 및 제18조에 따라 작성되었습니다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button className='JudgeStep1Button' variant="primary" onClick={() => { validCheck(arrAnswer) }}>다음</Button>
                        </td>
                    </tr>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </tbody>
                
            </Table>
            <NotiModal show={show} handleClose={handleClose} handleShow={handleShow}></NotiModal>
        </>
    );
}

function ItemForm(props) {
    let dispatch = useDispatch();
    let [selCrdBru, setSelCrdBru] = useState("평가기관 선택");
    let [selEmail, setSelEmail] = useState("직접입력");
    let [stlEmailTxt, setStlEmailTxt] = useState("block");

    const Style = {
        backgroundColor: 'white',
    }

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
                                    onClick={(e) => {
                                        if ("on" == e.target.value) {
                                            let obj = {
                                                idx: props.data.id,
                                                id: data.id,
                                                value: data.value
                                            }
                                            //dispatch(changeAnswer(obj));
                                            let copy = [...props.answer];
                                            copy[obj.idx] = obj;
                                            props.setAnswer(copy);
                                        }


                                    }}
                                />
                            );
                        })
                    }

                </div>

            </Form>
        );
    } else if (props.data.type == "text") {
        if (props.data.id == 1) {
            return (
                <>
                    <InputGroup size="sm" className="mb-3">

                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                        <InputGroup.Text style={Style}>세</InputGroup.Text>
                    </InputGroup>

                </>
            );
        } else if (props.data.id == 9) {

            return (
                <>
                    <InputGroup>
                        <InputGroup.Radio  aria-label="Radio button for following text input" name="creditScore"
                            onClick={(e) => {
                                if ("on" == e.target.value) {
                                    let obj = {
                                        idx: props.data.id,
                                        id: judgeData.id,
                                        value: judgeData.value
                                    }
                                    dispatch(changeAnswer(obj));
                                }

                            }} />
                        <DropdownButton
                            variant="outline-secondary"
                            title={selCrdBru}
                            id="input-group-dropdown-1"
                            
                        >
                            {
                                cmmData("crdBru").map(function (data, idx) {
                                    return (
                                        <Dropdown.Item  onClick={() => {
                                            setSelCrdBru(data.title);
                                        }}>{data.title}</Dropdown.Item>
                                    );
                                })
                            }
                        </DropdownButton>
                        <Form.Control aria-label="Text input with radio button" />
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">점(1~1000점)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Radio aria-label="Radio button for following text input" name="creditScore" />
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">잘 모름</InputGroup.Text>
                    </InputGroup>
                </>
            );
        } else {
            return (
                <>
                    <InputGroup>
                        <Form.Control aria-label="Text input with radio button" />
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">@</InputGroup.Text>
                        <Form.Control aria-label="Text input with radio button" style={{ "display": stlEmailTxt }} />
                        <DropdownButton
                            variant="outline-secondary"
                            title={selEmail}
                            id="input-group-dropdown-1"
                        >
                            {
                                cmmData("email").map(function (data, idx) {
                                    return (
                                        <Dropdown.Item onClick={() => {
                                            setSelEmail(data.title);
                                            if (data.name == "") {
                                                setStlEmailTxt("block");
                                            } else {
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

function NotiModal(props) {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>유의사항</Modal.Title>
            </Modal.Header>
            <Modal.Body>본인은 은행에 제공한 적합성·적정성 관련 정보와 관련하여 다음과 같은 사항을 확인합니다.

                <br /><br />1. 적합성·적정성 관련 정보는 본인의 연령, 대출목적(용도) 등의 정보를 정확히 알려드린 것입니다.

                <br /><br />2. 적합성·적정성 판단결과 "적합"의 의미는 고객님과 여신 상담이 가능한 것을 말하며, 여신신청에 대한 승인을
                의미하는 것은 아닙니다.

                <br /><br />3. 본인이 제공한 정보가 정확하지 않거나, 정보에
                변경사항이 발생한 경우에는 적합성·적정성 판단이
                달라질 수 있음을 설명 받았습니다.

                <br /><br />4. 상기 목적을 위해 본인의 개인(신용)정보를 수집, 이용
                또는 제공하는 것에 동의합니다.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    확인
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

function validCheck(props) {
    let title = "";
    let index = 0;
    let verb = "하시기 바랍니다.";
    let msg = "";

    for (let idx = 0; idx < props.length; idx++) {
        if (props[idx] == "99") {
            title = judgeData[idx].title;
            index = idx;
            let josa = "";
            if (checkBatchimEnding(title)) {
                josa = "을 ";
            } else {
                josa = "를 ";
            }
            if (index == 1 || index == 9 || index == 11) {
                verb = "입력" + verb;
            } else {
                verb = "선택" + verb;
            }

            msg = title + josa + verb;
            break;
        }
    }
    alert(msg);
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