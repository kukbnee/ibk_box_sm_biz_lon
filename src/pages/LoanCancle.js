import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function LoanCancle() {


    return (
        <>
            <Header pageId={5} />

            <br />
            <br />
            <br />

            <div>보증신청 취소 완료</div>
            <br />
            <br />
            <br />
            <br />
            <div>- 보증신청 취소 접수가 완료되었습니다. <br />
            다시 진행을 원하시면 상품몰 > 대출메뉴를 이용하시기 바랍니다.</div>
            <br />
            <br />
            <Link onClick={() => {

            }} to="/">
                <Button variant='primary'>확인</Button></Link>
        </>

    )
}

export default LoanCancle;