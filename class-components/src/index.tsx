import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './style/style.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error('Root element is not created');
}
