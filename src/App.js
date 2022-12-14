import logo from './logo.svg';
import './App.css';
import ProdGuide from './pages/ProdGuide.js'
import CstInfoAdd from './pages/CstInfoAdd.js';
import PreGuide from './pages/PreGuide.js';
import JudgeStep1 from './pages/JudgeStep1.js'
import JudgeStep2 from './pages/JudgeStep2.js'
import JudgeStep3 from './pages/JudgeStep3.js'
import Header from './pages/Header';
import Footer from './pages/Footer';

import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Link onClick={()=>{

      }} to="/">홈</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/cstinfoadd">고객정보등록</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/prodguide">상품안내</Link> ▷	▶
      
      <Link onClick={()=>{

      }} to="/preguide">사전안내</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/judgestep1">심사준비 1단계</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/judgestep2">심사준비 2단계</Link> ▷	▶
      <Link onClick={()=>{

      }} to="/judgestep3">심사준비 3단계</Link> ▷	▶
      
      <Link onClick={()=>{

      }} to="/"></Link>
      <Routes>
        <Route path="/header" element={ <Header/> } />
        <Route path="/footer" element={ <Footer/> } />
        <Route path="/cstinfoadd" element={ <CstInfoAdd/> } />
        <Route path="/prodguide" element={ <ProdGuide/> } />
        <Route path="/preguide" element={ <PreGuide/> } />
        <Route path="/judgestep1" element={ <JudgeStep1/> } />
        <Route path="/judgestep2" element={ <JudgeStep2/> } />
        <Route path="/judgestep3" element={ <JudgeStep3/> } />
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </div>
  );
}

export default App;
