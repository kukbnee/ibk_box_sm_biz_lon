import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/cstinfoAddData';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer.js';


function CsInfoAgree2() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header pageId={4} stepCd={3} />
            <Table className=''>
                <tr align='left'>
                    <td><b>서류수집기관 : 국세청(홈텍스)</b></td>
                </tr>
                <tr align='left'>
                    <td>국세청(홈텍스)에서 서류를 수집하여 기업은행에 제출합니다.</td>
                </tr>
                <br/>
                <br/>
                <tr align='left'>
                    <td><b>국세청(홈텍스)에 등록되어있는 개인용 공동인증서</b>(금융 결제원 발급분만 가능, 범용인증서 불가)가 필요합니다.</td>
                </tr>

                <tbody align='left'>
                    <tr >
                        <td style={{ color: 'red' }}>º 개인용 공동인증서를 준비해주세요.</td>
                    </tr>
                    <tr>
                        <td>º 먼저 국세청(홈텍스) 회원가입 및 개인공동인증서 등록 필요합니다.</td>
                    </tr>
                    <tr>
                        <td>º PC에서 개인용 공동인증서를 국세청(홈텍스)에 등록하신 뒤 "기업은행 기업인터넷뱅킹" 접속>인증센터>공동인증서>공동인증서복사>스마트기기로 복사를 이용하시고 스마트폰에서는 "i-ONE기업뱅킹" 앱 실행>인증센터>공동인증서>PC에서 가져오기 하셔야합니다.</td>
                    </tr>
                    <tr>
                        <td>º 서류 수집분은 당일까지만 유효하며, 당일 사전심사신청을 완료하지 않은 경우 다음 영업일 자동 취소됩니다.</td>
                    </tr>
                </tbody>

            </Table>
            

        </>
        
    )
}

export default CsInfoAgree2;