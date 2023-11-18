function Table(props){
    const {data}=props
    const store= data.map((e)=>{
       return(
        <tr>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.profession}</td>
        </tr>
            
       )

    })
    
    return(
    //    <div>
    //      <h1>Welcome to React class</h1>
    //   </div>       
       
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Percentage</th>
            </tr>
            {store}             
        </table>
    )
}
export default Table;