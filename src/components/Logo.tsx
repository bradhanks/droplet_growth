import Image from 'next/image'

export function Logomark() {
  return (
    <Image
      src="https://cdn.prod.website-files.com/6424c85b77ba7eaadd54d611/65cee4e711fac2658620cad9_Logo-Horizontal.webp"
      alt="Logo"
      width={106}
      height={55}
    />
  )
}


export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src="https://cdn.prod.website-files.com/6424c85b77ba7eaadd54d611/65cee4e711fac2658620cad9_Logo-Horizontal.webp"
      alt="Logo"
      width={106}
      height={55}
    />
  )
}
