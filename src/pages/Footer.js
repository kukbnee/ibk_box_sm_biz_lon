import { useState, useEffect } from 'react';
import { ButtonGroup, Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

import cmmData from '../common/cmmData.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Footer(props) {

  const margin = {
    margin: 0, padding: 0, width: '100%'
  }
  /**
   * 각 컴포넌트에서 Footer에 보내는 props.obj의 propery 정의
   */
  const objVerif = {
    type: "",
    text: [],
    link: "",
    callbackId: function(){}
  }
  /**
   * 각 컴포넌트에서 받아온 props.obj 속성과 Footer에서 정의한 object 속성 비교검증
   */
  useEffect(()=>{
    for(let key in objVerif) {
      if(!props.obj.hasOwnProperty(key) && (typeof objVerif[key] != typeof props.obj[key])) {
        console.log("props형식이 맞지 않습니다.");
        return null;
      }
    }
  },[]);
  // props = {
  //   obj : {
  //     type: "button",
  //     btnNum: 1,
  //     text: ["확인", "취소"],
  //     callbackId: actClick
  //   }
    
  // };
  const obj = props.obj;
  const type = obj.type;

  let [link, setLink] = useState(obj.link);
  const navigate = useNavigate();

  switch(type) {
    case "button" : 
      return (
        <Navbar fixed="bottom" style={margin}>
          {
            obj.text.map((data, idx)=>{
              return (
              <Button key={idx} variant={idx===0?"primary":"secondary"} size="lg" style={{width: '100%'}} onClick={()=>{setCallback(obj.callbackId, navigate, link)}}>
                {data}
              </Button>
              )  
            })
          }
        </Navbar>
      );
      
  }
}

function setCallback(callbackId, arg1, arg2) {

  if(typeof callbackId == 'function') {
    callbackId.call(callbackId, arg1, arg2);
  }else {
    console.log("콜백함수가 없습니다.");
    return;
  }
  
}

export default Footer;