import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import Timecounter from './components/TimeCounter';
// import TaskChange from './Todo AppComponents/Comp';
import clothing from './WOHOC/cloth';
import electronics from './WOHOC/electronics';
import FilterClothingProducts from './WOHOC/FilterClothingProducts';
import FilterElectronics from './WOHOC/FilterElectronics';
import ClothingCategory from './WHOC/ClothingCategory';
import ApiCalls from './WHOC/ApiCalls';
import ElectronicCatagory from './WHOC/ElectronicCatagory';
import LoginData from './components/LoginData';
// import InputApiCall from './WHOC/InputApiCall';
import InputApiCall from './API CALL/InputApiCall';
import FakeApi from './API CALL/FakeApi';
import Timecounter from './components/TimeCounter';
import Axios from './API CALL/Axios';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import ComplaintsForm from './FormComponents/ComplaintsForm';
import './FormComponents/ComplaintsForm.css';
// const userData = [
//   {
//     id: 1,
//     title: 'to do app',
//     desc: 'wip',
//     status: false,
//     active: true
//   },
//   {
//     id: 2,
//     title: 'portfolio',
//     desc: 'done',
//     status: true,
//     active: true
//   },
//   {
//     id: 3,
//     title: 'contact manager',
//     desc: 'done',
//     status: true,
//     active: true
//   },
//   {
//     id: 4,
//     title: 'calculator',
//     desc: 'done',
//     status: true,
//     active: true
//   },
// ]

function App() {
  return (
    <>
   
    {/* <Timecounter value="10"></Timecounter> */}
    <div className="App">
      <ComplaintsForm></ComplaintsForm>
    {/* <BrowserRouter>
    <h1>Welcome to Application</h1>
    <Link to="/filtercloth">Filter Clothing Products</Link>
    <Link to="/countingtime">Time Counter</Link>
   
    <Routes>
      <Route path="/filtercloth" element={<FilterClothingProducts></FilterClothingProducts>}></Route>
      <Route path="/countingtime" element={<Timecounter></Timecounter>}></Route>
    </Routes>
    </BrowserRouter> */}
      {/* <FilterClothingProducts data={clothing}></FilterClothingProducts>
       <FilterElectronics data={electronics}></FilterElectronics> */}
       {/* <ClothingCategory data={clothing}></ClothingCategory>
     <ElectronicCatagory data={electronics}></ElectronicCatagory>
     <LoginData></LoginData>
      <InputApiCall></InputApiCall> */}
  {/* <FakeApi></FakeApi> */}
  {/* <Axios></Axios> */}
      {/* <ApiCalls></ApiCalls> */}

      {/* <TaskChange data={userData}></TaskChange> */}

    </div>
    </>
  );
}

export default App;


// function App() {
//   return (
//   <>
 
//   {/* <Counter value="10"></Counter> */}
//   </>
//   );
// }

// export default App;
