import { ListProps } from "../../types/types.ts";
import { list } from "../../constants/list.ts";

export default function List(
  { children, customClass, type = list.UNORDERED_LIST }: ListProps,
) {
  const classProps = `${customClass} flex flex-col gap-2 mb-8`;
  return (type === list.UNORDERED_LIST
    ? <ul class={`${classProps} list-disc`}>{children}</ul>
    : <ol class={`${classProps} list-decimal`}>{children}</ol>);
}
