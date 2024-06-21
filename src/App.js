// import "./App.css";
// import Header from "./components/common/header/Header";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Home from "./components/home/Home";
// import Login from "./components/login/login";
// import Register from "./components/register/register";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/courses" component={CourseHome} />
//           <Route exact path="/team" component={Team} />
//           <Route exact path="/pricing" component={Pricing} />
//           <Route exact path="/journal" component={Blog} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/Login" component={Login} />
//           <Route exact path="/Register" component={Register} />
//         </Switch>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Udaan from "./components/Udaan/Udaan";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/udaan" element={<Udaan />} /> {/* Add the Udaan route */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
