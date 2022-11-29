import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../json/cstinfoAddData';

function CstinfoAdd() {

    let jsonDetail = [];
    jsonDetail = data;

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>IBK 온라인플랫폼 입점 소상공인 보증부대출 대상 고객 정보 등록</th>
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

export default CstinfoAdd;