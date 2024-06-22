import "./App.css";
import Home from "./pages/home";
// import Login from "./pages/login";
// import Register from "./pages/register";

function App() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="m-3  p-5 bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <Home />
      </div>
    </div>
  );
}

export default App;
