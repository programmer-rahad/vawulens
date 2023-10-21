import {
  NotFound,
  About,
  Contact,
  Gallery,
  Home,
  Plans,
  Trainers,
} from "./pages";
import { Footer, Navbar } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        {/* <Home />
        <About />
        <Contact />
        <Gallery />
        <Home />
        <Plans />
        <Trainers /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
