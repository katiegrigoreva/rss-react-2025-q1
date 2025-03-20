import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import MainPage from '../mainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
