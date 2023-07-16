import { HeaderProps } from "../../types/types.ts";

export default function SubHeader({ children, customClass }: HeaderProps) {
  return (
    <h3
      class={`${customClass} text-xl font-bold tracking-wider uppercase mb-4`}
    >
      {children}
    </h3>
  );
}
