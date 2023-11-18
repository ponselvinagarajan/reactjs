function List(props){
     const {data1}=props
     const fruitname=data1.map((e)=>{
        return(
            <li>{e.fName}</li>
        )
     })
     return(
        <div className="fru">
            <h1>Fruits name</h1>
            <ul>
                {fruitname}
            </ul>
        </div>
     )
}


export default List