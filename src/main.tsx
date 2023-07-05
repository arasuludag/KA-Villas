import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ChakraProvider } from "@chakra-ui/react";

import turkish from "./localization/turkish.json";
import english from "./localization/english.json";

i18n.use(initReactI18next).init({
  resources: {
    en: english,
    tr: turkish,
  },
  fallbackLng: "tr", // Default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
