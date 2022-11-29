import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from '../json/judgeStep1Data.js';

function JudgeStep1Data() {

    let jsonItemList = [];
    jsonItemList = data;

    return (
        <Table bordered size="sm">
        <tbody>
        {
            jsonItemList.map(function(data, idx) {
                return (
                    <tr>
                        <td>
                            {data.id}. {data.title} <br/>
                            <ItemForm data={data}/>
                        </td>
                    </tr>
                )
            })
        }    
        </tbody>
      </Table>
    );
}

function ItemForm(props) {
    console.log(props.data.type);
    if(props.data.type == "select") {
        return (
            <Form>
            
                <div key="default-radio" className="mb-3">
                {
                    props.data.radioList.map(function(data) {
                        return (
                            <Form.Check 
                            type="radio"
                            name="radio-group"
                            id={data.id}
                            label={data.value}
                            />
                        );
                    })
                }
            
                </div>
                    
            </Form>
        );
    }
}

export default JudgeStep1Data;