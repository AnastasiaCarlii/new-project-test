import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/operations";
import { setBaseCurrency } from "./redux/slice";

const HomePage = lazy(() => import("./pages/HomePage"));
const RatesPage = lazy(() => import("./pages/RatesPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(baseCurrencyThunk(crd));
    }

    function error(error) {
      dispatch(setBaseCurrency("USD"));
      console.warn(`ERROR! ${error.code}: ${error.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
