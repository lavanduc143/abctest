import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Select from "./pages/Select";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/select' element={<Select/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
