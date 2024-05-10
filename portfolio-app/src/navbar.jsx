import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState, useEffect } from 'react';

const Header = () =>{
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    });
    return (
      <header className={"header" + scroll ? "sticky" : ""}>
      <h2 align="center">
      <AnchorLink href="#welcome">
          <button class="myButton">Welcome</button>
      </AnchorLink>
      <AnchorLink href="#projects">
          <button class="myButton">Projects</button>
      </AnchorLink>
      <AnchorLink href="#contact">
          <button class="myButton">Contact</button>
      </AnchorLink>
  </h2>
      </header>
    )
  }

  export default Header;