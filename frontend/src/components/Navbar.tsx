import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.png";
import profileIcon from "../assets/profile_icon.png";
import cartIcon from "../assets/cart_icon.png";
import menuIcon from "../assets/menu_icon.png";
import dropdownIcon from "../assets/dropdown_icon.png";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between py-5 font-medium">
        <div id="logo">
          <img src={logo} className="w-40" alt="logo" />
        </div>
        <ul
          id="desktop-menu"
          className="hidden sm:flex gap-5 text-sm text-gray-700"
        >
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>PRINCIPAL</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/colecoes" className="flex flex-col items-center gap-1">
            <p>COLEÇÕES</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/sobre" className="flex flex-col items-center gap-1">
            <p>SOBRE</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contato" className="flex flex-col items-center gap-1">
            <p>CONTATO</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div id="action" className="flex items-center gap-6">
          <img
            src={searchIcon}
            className="w-5 cursor-pointer"
            alt="search icon"
          />
          <div className="group relative">
            <img className="w-5 cursor-pointer" src={profileIcon} alt="" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Meu Perfil</p>
                <p className="cursor-pointer hover:text-black">Meus Pedidos</p>
                <p className="cursor-pointer hover:text-black">Sair</p>
              </div>
            </div>
          </div>
          <Link to="/carrinho" className="relative">
            <img src={cartIcon} className="w-5 min-w-5" alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              0
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={menuIcon}
            className="w-5 cursor-pointer sm:hidden"
            alt=""
          />
        </div>

        {/* Navbar Mobile */}

        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-700">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img className="h-4 rotate-180" src={dropdownIcon} alt="" />
              <p>Voltar</p>
            </div>

            <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border">HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/colecoes" className="py-2 pl-6 border">COLEÇÕES</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/sobre" className="py-2 pl-6 border">SOBRE</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/contato" className="py-2 pl-6 border">CONTATO</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
