import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from 'store';
import { StyleProvider } from '@ant-design/cssinjs';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>

      <StyleProvider hashPriority="high">
        <App />
        
      </StyleProvider>

    </BrowserRouter>
    {/* </React.StrictMode>, */}
  </Provider>
)
