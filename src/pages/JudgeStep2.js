import '../css/JudgeStep2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import data from '../json/judgeStep2Data.js';


import { ButtonGroup, ToggleButton, Table, Button } from 'react-bootstrap';

function JudgeStep2() {

    let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
    useEffect(() => {
        console.log(answer);
    }, [answer]);

    const jsonItemList = data;
    const [radio, setRadio] = useState(["y", "n"]);
  
    return (
    <>
      <Table className="TotalSection2">
          <tbody>  
          {
            jsonItemList.map((data1, idx1)=> {
              return (
                <tr key={idx1}>
                  <td key={idx1}>
                    {idx1+1}. {data1.title}
                    <ButtonGroup key={idx1}>
                    {
                      radio.map((data2, idx2)=> {
                        return (
                          <ToggleButton
                            key={`${idx1}${idx2}`}
                            id={`radio${idx1}-${idx2}`}
                            type="radio"
                            variant={idx2 % 2 ? 'outline-success' : 'outline-danger'}
                            name={`${idx1}${idx2}`}
                            value={data2}
                            checked={answer[idx1] === data2}
                            onChange={(e) => {
                              let copy = [...answer];
                              copy[idx1] = e.currentTarget.value;
                              setAnswer(copy);
                            }}>
                            {data2==='y'?"예":"아니오"}
                          </ToggleButton>
                        );
                      })
                    
                     }
                    </ButtonGroup>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
      </Table>


   </>
    );
}

export default JudgeStep2;