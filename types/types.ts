import { ComponentChildren } from "preact";

export type HeaderProps = {
  children: ComponentChildren;
  customClass?: string;
};

export type ListProps = {
  children: ComponentChildren;
  customClass?: string;
  type?: string;
};
