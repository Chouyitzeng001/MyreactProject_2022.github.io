import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import MyRouter from './Components/MyRouter';


export default function(){
  return(
    <div>
       
      <Navbar />
      <Header />
      <Main /> 
      
   <MyRouter fruit='Apple'/>
  

    </div>
  );
}