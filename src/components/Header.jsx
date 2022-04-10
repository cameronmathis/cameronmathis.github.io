import React, { useRef, useState } from "react";

import { useOnClickOutside } from "../services/Hooks";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import "./css/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef();

  useOnClickOutside(headerRef, () => setOpen(false));

  return (
    <header className="header" id="header" data-testid="header">
      <div ref={headerRef}>
        <MenuButton open={open} setOpen={setOpen} />
        <Menu className="menu" open={open} setOpen={setOpen} id="menu" />
      </div>
    </header>
  );
};

export default Header;
