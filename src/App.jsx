import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  });
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
