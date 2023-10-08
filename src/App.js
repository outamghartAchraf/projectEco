import './App.css';
import { Navbar ,Footer } from './section/Index';
import { Container } from './component/Index';
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
 
import ShoppingProvider from './context/Shopping';
import { Home,ProductShop,ServiceP,LoginP } from './Pages/Index'; 


function App() {

  return (
    <>
    <Router>
     <ShoppingProvider>
     <Navbar />
     
      <Container>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductShop/>}/>
        <Route path='/service' element={<ServiceP/>}/>
        <Route path='/login' element={<LoginP/>}/>
       </Routes>
      <Footer/>
      </Container>
       </ShoppingProvider>
      </Router> 
    </>
  );
}

export default App;
