import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import SinglePage from "./pages/Singlepage";
import BookingPage from "./pages/BookingPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/singleshow/:id" component={SinglePage} />
          <Route path="/booking/:id" component={BookingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
