import JudgeResultCss from '../css/JudgeResult.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer.js';
import data from '../json/judgeResultData.js';

function JudgeResult() {
    let jsonDetail = [];
    jsonDetail = data;
    return (
        <>
            <Table className='ResultTable'>
                <thead>
                    <h2 className='title1'><b>적합성 적정성 고객정보 확인서(개인사업자용)</b></h2><br/>
                    <div >
                    <h5 className='title2'>적합성 적정성 판단결과를 확인해 보시고 다음단계를 이어서 진행해주시기 바랍니다.</h5></div>
                    <br/>
                </thead>
                <tbody>
                    <tr align="left">
                        <td><b>적합성 적정성 판단 결과</b></td>
                        <td>적합</td>
                    </tr>
                    <br/>
                    <tr align="left">
                        적성 정보
                    </tr>
                    {jsonDetail.map(function (data, idx) {
                        return (
                            <tr align="left">
                                <td>{data.name}</td>
                                <td>{data.content}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* Footer자리  */}
        </>
    )
}
export default JudgeResult;