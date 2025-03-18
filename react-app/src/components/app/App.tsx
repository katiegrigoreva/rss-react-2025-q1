import { BrowserRouter } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <main>
          {'hello'}
          {/* <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes> */}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
