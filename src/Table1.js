import { Component } from "react";


class Table1 extends Component{
    render(){
        const {detail}=this.props
        const store1= detail.map((e)=>{     
            return(
                <tr>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.profession}</td>
                </tr>

            )
            })   
            
    

return(
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Percentage</th>
        </tr>
        {store1}             
    </table>
)
}
}


export default Table1;