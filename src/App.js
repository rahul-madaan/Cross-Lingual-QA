import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import {SearchPage} from "./MyComponents/SearchPage";
import {Header} from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/search-page"
                 element={<><Header/>
                   <SearchPage/>
                 <Footer/></>}/>



          <Route exact path="/" element={<Navigate to="/search-page"/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
