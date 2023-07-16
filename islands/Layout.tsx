import {
  JsxElement,
  JsxFragment,
} from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";

import Menu from "./Menu.tsx";
import { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Menu />
      <main class="px-8">{children}</main>
    </div>
  );
}
