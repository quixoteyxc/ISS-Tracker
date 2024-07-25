import { ManSvg } from "../icons/man-svg";

export function UiNameHolder({ fullname }: { fullname: string }) {
  return (
    <div className="flex items-center border border-black rounded w-full p-2 overflow-hidden">
      <ManSvg size="w-10"></ManSvg>
      <div className="ml-4 w-full truncate">{fullname}</div>
    </div>
  );
}
