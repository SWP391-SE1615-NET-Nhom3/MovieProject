import { cn } from '@/utils/helper'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <Link
    to="/"
    className={cn(`flex flex-row items-center xs:gap-2 gap-[6px])`)}
  >
    <Image
      width={28}
      height={28}
      src="/assets/svg/tmovie.svg"
      alt="logo"
      className="sm:h-[28px] h-[24px] sm:w-[28px] w-[24px]"
    />
    <span
      className={cn(`text-black dark:text-primary`,`font-semibold sm:text-[18px] text-[16.75px]`)}
    >
      tMovies
    </span>
  </Link>
  )
}
