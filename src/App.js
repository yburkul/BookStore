import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Lander from './pages/lander';
import Signup from './components/signup/signup';
import Header from './components/header/header';
import Book from './components/book/book';
import Dashboard from './dashboard/dashboard';
import BookSummary from './components/bookSummary/bookSummary';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Signup/>  */}
       {/* <Lander/>  */}
       {/* <Header/> */}
       {/* <Book/> */}
       <Dashboard/>
       {/* <BookSummary/> */}

       
    </div>
  );
}

export default App;
