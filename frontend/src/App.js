import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import FAQ from "./components/FAQ";
import Register from "./pages/Register";
import Categories from "./pages/Categories";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
