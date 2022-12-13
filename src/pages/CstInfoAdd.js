import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import data from '../json/cstinfoAddData';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function CstInfoAdd() {

    let jsonDetail = [];
    jsonDetail = data;

    return (
      <Table className='CsInfoAdd'>
        
            <h2 className='csinfoadd'>고객정보 등록</h2>
  
        <tbody>
        {
            jsonDetail.map(function(data, idx) {
                return (
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.content}</td>
                    </tr>
                )
            })
        }
        <tr>
            <td>
            <Link onClick={() => {
                    }} to="/prodguide">
              <Button variant="primary" className='csinfobutton'>다음</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    );
}

export default CstInfoAdd;