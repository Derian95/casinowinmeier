import { FC } from "react";

interface Props{
  isDark:   boolean
}

export const FacebookIcon:FC<Props> = ({ isDark }) => {
  return (
   <a target="_blank" href="https://www.facebook.com/winmeierhotel" className="p-1 group">

    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className="group-hover:-translate-y-1  group-hover:stroke-[#f6e27a] duration-300 cursor-pointer"

  >
    <path
      fill={`${isDark ?'#fff':'#000'}`}
      d="M19.993 5.14A10.501 10.501 0 0 0 2.07 12.567a10.5 10.5 0 0 0 10.5 10.502c1.378 0 2.744-.269 4.018-.793a10.774 10.774 0 0 0 3.405-2.283 10.5 10.5 0 0 0 0-14.851Zm-.74 14.102a9.434 9.434 0 0 1-5.625 2.716v-6.934h1.988a1.058 1.058 0 0 0 0-2.114h-1.988v-2.896a1.057 1.057 0 0 1 1.057-1.057h1.269a1.057 1.057 0 0 0 0-2.114h-1.798a2.644 2.644 0 0 0-2.643 2.642v3.425H9.535a1.058 1.058 0 0 0 0 2.114h1.978v6.934a9.432 9.432 0 0 1-8.155-7.401A9.425 9.425 0 0 1 7.785 4.473a9.433 9.433 0 0 1 13.972 5.936c.457 1.922.299 3.939-.453 5.766a9.578 9.578 0 0 1-2.051 3.066Z"
    />
  </svg>
  </a>
  )
};