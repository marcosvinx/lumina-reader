import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Proteção para dispositivos móveis: capturar erros iniciais
window.onerror = (message, source, lineno, colno, error) => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `
      <div style="padding: 20px; color: #721c24; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px; margin: 20px; font-family: sans-serif;">
        <h3 style="margin-top: 0;">Erro de Inicialização</h3>
        <p>${message}</p>
        <small style="opacity: 0.7;">${source} (line ${lineno})</small>
      </div>
    `;
  }
  return false;
};

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Não foi possível encontrar o elemento #root no HTML.");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (e) {
  console.error("Mounting error:", e);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding: 20px; color: red;">Erro ao carregar App: ${e instanceof Error ? e.message : String(e)}</div>`;
  }
}