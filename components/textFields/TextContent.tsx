import { HeaderProps } from "../../types/types.ts";

export default function TextContent({ children, customClass }: HeaderProps) {
  return <p class={`${customClass} mb-8`}>{children}</p>;
}
