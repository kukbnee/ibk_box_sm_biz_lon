import ProCheckCSS from '../css/ProCheck.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';

 


function ProCheck() {



    return (
        <>
            <Header pageId={4} />
            <Table className=''>
                <tr align='left'>
                    <td><b>진행 현황</b></td>
                </tr>
                <tr align='left'>
                    <td>국세청(홈텍스)에서 서류를 수집하여 기업은행에 제출합니다.</td>
                </tr>
                <br/>
                <br/>
                <div className='boxdiv' style={{height:200}}>당행 신용평가 결과 부적합(중기업, 소액결제성 등)사유로 영업점 방문 또는 담당자와 상담이 필요합니다.</div>
                <br/>
                <br/>
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td>사전심사 대기</td>
                    </tr>
                    <tr>
                        <td>업체명</td>
                        <td>김기은 센터</td>
                    </tr>
                    <tr>
                        <td>대표자</td>
                        <td>김기은</td>
                    </tr>
                    
                </tbody>
            </Table>
            <div align='left' style={{color:'red'}}>[유의사항]</div>
            
        </>
        
    )
}

export default ProCheck;