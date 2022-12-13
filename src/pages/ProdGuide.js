import data from '../json/prodGuideData.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ProdGuide() {

  let jsonDetail = [];
  jsonDetail = data;

  return (
    <table className='Prodguide'>
      <tr className='h2prodguidwrapp'>
        <h2 className='h2prodguide'>상품안내</h2>
      </tr>
      <tbody>
        <tr className='prodtr'>
          <th className='prodth'>구분</th>
          <th className='prodth'>상세내용</th>
        </tr>

        {
          jsonDetail.map(function (data, idx) {
            return (
              <tr className='prodtr'>
                <td className='prodtd'>{data.name}</td>
                <td className='prodtd'>{data.content}</td>
              </tr>
            )
          })
        }
        <tr>
          <td>
            <Link onClick={() => {

            }} to="/preguide">
              <Button variant="primary" className='prodguidebutton'>다음</Button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProdGuide;