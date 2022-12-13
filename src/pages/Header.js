import { Nav, Navbar } from 'react-bootstrap';

/**
 * 사용법 : 
 * 1. import Header from 'Header.js';
 * 2. 해당화면 상단에 컴포넌트로 호출 
 * 3. 단계코드 props전송 ex)<Header stepCd={2}/> 
 * 4. 단계코드
 *  1: "정보제공동의", 2: "본인인증", 3: "서류수집", 4: "서류전송현황", 5: "정보입력", 6: "사전심사신청"
 */
function Header(props) {

  /**
   * 0. 진행단계는 각 화면에서 부여
   * 1. 세션체크
   * 2. 진행현황 코드값 request
   * 3.  
   */
  const arrStepNm = ["정보제공동의", "본인인증", "서류수집", "서류전송현황", "정보입력", "사전심사신청"];
  props = {stepCd: 2};
  return (
    <div style={{
      textAlign: 'center',
      borderBottomStyle: 'solid',
      borderWidth: 'thin'
    }}>
    <Nav>
      {
      arrStepNm.map((data, idx)=> {
        let num = idx + 1;
        if(num === props.stepCd){
          return (
            <Nav.Item key={idx} style={{width: '150px', heigth: '20px', borderRadius: '50px', backgroundColor: '#004C9D', margin: '5px'}}>
              <span style={{color: 'white' }}>{num}. {data}</span>
            </Nav.Item>
          );
        }else {
          return (
            <Nav.Item key={idx} style={{width: '20px', heigth: '20px', borderRadius: '50%', border: '1px solid #004C9D', margin: '5px'}}>
              <span style={{color: '#004C9D' }}>{num}</span>
            </Nav.Item>
            )
        }
        
      })
      }
    </Nav>
    </div>
  );
}

export default Header;