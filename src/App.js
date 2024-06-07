import logo from './logo.svg';
import './App.css';
import { AddAlbum } from './colponents/AddAlbum';
import { SearchAlbum } from './colponents/SearchAlbum';
import { DeleteAlbum } from './colponents/DeleteAlbum';
import { ViewAll } from './colponents/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={(<AddAlbum/>)}/>
    <Route path='/Search'element={(<SearchAlbum/>)}/>
    <Route path='/Delete'element={(<DeleteAlbum/>)}/>
    <Route path='/ViewAll'element={(<ViewAll/>)}/>
    </Routes></BrowserRouter>
  );
}

export default App;
