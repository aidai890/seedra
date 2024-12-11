import React from "react";
import logo from "../../assets/Aidai/logo.svg";
import { Link } from "react-router-dom";
import Container from "../../helpers/Container";
import HeaderInput from "../headerInput/HeaderInput";
import Icons from "../icons/Icons";
import IconsHeader from "../iconsHeader/IconsHeader";


const Header = () => {
  return (
    <>
    <Container>
      <div className="">
        <div className="flex justify-between ">
         <Link to={'/'}>
         <img className="pt-5" src={logo} alt="" />
         </Link>
          <div className="">
            <ul className="flex gap-5 pt-4 text-gray-500 font-Lexend">
              <Link to={"/all"}>
                <li>ALL PRODUCTS |</li>
              </Link>
              <Link to={"/about"}>
                <li>ABOUT SEEDRA |</li>
              </Link>
              <Link to={"/blog"}>
                <li>OUR BLOG |</li>
              </Link>
              <Link to={"/contacts"}>
                <li>CONTACTS </li>
              </Link>
            </ul>
          </div>
          <IconsHeader/>
          <HeaderInput/>
          <Icons/>
        </div>
      </div>
    </Container>
    <hr className="mt-[10px]" />
    </>
  );
};

export default Header;
