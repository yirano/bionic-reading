import Menu from "./Menu.tsx";
import { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div class="pb-12">
      <Menu />
      <main class="px-8">{children}</main>
    </div>
  );
}
