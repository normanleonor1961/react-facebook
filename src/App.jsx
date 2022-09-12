import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="grid place-items-center h-100 w-100 mt-20">
        <div className="mt-10">
          <img
            src="https://links.papareact.com/t4i"
            height={400}
            width={400}
            alt="logo"
          />
        </div>
        <div className="flex pb-10 flex-col justify-center text-center align-middle mt-20">
          <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none" />
        </div>
      </div>
    );
  }

  return <div className="App">{user ? <Home /> : <Login />}</div>;
}

export default App;
