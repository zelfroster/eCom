import { Routes, Route } from "react-router-dom";

import Auth from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Nav from "./routes/nav/nav.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
