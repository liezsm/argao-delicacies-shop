import Footer from "./components/Footer";

import LoginPage from "./components/Login/LoginPage";
import { useState } from "react";
import Homepage from "./components/Homepage";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className='App'>
      {!isLogin && <LoginPage isLogged={setLogin} />}
      {isLogin && <Homepage />}
      <Footer />
    </div>
  );
}

export default App;
