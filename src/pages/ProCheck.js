import ProCheckCSS from '../css/ProCheck.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';

 


function ProCheck() {



    return (
        <>
            <Header pageId={4} />
            <Table className='check'>
                <br/>
                <div align='left'>
                    <h4><b>진행 현황</b></h4>
                </div><br/>
                <div align='left'>
                    <div style={{color:'rgb(26, 174, 223);'}}><b>사전심사접수</b>사전심사- 보증심사 - 심사완료</div>
                </div>
                <br/>
                <br/>
                <div className='boxdiv' style={{height:200}}>당행 신용평가 결과 부적합(중기업, 소액결제성 등)사유로 영업점 방문 또는 담당자와 상담이 필요합니다.</div>
                <br/>
                <br/>
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td className='ggg'>사전심사대기</td>
                    </tr>
                    <tr>
                        <td>업체명</td>
                        <td className='ggg'>김기은센터</td>
                    </tr>
                    <tr>
                        <td>대표자</td>
                        <td>김기은</td>
                    </tr>
                    
                </tbody>
            </Table>
            <div id='danger' style={{color:'red'}}><b>[유의사항]</b></div>
        </>
        
    )
}

export default ProCheck;