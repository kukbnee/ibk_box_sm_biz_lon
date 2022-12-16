import CstInfoAddcss from '../css/CstInfoAdd.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/cstinfoAddData';
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function CstInfoAdd() {

  let jsonDetail = [];
  jsonDetail = data;

  return (
    <>
      <Table className='CstInfoAddcss'>

        <h2 className='CstInfoAddcssh2'>고객 정보 등록</h2>

        <tbody>
          {
            jsonDetail.map(function (data, idx) {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.content}</td>
                </tr>
              )
            })
          }
        </tbody>
        <Link onClick={() => {

        }} to="/prodguide"><Button variant='primary' className='CstInfoAddbutton'>확인</Button></Link>
      </Table>
    </>
  );
}

export default CstInfoAdd;