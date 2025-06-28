import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';           // ← Asegurate de importar esto
import App from './App.jsx'
import { store } from './redux/store';  // asegúrate de la ruta


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
