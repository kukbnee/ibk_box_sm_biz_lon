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
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAnswer } from '../common/store.js';
import Footer from './Footer';
import AlertModal from './AlertModal.js';
import { useNavigate } from 'react-router-dom';


// let [answer, setAnswer] = useState([99,99,99,99,99,99,99,99,99,99,99,99]);
//"신청대출 실행 후 관련 계약서류를 입력하신 고객님의 이메일주소(" + data + ")로 제공합니다.\n이메일주소가 맞는지 한번 더 확인바랍니다.";
function JudgeStep1Data() {
  
  //항목별 체크 상태
  let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
  //항목 숨김 처리를 위한 state
  let [isHide, setIsHide] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
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

    const [popup, setPopup] = useState({open: false, title: "", message: "", isHeader: false, confirmBtn:[], fnCallback: function(){}});
    
    // useEffect(()=> {
    //   alert("!" + JSON.stringify(popup));
    // },[popup])

    function cbAlertModal(props) {
        if(props === 0) { //아니오
          console.log(props);
        }else { //예
            
        }
    }
    function cbFooter(idx, navigate, link) {
      
      //빈값 밸리데이션
      const emptyMsg = validCheckEmpty(answer);
      
      //빈값 밸리데이션 완료 후 답안지 체크
      if(!emptyMsg) {

      }else {
        //빈값 밸리데이션 alert
        setPopup({
          open: true,
          title: "Error",
          message: emptyMsg,
          isHeader: false,
          confirmBtn: ["확인"],
          callback: cbAlertModal
        });
      }

/*
      if(idx === 0) {
        alert(11);
      }else {
        answer.map((data, idx)=>{
          
          let msg = validCheckItem(data, idx);
          //console.log("!" + msg);
          if(msg != null) {
            setPopup({
              open: true,
              title: "Error",
              message: msg,
              isHeader: false,
              confirmBtn: ["아니오", "예"],
              callback: cbAlertModal
          });
          }
        })
      }
*/      
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
                                <tr key={`tr${idx}`} style={{display: (isHide[idx])?"none":"block"}}>
                                    <td key={`td${idx}`} align='left' colSpan={2}>
                                        <b>{data.id + 1}. {data.title}</b> <br />
                                        <ItemForm data={data} answer={answer} setAnswer={setAnswer} index={idx} setIsHide={setIsHide} popup={popup} setPopup={setPopup}/>
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
            <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback}/>
        </>
    );
}

function ItemForm(props) {

  let [selCrdBru, setSelCrdBru] = useState("평가기관 선택");
  let [crdScore, setCrdScore] = useState(0);
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

  let navigate = useNavigate();
  /**
   * 라디오버튼 클릭이벤트시 항목별 처리
   * @param {*} props 
   * @param {*} idx 
   */
  function clickRadioBtn(props, idx) {
    
    //전문금융 소비자 여부 콜백
    const cbRadio0 = (is)=> {
      if(is != 0) {
        props.setIsHide([false, true, true, true, true, true, true, true, true, true, true, true]);
      }else {
        document.querySelector("#radio01").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }
    //사설자금 여부 콜백
    const cbRadio2 = (is)=>{
      if(is != 0) {
        navigate("/prodguide");
      }else {
        document.querySelector("#radio21").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }

    switch(props.index) {
      
      case 0 : 
        if(props.data.radioList[idx].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: judgeData[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio0
          });
        }else if(props.data.radioList[idx].id === 0) {
          props.setIsHide([false, false, false, false, false, false, false, false, false, false, false, false]);
        }
        break;
      case 2 :
        if(props.data.radioList[idx].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: judgeData[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio2
          });
        }
        break;
      case 9 :
        setObj9({
          id: idx,
          selCrdBru: selCrdBru,
          value: ""
        });
    }
    //진단리스트저장
    let copy = [...props.answer];
    copy[props.index] = {
      id: props.data.radioList[idx].id,
      value: props.data.radioList[idx].value
    };
    props.setAnswer(copy);
    
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
                                    id={`radio${props.index}${idx}`}
                                    label={data.value}
                                    onClick={(e) => {
                                      if ("on" === e.target.value) {
                                        clickRadioBtn(props, idx);
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
                            onChange={(e)=> {
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
                                  
                                  // let copyObj = {...obj9};
                                  // copyObj.id = 0;
                                  // setObj9(copyObj);

                                  clickRadioBtn(props, 0);
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
                            setCrdScore(e.target.value);
                          }}/>
                        <InputGroup.Text style={Style} id="inputGroup-sizing-sm">점(1~1000점)</InputGroup.Text>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Radio key={"radio9-1"} aria-label="Radio button for following text input" name="creditScore"
                          onClick={(e) => {
                            if ("on" == e.target.value) {
                              
                              // let copyObj = {...obj9};
                              //     copyObj.id = 1;
                              //     copyObj.value = "잘모름"
                              //     setObj9(copyObj);
                              clickRadioBtn(props, 1);
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

function validCheckItem(answer) {
  console.log(answer);
  
  answer.forEach((data, idx) => {
    switch(idx) {
      case 0 :
       
      case 1 :
        
        
        
      case 2 :
        
      // case 3 :
      // case 4 :
      // case 5 :
      // case 6 :
      // case 7 :
      // case 8 :
      // case 9 :
      // case 10 :
      case 11 :
        let email = answer.split("@");
        
        return //
        
      }

  });

}

function validCheckEmpty(answer) {
    let title = "";
    let index = 0;
    let verb = "하시기 바랍니다.";
    let msg = "";
    
    // answer.forEach((data, idx) => {
    for(let idx=0; idx<answer.length; idx++) {
      if (!answer[idx] || answer[idx] === 99) {
          
          title = judgeData[idx].title;
          
          let josa = "";
          if (checkBatchimEnding(title)) {
              josa = "을 ";
          } else {
              josa = "를 ";
          }
          if (idx == 1 || idx == 9 || idx == 11) {
              verb = "입력" + verb;
          } else {
              verb = "선택" + verb;
          }

          msg = title + josa + verb;
          return msg;
      }
    }
    return msg;
    
    
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