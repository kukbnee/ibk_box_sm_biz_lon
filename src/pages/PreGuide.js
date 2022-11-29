import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function PreGuide() {
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const changeHandler = (checked, id) => {
        if (checked) {
            setDisabled(isAllChecked)
            setCheckedButtons([...checkedButtons, id]);
            console.log('체크 반영 완료');
        } else {
            setDisabled(isAllChecked)
            setCheckedButtons(checkedButtons.filter(button => button !== id));
            console.log('체크 해제 반영 완료');
            
        }
    };
    const isAllChecked = checkedButtons.length === 1;
    
    
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>대출신청을 진행하기 전 목적(단계)별 사전 준비사항을 확인하시고 미리 준비하시기 바랍니다.</tr>
                <tr>
                    <th>목적(단계)</th>
                    <th>준비 사항</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> [ 본인확인 ] </td>
                    <td>본인 명의 휴대전화</td>
                </tr>
                <tr>
                
                    <td> [ 스크래핑(정보수집) ] </td>
                    <td><p>국세청/정부24에 등록된 개인공동인증서</p>
                    <p>- 개인공동인증서 스마트폰 복사 가이드</p>
                    <button>안내화면</button>
                    <p>- 국세청/정부24 미가입(미등록) 고객을 위한 해당 사이트</p>
                    <button onClick={() => {window.location.href = 'https://www.nts.go.kr';}}>국세청</button>
                    <button onClick={() => {window.location.href = 'https://www.gov.kr';}}>정부24</button>
                    <p>-개인공동인증서 등록 완료 후 스마트폰 내 개인공동인증서</p>
                    <button onClick={() => {window.location.href = ''}}>개인공동인증서 조회(관리)</button></td>
                </tr>
                <tr>
                    <td>[ 대출 실행 ]</td>
                    <td><p>OTP</p>
                    <p>-보유 OTP 활성화 상태 및 동작 확인</p>
                    <button>OTP 테스트</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" id='preinfocheck' onChange={e => {
                        changeHandler(e.currentTarget.checked, 'check');
                    }}
                    checked={checkedButtons.includes('check') ? true : false}></input></td>
                    <td>위 내용을 확인하였습니다.</td>
                    <button disabled = {disabled}>확인</button>
                </tr>

            </tbody>
        </Table>
    );
}

export default PreGuide;