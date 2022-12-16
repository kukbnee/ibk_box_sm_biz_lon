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
import Footer from './Footer';
import AlertModal from './AlertModal';


// let [answer, setAnswer] = useState([99,99,99,99,99,99,99,99,99,99,99,99]);

function JudgeStep1Data() {
    let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
    useEffect(() => {
      console.log(answer);  
      
      // const tick = setTimeout(() => {
    
      // }, 200);
      
    }, [answer]);

    let jsonItemList = judgeData;

    // let dispatch = useDispatch();
    // let arrAnswer = useSelector((state) => state.answerStep1);
    // console.log(arrAnswer);
    let [disabledYn, setDisabledYn] = useState(false);

    const [popup, setPopup] = useState({open: false, title: "", message: "", isHeader: false, callback: false});
    const onSubmit = (e) => {
      if(false) {
          setPopup({
              open: true,
              title: "Error",
              message: "Please make sure all fields are filled in correctly."
          });
          return;
      }
    }
    function cbFooter(idx, navigate, link) {
      
      
      if(idx === 0) {
        alert(11);
      }else {
        answer.map((data, idx)=>{
          
          let msg = validCheckItem(data, idx);
          console.log(msg);
          if(msg != null) {
            setPopup({
              open: true,
              title: "Error",
              message: msg,
              isHeader: false
          });
          }
        })
      }
    }
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
                                <tr key={`tr${idx}`}>
                                    <td key={`td${idx}`} align='left' colSpan={2}>
                                        <b>{data.id + 1}. {data.title}</b> <br />
                                        <ItemForm data={data} answer={answer} setAnswer={setAnswer} index={idx}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <Accordion >
                    <Accordion.Item eventKey="0">
                    <Accordion.Header><b>유의사항</b></Accordion.Header>
                    <Accordion.Body className='Noticon'>
                        
                    <tr>
                        <td  >
                            ㆍ보유자산, 부채 항목은 작성일 기준 / 현재소득은 최근 1년기준으로 작성<br />
                            ㆍ본 확인서는 『금융소비자 보호에 관한 법률』 제17조 및 제18조에 따라 작성되었습니다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button className='showcontent' style={{width: 480, marginLeft: 10}} variant="primary" onClick={() => { handleShow() }}>내용보기</Button>
                        </td>
                        </tr>
                        <tr>
                    </tr>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </tbody>
                
            </Table>
            <Footer obj={{
              type: "button",  
              disabled: disabledYn,
              text: ["취소","확인"],  
              link: "",  
              callbackId: cbFooter
            }} ></Footer>
            <NotiModal show={show} handleClose={handleClose} handleShow={handleShow}></NotiModal>
            <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} callback={popup.callback}/>
        </>
    );
}

function ItemForm(props) {

    let [selCrdBru, setSelCrdBru] = useState("평가기관 선택");
    let [email, setEmail] = useState(["",""]);
    let [selEmail, setSelEmail] = useState("직접입력");
    let [dirEmail, setDirEmail] = useState(["",""]);
    let [stlEmailTxt, setStlEmailTxt] = useState("block");
    let [obj1, setObj1] = useState({});
    let [obj9, setObj9] = useState({});

    const [age, setAge] = useState(0);
    const handleChange = ({ target: { value } }) => setAge(value);

    useEffect(()=> {
      let copy = [...props.answer];
      copy[props.index] = email[0] + "@" + email[1];
      props.setAnswer(copy);
    },[email]);

    useEffect(()=>{
        let copy = [...email];
        copy[1] = selEmail;
        setEmail(copy);
    },[selEmail]);

    useEffect(()=> {
      return ()=> {
        let copy = [...props.answer];
        copy[props.data.id] = obj9;
        props.setAnswer(copy);
      }
    },[obj9]);

    const Style = {
        backgroundColor: 'white',
    }

    if (props.data.type == "select") {
        return (
            <Form>

                <div key="default-radio" className="mb-3">
                    {
                        props.data.radioList.map(function (data,idx) {
                            return (
                                <Form.Check
                                    key={`${idx}${props.idx}`}
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
                            onChange={(e)=>{
                              let copy = [...props.answer];
                              copy[props.index] = e.target.value;
                              props.setAnswer(copy);
                            }}
                        />
                        <InputGroup.Text style={Style}>세</InputGroup.Text>
                    </InputGroup>

                </>
            );
        } else if (props.data.id == 9) {
            

            return (
                <>
                    <InputGroup>
                        <InputGroup.Radio  key={"radio9-0"} aria-label="Radio button for following text input" name="creditScore"
                            onClick={(e) => {
                                if ("on" == e.target.value) {
                                  
                                  let copyObj = {...obj9};
                                  copyObj.id = 0;
                                  setObj9(copyObj);
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
                        <Form.Control aria-label="Text input with radio button"
                          onChange={(e)=>{
                            let copyObj = {...obj9};
                            copyObj.value = e.target.value;
                            setObj9(copyObj);
                          }}/>
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">점(1~1000점)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Radio key={"radio9-1"} aria-label="Radio button for following text input" name="creditScore"
                          onClick={(e) => {
                            if ("on" == e.target.value) {
                              
                              let copyObj = {...obj9};
                                  copyObj.id = 1;
                                  copyObj.value = "잘모름"
                                  setObj9(copyObj);
                              }

                          }} />
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">잘 모름</InputGroup.Text>
                    </InputGroup>
                </>
            );
        } else {
            return (
                <>
                    <InputGroup>
                        <Form.Control aria-label="Text input with radio button"
                          onChange={(e)=>{
                            let copy = [...email];
                            copy[0] = e.target.value;
                            setEmail(copy);
                        }}/>
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">@</InputGroup.Text>
                        <Form.Control aria-label="Text input with radio button" style={{ "display": stlEmailTxt }} 
                          onChange={(e)=>{
                            if(stlEmailTxt === 'block') {
                              let copy = [...email];
                              copy[1] = e.target.value;
                              setEmail(copy);
                            }
                        }} />
                        <DropdownButton
                            variant="outline-secondary"
                            title={selEmail}
                            id="input-group-dropdown-1"
                        >
                            {
                              cmmData("email").map(function (data, idx) {
                                  return (
                                      <Dropdown.Item onClick={(e) => {
                                          
                                          if (data.id === 1) {
                                            setStlEmailTxt("block");
                                          } else {
                                            setStlEmailTxt("none");
                                            
                                            let copyEmail = [...email];
                                            copyEmail[1] = data.title;
                                            setEmail(copyEmail);
                                          }
                                          setSelEmail(data.title);

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

function validCheckItem(answer, idx) {
  
  switch(idx) {
    case 0 :
      if(answer.id === 1) {
        console.log(judgeData[0].msg);
        return judgeData[0].msg;
        
      }
    // case 1 :
    // case 2 :
    // case 3 :
    // case 4 :
    // case 5 :
    // case 6 :
    // case 7 :
    // case 8 :
    // case 9 :
    // case 10 :
    // case 11 :
    default :
      return null;

  }

}

function validCheckEmpty(props) {
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

function test(arg1) {
  alert(arg1);
}

export default JudgeStep1Data;