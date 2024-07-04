import { createRoot } from "react-dom/client";
import App from './components/app/App';

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App/>);
} throw new Error('Root element is not created');
