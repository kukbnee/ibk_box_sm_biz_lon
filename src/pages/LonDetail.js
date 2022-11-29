import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../json/lonDetailData.js';

function LonDetail() {

    let jsonDetail = [];
    jsonDetail = data;

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>구분</th>
            <th>상세내용</th>
          </tr>
        </thead>
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
        </tbody>
      </Table>
    );
}

export default LonDetail;