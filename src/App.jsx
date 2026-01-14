// App.jsx
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
import { getLanguageHeaderValue } from "./utils/language";
import Home from "./features/components/Home";



function LanguageLogger() {
  useEffect(() => {
    // Run when i18next finishes initialization
    const logLanguage = () => {
      console.log("[i18n initialized]");
      console.log("[Language header value]:", getLanguageHeaderValue());
    };

    if (i18n.isInitialized) {
      logLanguage();
    } else {
      i18n.on("initialized", logLanguage);
    }
  }, []);

  return null; // doesn't render anything
}

function App() {

  return (
  
      <BrowserRouter>
      <LanguageLogger />
        <div className="overflow-x-hidden">
          <main className="w-full">
            <Routes>
                
               <Route path="/" element={<Home/>} />
              
            </Routes>
          </main>
        </div>
      </BrowserRouter>
     
  );
}

export default App;
