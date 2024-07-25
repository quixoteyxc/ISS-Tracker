import clsx from "clsx";

export function ManSvg({ size }: { size:string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(size)}
      viewBox="0 0 512 512"
    >
      <path
        fill="black"
        d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 16a72 72 0 1 0 0-144a72 72 0 1 0 0 144"
      />
    </svg>
  );
}