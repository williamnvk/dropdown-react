import "./styles.css";
import { Dropdown, DropdownItem } from "./components/dropdown";
import { useState } from "react";
import { MoreIcon } from "./components/icons";
import s from "./app.module.css";
import cn from "classnames";

export default function App() {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  const toggleOne = () => {
    setOpenOne(!openOne);
  };

  const toggleTwo = () => {
    setOpenTwo(!openTwo);
  };

  const toggleThree = () => {
    setOpenThree(!openThree);
  };

  const optionsAsArray = [
    {
      id: "i-loved-this",
      label: "Like",
      onClick: () => alert("liked")
    },
    {
      id: "i-hate-this",
      label: "Dislike",
      onClick: () => alert("disliked")
    }
  ];

  return (
    <div className={cn(s.root)}>
      {/** Eg.: 1
       * renderiza o menu de itens a esquerda
       */}
      <Dropdown
        key="eg-one"
        open={openOne}
        toggle={toggleOne}
        icon={<MoreIcon />}
        tabIndex={0}
      >
        <DropdownItem href="/">Rename</DropdownItem>
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
        key="eg-two"
        open={openTwo}
        toggle={toggleTwo}
        icon={<MoreIcon />}
        tabIndex={-1}
      >
        <DropdownItem href="/">Rename</DropdownItem>
        <DropdownItem onClick={() => alert(`delete pressed`)}>
          Delete
        </DropdownItem>
        <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
          Share
        </DropdownItem>
      </Dropdown>

      {/** Eg.: 3
       * alimentando as options com array
       */}
      <Dropdown
        key="eg-three"
        open={openThree}
        toggle={toggleThree}
        icon={<MoreIcon />}
        tabIndex={-1}
      >
        {optionsAsArray.map((option) => (
          <DropdownItem key={option.id} onClick={option.onClick}>
            {option.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
