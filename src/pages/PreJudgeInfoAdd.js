import { Table } from "react-bootstrap";
import Header from "./Header.js";
import data from '../json/preJudgeInfoAddData.js';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";


function PreJudgeInfoAdd() {

    const obj = JSON.parse(JSON.stringify(data))
    const [calc, setCalc] = useState("0");


    const setMoney = () => {

        const money = document.getElementById('moneyId').value;

        const origin = parseInt(money);
        let result = Math.round((90/100*origin));
        
        document.getElementById("result").innerText=result;
    
    }
    
    return (
        <>
            <Header pageId={4} stepCd={5} />
            <Table>

                <tbody>
                    <tr align='left'><h5>1. 기업정보</h5></tr>

                    <tr align='left'>
                        <td>{obj[0].title}</td>
                        <td>{obj[0].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[1].title}</td>
                        <td>{obj[1].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[2].title}</td>
                        <td>{obj[2].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[3].title}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="고객입력필드"
                                    type="number"
                                />명
                            </InputGroup></td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[4].title}</td>
                        <td>{obj[4].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[5].title}</td>
                        <td>{obj[5].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[6].title}<br />{obj[6].val1}<br />{obj[6].val2}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="전기"
                                    type="number"
                                />원
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="당기"
                                    type="number"

                                />원
                            </InputGroup>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[7].title}</td>
                        <td>{obj[7].standardVal}</td>
                    </tr>
                    <tr align='left'><h5>2. 대표자 정보</h5></tr>

                    <tr align='left'>
                        <td>{obj[8].title}</td>
                        <td>{obj[8].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[10].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value)
                                    }}>
                                        <option value=""></option>
                                        <option value="창업">창업</option>
                                        <option value="인수">인수</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[11].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">여</option>
                                        <option value="2">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                <tr align='left'><h5>3. 주소정보</h5></tr>

                    <tr align='left'>
                        <td>{obj[12].title}</td>
                        <td>{obj[12].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[13].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">예</option>
                                        <option value="2">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[14].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">본인</option>
                                        <option value="2">타인</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[15].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">자가</option>
                                        <option value="2">임차</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[16].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">여</option>
                                        <option value="2">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[17].title}</td>
                        <td>{obj[17].standardVal}</td>
                    </tr><tr align='left'>
                        <td>{obj[18].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">예</option>
                                        <option value="2">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[19].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">본인</option>
                                        <option value="2">가족(배우자 또는 외)</option>
                                        <option value="2">타인</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[20].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">자가</option>
                                        <option value="2">임차</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[21].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">여</option>
                                        <option value="2">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                <tr align='left'><h5>4. 기타정보 (선택)</h5></tr>

                    <tr align='left'>
                        <td>{obj[22].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">예</option>
                                        <option value="2">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[23].title}</td>
                        <td>

                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example">
                                        <option value=""></option>
                                        <option value="1">본인</option>
                                        <option value="2">배우자</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[24].title}</td>
                        <td>{obj[24].standardVal}</td>
                    </tr>
                    <tr align='left'>* 해당정보는 보증심사과정에서 별도 진위여부 확인 예정임 </tr>
                    <tr align='left'><h5>5. 대출희망금액 (필수)</h5></tr>
                    <tr align='left'>
                        <td>{obj[25].title}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    id="moneyId"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="고객입력필드"
                                    type="number"
                                    onKeyUp={setMoney}
                                />
                            </InputGroup>
                        </td>
                        <td>원</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[26].title}</td>
                        <td id="result"></td><td>원</td>
                    </tr>
                <tr align='left'><h5>6. 대출은행 선택 (필수)</h5></tr>

                    <tr align='left'>
                        <td>{obj[27].title}</td>
                        <td>IBK 기업은행</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[28].title}</td>
                        <td>{obj[28].standardVal}</td>
                    </tr>

                </tbody>
            </Table>
            <h5 align='left'>윤리경영 실천 및 보증브로커 피해예방을 위한 협조 확약 등</h5>
            <div align='left'>
                <span>① 윤리경영 실천</span><br />
                <span>② 보증브로커 피해예방</span><br />
                <span>③ 입력내용 최종확인</span>
            </div>

        </>
    )
}






export default PreJudgeInfoAdd;