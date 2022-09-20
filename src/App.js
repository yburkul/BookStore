import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Lander from './pages/lander';
import Signup from './components/signup/signup';
import Header from './components/header/header';
import Book from './components/book/book';
import Dashboard from './dashboard/dashboard';
import BookSummary from './components/bookSummary/bookSummary';
import MyCart from './components/myCart/myCart';
import Router1 from './components/router/router';
import CustomerDetails from './components/customerDetails/customerDetails';
import OrderSummary from './components/orderSummary/orderSummary';
import OrderPlaced from './components/orderPlaced/orderPlaced';
import Whishlist from './components/myWhishList/whishlist';



function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Signup/>  */}
       {/* <Lander/>  */}
       {/* <Header/> */}
       {/* <Book/> */}
       {/* <Dashboard/> */}
       {/* <BookSummary/> */}
       {/* <MyCart/> */}
      
        <Router1 />
        {/* <CustomerDetails/> */}
        {/* <OrderSummary/> */}
      {/* <OrderPlaced/> */}
      {/* <Whishlist/> */}
       
    </div>
  );
}

export default App;
