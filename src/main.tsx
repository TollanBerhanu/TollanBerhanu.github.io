import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const redirectPath = sessionStorage.getItem('gh_redirect');
if (redirectPath) {
	sessionStorage.removeItem('gh_redirect');
	window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(<App />);
