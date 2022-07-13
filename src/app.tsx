import "./styles.css";
import { Dropdown, DropdownItem } from "./components/dropdown";
import { useState } from "react";
import { MoreIcon } from "./components/icons";
import s from "./app.module.css";
import cn from "classnames";

export default function App() {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const toggleOne = () => {
    setOpenOne(!openOne);
  };

  const toggleTwo = () => {
    setOpenTwo(!openTwo);
  };

  return (
    <div className={cn(s.root)}>
      {/** Eg.: 1
       * renderiza o menu de itens a esquerda
       */}
      <Dropdown
        key="eg-1"
        open={openOne}
        toggle={toggleOne}
        icon={<MoreIcon />}
      >
        <DropdownItem href="/go-to-rename-page">Rename</DropdownItem>
        <DropdownItem onClick={() => alert(`delete pressed`)}>
          Delete
        </DropdownItem>
        <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
          Share
        </DropdownItem>
      </Dropdown>

      {/** Eg.: 2
       * renderiza o menu de itens a esquerda
       */}
      <Dropdown
        key="eg-2"
        open={openTwo}
        toggle={toggleTwo}
        icon={<MoreIcon />}
      >
        <DropdownItem href="/go-to-rename-page">Rename</DropdownItem>
        <DropdownItem onClick={() => alert(`delete pressed`)}>
          Delete
        </DropdownItem>
        <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
          Share
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
