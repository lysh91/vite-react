import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "@/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Routes from "@/Routes";
import "./index.css";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Routes  />
      </HashRouter>
    </ConfigProvider>
  </Provider>
);
