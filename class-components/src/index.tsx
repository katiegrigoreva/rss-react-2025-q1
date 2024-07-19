import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './style/style.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { StrictMode } from 'react';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <ErrorBoundary>
      <StrictMode>
        <App />
      </StrictMode>
    </ErrorBoundary>
  );
} else {
  throw new Error('Root element is not created');
}
