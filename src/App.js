import logo from './logo.svg';
import './App.css';
import ProdGuide from './pages/ProdGuide.js'
import CstInfoAdd from './pages/CstInfoAdd.js';
import PreGuide from './pages/PreGuide.js';
import JudgeStep1 from './pages/JudgeStep1.js'
import JudgeStep2 from './pages/JudgeStep2.js'
import JudgeStep3 from './pages/JudgeStep3.js'
import CsInfoAgree from './pages/CsInfoAgree.js'
import CsInfoAgree2 from './pages/CsInfoAgree2.js';
import DocCollectList from './pages/DocCollectList';
import JudgeResult from './pages/JudgeResult';
import JudgeDocResult from './pages/JudgeDocResult';
import ProCheck from './pages/ProCheck';
import PreJudge from './pages/PreJudge';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Link onClick={() => {

      }} to="/">홈</Link> ▷	▶
      <Link onClick={() => {

      }} to="/cstinfoadd">고객정보등록</Link> ▷	▶
      <Link onClick={() => {

      }} to="/prodguide">상품안내</Link> ▷	▶

      <Link onClick={() => {

      }} to="/preguide">사전안내</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep1">심사준비 1단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep2">심사준비 2단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgestep3">심사준비 3단계</Link> ▷	▶
      <Link onClick={() => {

      }} to="/judgeresult">적합성.적정성판단결과</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/csinfoagree">고객정보 위임 동의</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/csinfoagree2">고객정보 위임 동의2</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/doccollectlist">서류수집내역</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/judgedocresult">사전심사 서류 수집현황</Link> ▷ ▶
      <Link onClick={() => {

      }} to="/procheck">대출 진행상태 조회</Link> ▷ ▶
      <Link onClick={() => {

}} to="/prejudge">사전심사 정보입력</Link> ▷ ▶


      <Link onClick={() => {

      }} to="/"></Link>
      <Routes>
        <Route path="/cstinfoadd" element={<CstInfoAdd />} />
        <Route path="/prodguide" element={<ProdGuide />} />
        <Route path="/preguide" element={<PreGuide />} />
        <Route path="/judgestep1" element={<JudgeStep1 />} />
        <Route path="/judgestep2" element={<JudgeStep2 />} />
        <Route path="/judgestep3" element={<JudgeStep3 />} />
        <Route path="/csinfoagree" element={<CsInfoAgree />} />
        <Route path="/csinfoagree2" element={<CsInfoAgree2 />} />
        <Route path="/doccollectlist" element={<DocCollectList />} />
        <Route path="/judgeresult" element={<JudgeResult />} />
        <Route path="/judgedocresult" element={<JudgeDocResult />} />
        <Route path="/procheck" element={<ProCheck />} />
        <Route path="/prejudge" element={<PreJudge />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
