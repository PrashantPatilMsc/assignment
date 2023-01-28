import Calculator from "./components/Calculator";
import NamesData from "./components/NamesData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />}/>
        <Route path="assignment2" element={<NamesData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
