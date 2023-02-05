import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Signin from "./pages/Signin"
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Posts from "./pages/Posts";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="Sign-in" />} />
            <Route path="/Sign-in" element={<Signin />} />
            <Route path="/Testing" element={<Testing />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
