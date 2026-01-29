// App.jsx
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
import { getLanguageHeaderValue } from "./utils/language";
import Home from "./features/home/home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Configurator3d } from "./features/components/product/Configurator3d";



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
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <LanguageLogger />
        <div className="overflow-x-hidden">
          <main className="w-full">
            <Routes>
                
               <Route path="/" element={<Home/>} />
               <Route path="/cart" element={<CartPage/>} />
                <Route path="/3D-view" element={<Configurator3d/>} />
               <Route
              path="/bike-configurator"
              element={<ProductPage />}
            />
            </Routes>
          </main>
        </div>
        
      </BrowserRouter>
      </PersistGate>
      </Provider>
     
  );
}

export default App;
