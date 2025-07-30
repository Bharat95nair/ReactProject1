import React,{useState ,Suspense} from 'react';
import Greet from '../greet/Greet.js'
import ConditionalDemo1 from '../conditional_Rendering/ConditionalDemo1.js'
import ListDemo1 from '../List/ListDemo1.js'
import ListDemo2 from '../List/ListDemo2.js'
import UserList from '../List/userList.js'
import StateDemo1 from '../state/StateDemo1.js'
import CounterDemo1 from '../state/CounterDemo1.js'
import CounterDemo2 from '../state/CounterDemo2.js'
import ProductCards from '../List/ProductCards.js'
import StateAssignment1 from '../state/StateAssignment1.js';
import StateAssignment2 from '../state/StateAssignment2.js';
import StateAssignment3 from '../state/StateAssignment3.js';
import StateAssignment4 from '../state/StateAssignment4.js';
import StateAssignment5 from '../state/StateAssignment5.js';
import StateAssignment6 from '../state/StateAssignment6.js';
import StateAssignment7 from '../state/StateAssignment7.js';
import StateAssignment8 from '../state/StateAssignment8.js';
import StateAssignment9 from '../state/StateAssignment9.js';
import EventDemo1 from '../event/EventDemo1.js';
import EventDemo2 from '../event/EventDemo2.js';
import PureDemo1 from '../pureComponent/PureDemo1.jsx';
import PureDemo2 from '../pureComponent/PureDemo2.jsx';
import EmployeeCRUD1 from '../Assignment/EmployeeCRUD1.js';
import ToDoCrud from '../Assignment/ToDoCrud.js';
import UseRefDemo1 from '../hooks/UseRefDemo1.js';
import FormDemo1 from '../form/FormDemo1.js';
import UseMemoDemo1 from '../hooks/UseMemoDemo1.js';
import FormDemo2 from '../form/FormDemo2.js';
import FormDemo3 from '../form/formDemo3.js';
import HttpDemo1 from '../http/HttpDemo1.js';
import HttpDemo2 from '../http/HttpDemo2.js';
import HttpDemo3 from '../http/HttpDemo3.js';
import HttpDemo4 from '../http/HttpDemo4.js';
import FetchProduct from '../Assignment/FetchProduct.js';
import Todo from '../http/Todo.js';
import PostList from '../http/PostList.js';
import TrafficLight from '../Assignment/TrafficLight.js';
import CounterDemo3 from '../state/CounterDemo3.js';
import {Route,Routes} from 'react-router-dom';
import Home from '../routing/Home.js';
import About from '../routing/About.js';
import Careers from '../routing/Careers.js';
import NotFound from '../routing/NotFound.js';
import PermanentJobs from '../routing/PermanentJobs.js';
import ContractJobs from '../routing/ContractJobs.js';
import ProtectedRoute from '../routing/ProtectedRoute.js';
const ProductTableList = React.lazy(() => import('../List/TableProductList.js'));        // dynamic import 

export default function Body() {
   let a = 5;
   let msg1 = 'Good Morning';
   let msg2 = 'Good Morning';

   const [name,setName] = useState('Sanjay');
   const [add,setAdd] = useState('Bangalore');
   const [cars,setCars] = useState('Tata','Honda','Maruti')
  return (
          <div className='body'>
            {/* <demo1/> */}
            {/* <Greet name={a} msg={msg1}></Greet>
            <Greet name='Bharat' >
              <h3> F offf</h3>
              </Greet>  */}
            {/* <ConditionalDemo1></ConditionalDemo1> */}
            {/* <UserList></UserList> */}
            {/* <CounterDemo2></CounterDemo2> */}
            {/* <TableProductList></TableProductList>
            <ProductCards></ProductCards> */}
            {/* <StateAssignment1></StateAssignment1>
            <hr/>
            <StateAssignment2></StateAssignment2>
            <hr/>
            <StateAssignment3></StateAssignment3>
            <hr/>
            <StateAssignment4></StateAssignment4>
            <hr/>
            <StateAssignment5></StateAssignment5>
            <hr/>
            <StateAssignment6></StateAssignment6>
            <hr/>
            <StateAssignment7></StateAssignment7>
            <hr/>
            <StateAssignment8></StateAssignment8>
             */}
            {/* <EventDemo1></EventDemo1> */}
            {/* <EventDemo2></EventDemo2> */}
            {/* <PureDemo2></PureDemo2> */}
            
            {/* <EmployeeCRUD1></EmployeeCRUD1> */}
            {/* <Greet name= {name} ></Greet> */}
            {/* <ToDoCrud></ToDoCrud> */}
            {/* <UseRefDemo1></UseRefDemo1> */}
            {/* <FormDemo1></FormDemo1> */}
            {/* <UseMemoDemo1></UseMemoDemo1> */}
              {/* <FormDemo3></FormDemo3> */}
              {/* <HttpDemo2></HttpDemo2> */}

              {/* <HttpDemo4/> */}
              {/* <FetchProduct/> */}
              {/* <Todo></Todo>
              <PostList></PostList> */}
              {/* <TrafficLight/> */}
                {/* <CounterDemo3/> */}
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/aboutus" element={<About />} />
                  <Route exact path="/careers" element={<Careers />} >
                      <Route index element={<PermanentJobs />} />
                      <Route exact path="permanent" element={<PermanentJobs />} />
                      <Route exact path="contract" element={<ContractJobs />} />
                  </Route>
                  <Route exact path="/users" element={<UserList />} />
                  <Route exact path="/products" element={<ProtectedRoute>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ProductTableList/>
                    </Suspense>
                  </ProtectedRoute>} />
                  <Route path="*" element={<NotFound />} />
              </Routes>	



           </div>

    // <div className='container'> 
    //   <div className='row'>
    //       <h2> Electronics </h2>
    //       <div className='col'>
    //         <div className='category'>
              
    //           <img src='https://rukminim2.flixcart.com/image/220/220/xif0q/drone/b/v/u/50-15-2-e88-pro-drone-4k-hd-foldable-with-camera-hd-mini-720p-original-imahcmdnmveput3d.jpeg?q=60'></img>
    //           <div>Cameras</div>

    //         </div>
    //       </div> 
    //       <div className='col'>
    //         <div className='category'>
              
    //           <img src='https://rukminim2.flixcart.com/image/220/220/xif0q/speaker/smart-speaker/5/p/a/m3-portable-bluetooth-mini-speaker-dynamic-metal-sound-with-high-original-imah5ghbz6tqn68z.jpeg?q=60'></img>
    //           <div>Speakers</div>

    //         </div>
    //       </div> 
    //       <div className='col'>
    //         <div className='category'>
              
    //           <img src='https://rukminim2.flixcart.com/image/220/220/xif0q/fan/a/m/1/falcon-90-1-pedestal-fan-400-flipkart-smartbuy-original-imahyjga3fgeryqz.jpeg?q=60'></img>
    //           <div>Fans</div>

    //         </div>
    //       </div>
          
    //       <div className='col'>
    //         <div className='category'>
              
    //           <img src='https://rukminim2.flixcart.com/image/220/220/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=60'></img>
    //           <div>Treadmill</div>

    //         </div>
    //       </div> 
    //   </div>
    // </div>
  )
}
