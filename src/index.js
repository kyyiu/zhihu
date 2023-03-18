import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'lib-flexible'

// 处理最大宽度
(function() {
  const handle = () => {
    const documentObj = document.documentElement
    const root = document.getElementById('root')
    const deviceW = documentObj.clientWidth
    const designW = 750
    root.style.maxWidth = '750px'
    if (deviceW >= designW) {
      documentObj.style.fontSize = '75px'
    }
  }
  handle()
  window.addEventListener('resize', handle)
})()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

