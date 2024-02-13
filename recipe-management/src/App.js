import './App.css';
import RecipeAdd from './components/AddReceipe/AddReceipe';
import RecipeList from './components/RecipeList/RecipeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RecipeList/>}/>
        <Route path='/add' element={<RecipeAdd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
