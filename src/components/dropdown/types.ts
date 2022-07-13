import { ComponentType, HTMLAttributes, HTMLProps, ReactNode } from "react";

// estou omitindo o parametro onClick, pois, prioritariamente...
// o toggle e meu principal efeito (porem, pode usar o mousedown tambem)
export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: ReactNode;
  open?: boolean;
  toggle: () => void;
}

export interface DropdownItemProps
  extends HTMLProps<HTMLAnchorElement | HTMLButtonElement> {}

export type ItemType = ComponentType<HTMLAttributes<HTMLElement>>;
