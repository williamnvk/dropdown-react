import "./styles.css";
import { Dropdown, DropdownItem } from "./components/dropdown";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <Dropdown
        open={open}
        onClick={() => toggle()}
        onClose={toggle}
        icon={<>teste</>}
      >
        <DropdownItem href="/go-to-rename-page">
          Rename
        </DropdownItem>
        <DropdownItem onClick={() => alert(`delete pressed`)}>
          Rename
        </DropdownItem>
        {/** prevent reload of page */}
        <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
          Share
        </DropdownItem>
      </Dropdown>
    </>
  );
}
