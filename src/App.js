import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Testimonials } from "./pages/Testimonials";
import MainNavbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "react-bootstrap";

const App = () => (
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <BrowserRouter>
      <MainNavbar />
      <div class="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/testimonials" exact component={Testimonials} />
        </Switch>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
