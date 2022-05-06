import Footer from "./components/Footer";

import LoginPage from "./components/Login/LoginPage";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Spinner from "./components/Spinner";
function App() {
  const [isLogin, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      {!isLogin && <LoginPage isLogged={setLogin} loading={setLoading} />}

      {isLogin && <Homepage loading={loading} />}
      <Footer />
    </div>
  );
}

export default App;
