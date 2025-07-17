import Image from 'next/image'
import type { ImageProps } from 'next/image'

import logo from '@/images/logo.webp'
import logomark from '@/images/logomark.webp'

// Option 1: Use Next.js Image props directly
export function Logomark({ className, ...props }: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <Image
      src={logomark}
      alt="Logo"
      width={75}
      height={75}
      className={className}
      {...props}
    />
  )
}

export function Logo({ className, ...props }: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={106}
      height={55}
      className={className}
      {...props}
    />
  )
}

// Option 2: Create a custom interface (if you want more control)
interface LogoProps {
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
}

export function LogomarkCustom({ className, ...props }: LogoProps) {
  return (
    <Image
      src={logomark}
      alt="Logo"
      width={75}
      height={75}
      className={className}
      {...props}
    />
  )
}

export function LogoCustom({ className, ...props }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={106}
      height={55}
      className={className}
      {...props}
    />
  )
}
