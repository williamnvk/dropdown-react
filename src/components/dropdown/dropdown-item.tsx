import React, { FC } from "react";
import type { DropdownItemProps, ItemType } from ".";
import cn from "classnames";
import * as s from "./style.module.scss";

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const { href, className } = props;
  const Component = ((href ? "a" : "button") as unknown) as ItemType;

  return <Component {...props} className={cn(s.dropdown__item, className)} />;
};

export default DropdownItem;
