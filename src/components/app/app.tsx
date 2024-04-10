import Header from "../header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Header />
        <Routes>
          <Route path="/garage" element={<Garage />} />
          <Route path="/winners" element={<Winners />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
