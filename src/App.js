import logo from './logo.svg';
import './App.css';
import Table from './Table'
import List from './list'
import Table1 from './Table1'
import Listclass from './Listclass'
import Greet from './setstate'

function App() {
  const userDetail=[
    {
      name:"ponselvi",
      age:20,
      profession:"developer"
    },
    {
      name:"gowri",
      age:20,
      profession:"professior"
    },
    {
      name:"kaviya",
      age:30,
      profession:"coder"
    },
    {
      name:"selvi",
      age:22,
      profession:"developer"
    }
  ]
  const fruit=[
    {
      fName:"mango",
      price:20
    },
    {
      fName:"pineapple",
      price:40
    },
    {
      fName:"watermelon",
      price:40
    },
    {
      fName:"banana",
      price:40
    }
  ]
  const userDetail1=[
    {
      name:"ponselvi",
      age:20,
      profession:"developer"
    },
    {
      name:"gowri",
      age:20,
      profession:"professior"
    },
    {
      name:"kaviya",
      age:30,
      profession:"coder"
    },
    {
      name:"selvi",
      age:22,
      profession:"developer"
    }
  ]
  const fruit1=[
    {
      fruitName:"mango",
      cost:20
    },
    {
      fruitName:"pineapple",
      cost:40
    },
    {
      fruitName:"watermelon",
      cost:40
    },
    {
      fruitName:"banana",
      cost:40
    }
  ]

  return (
    <div className="App">
      <Table data={userDetail}/>
      <List data1={fruit}/>
      <Table1 detail={userDetail1}/>
      <Listclass detail1={fruit1}/>
      <Greet />
    </div>
  );
}

export default App;
