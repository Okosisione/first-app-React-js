import Blog from "./pages/Blog";
import Home from "./pages/Home"
import { Route, Routes} from "react-router-dom";
export default function App() {
  return (
      <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
  </Routes>
  );
}