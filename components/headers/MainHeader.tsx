import { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
  childClass?: string | "";
};

export default function MainHeader({ children, childClass }: LayoutProps) {
  return (
    <h1 class={`text-xl font-bold uppercase tracking-wider ${childClass}`}>
      {children}
    </h1>
  );
}
