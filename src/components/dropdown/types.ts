import { ComponentType, HTMLAttributes, HTMLProps, ReactNode } from "react";

export interface DropdownProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  open?: boolean;
  onClose: () => void;
}

export interface DropdownItemProps
  extends HTMLProps<HTMLAnchorElement | HTMLButtonElement> {}

export type ItemType = ComponentType<HTMLAttributes<HTMLElement>>;
