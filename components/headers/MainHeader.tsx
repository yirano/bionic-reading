import { HeaderProps } from "../../types/types.ts";

export default function MainHeader({ children, customClass }: HeaderProps) {
  return (
    <h1 class={`text-3xl font-bold uppercase tracking-wider ${customClass}`}>
      {children}
    </h1>
  );
}
