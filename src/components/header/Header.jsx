import React from "react";
import logo from "../../assets/Aidai/logo.svg";
import { Link } from "react-router-dom";
import Container from "../../helpers/Container";

const Header = () => {
  return (
    <Container>
      <div>
        <div className="flex">
          <img src={logo} alt="" />
          <div className="">
            <ul className="flex">
              <Link to={"/all"}>
                <li>ALL PRODUCTS</li>
              </Link>
              <Link to={"/about"}>
                <li>ABOUT SEEDRA</li>
              </Link>
              <Link to={"/blog"}>
                <li>OUR BLOG</li>
              </Link>
              <Link to={"/contacts"}>
                <li>CONTACTS</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
