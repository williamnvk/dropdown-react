import React, { MouseEvent, FC, useRef, useState } from "react";
import cn from "classnames";
import type { DropdownProps } from ".";
import s from "./style.module.scss";

const Dropdown: FC<DropdownProps> = ({
  open = false,
  onClose,
  icon,
  children,
  onClick,
  className,
  ...props
}) => {
  const buttonRef = useRef();
  const contentRef = useRef();

  const [x, setX] = useState<"left" | "right">("right");

  const openedCss = open && s["dropdown--is-opened"];
  const rootCss = cn(s.dropdown);
  const buttonCss = cn(s.dropdown__button, openedCss, className);
  const contentCss = cn(
    s.dropdown__content,
    open
      ? s["dropdown__content--is-visible"]
      : s["dropdown__content--is-hidden"]
  );

  const interceptOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore desculpe
    const coordinates = buttonRef.current.getBoundingClientRect();
    // @ts-ignore desculpe denovo
    const contentSize = contentRef.current.getBoundingClientRect();

    const buttonX = coordinates.x + coordinates.width;
    setX(contentSize.width > buttonX ? "left" : "right");

    if (onClick) onClick(e);
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
