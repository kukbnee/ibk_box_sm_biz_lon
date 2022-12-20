import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from '../json/judgeDocResultData.js';


function JudgeDocResult() {
    const reload = () => {
        window.location.reload("/judgedocresult");
    }
    let jsonDetail = [];
    jsonDetail = data;
    return (
        <>
            <Header pageId={4} stepCd={4} />
            <Table className=''>
                <tr align='left'>
                    <td><b>사전심사 서류 수집 현황</b></td>
                    <td><Button className='' variant="outline-primary" onClick={reload}>새로고침</Button></td>
                </tr>
                <tr align='left'>
                    <td style={{ backgroundColor: 'lightCyan' }}>사전심사 서류 수집 여부를 확인합니다.</td>
                </tr>
                

                <tbody align='left'>
                {
            jsonDetail.map(function (data, idx) {
                return(
                    <tr>
                        <td>{data.name}</td>
                        {/* 밸류값 받아서 분류해줘야함 */}
                        <td>{data.valuechecklist.value}</td>
                    </tr>
                    )})}
                </tbody>

            </Table>
            <br/>
            <br/>
            <div>º 부적합 판단을 받으신 고객은 당일자에는 대면 및 비대면 대출 신청이 불가 합니다. 다만, 익영업일 부터 다시 적합성, 적정성 판단거래 수행이 가능합니다.</div>
            <br/>
        </>
    )
}

export default JudgeDocResult;