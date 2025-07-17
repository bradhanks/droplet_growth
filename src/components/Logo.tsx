import Image from 'next/image'

import logo from '@/images/logo.webp'
import logomark from '@/images/logomark.webp'

export function Logomark({ className, ...props }: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <Image
      src={logomark}
      alt="Logo"
      width={75 as number}
      height={75}
      className={className}
      {...props}
    />
  )
}

export function Logo({ className, ...props }: React.ComponentPropsWithoutRef<'img'>) {
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
