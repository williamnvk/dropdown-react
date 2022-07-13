import React, { MouseEvent, FC, useRef, useState } from "react";
import cn from "classnames";
import { DropdownProps, POSITION_LEFT, POSISION_RIGHT } from ".";
import s from "./style.module.scss";

type PositionX = typeof POSITION_LEFT | typeof POSISION_RIGHT;

const Dropdown: FC<DropdownProps> = ({
  open = false,
  toggle,
  icon,
  children,
  className,
  ...props
}) => {
  const buttonRef = useRef();
  const contentRef = useRef();

  const [x, setX] = useState<PositionX>(POSISION_RIGHT);

  const openedCss = open && s["dropdown--is-opened"];
  const rootCss = cn(s.dropdown);
  const buttonCss = cn(s.dropdown__button, openedCss, className);
  const contentCss = cn(
    s.dropdown__content,
    open
      ? s["dropdown__content--is-visible"]
      : s["dropdown__content--is-hidden"]
  );

  /*
  TODOS
  [ ] adicionar effect no body...
     ...para que qualquer clique fora execute o onClose;
  [ ] usar fowardRef para que o ref fique disponível para...
      ...ser acessado no componente pai;
  [ ] adicionar regra do eslint para ignorar o ref dos elementos;
  */

  const interceptOnClick = (_e: MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore desculpe
    const coordinates = buttonRef.current.getBoundingClientRect();
    // @ts-ignore desculpe denovo
    const contentSize = contentRef.current.getBoundingClientRect();

    const buttonX = coordinates.x + coordinates.width;
    setX(contentSize.width > buttonX ? "left" : "right");

    if (toggle) toggle();
  };

  return (
    <div className={rootCss}>
      <button
        ref={buttonRef}
        className={buttonCss}
        onClick={interceptOnClick}
        {...props}
      >
        {icon}
      </button>
      <div ref={contentRef} style={{ [x]: 0 }} className={contentCss}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
