import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Import your light and dark images
import logoLight from '@/images/logo-light.webp'
import logoDark from '@/images/logo-dark.webp'
import logomarkLight from '@/images/logomark-light.webp'
import logomarkDark from '@/images/logomark-dark.webp'

export function Logomark({ src, alt, ...props }: React.ComponentPropsWithoutRef<typeof Image>) {
  const { theme, resolvedTheme } = useTheme()

  // Use resolvedTheme to get the actual theme (handles 'system' theme)
  const currentTheme = resolvedTheme || theme
  const logomarkSrc = currentTheme === 'dark' ? logomarkDark : logomarkLight

  return (
    <Image
      alt="Logo"
      src={logomarkSrc}
      width={75}
      height={75}
      {...props}
    />
  )
}

export function Logo({ src: _src, alt: alt, ...props }: React.ComponentPropsWithoutRef<typeof Image>) {
  const { theme, resolvedTheme } = useTheme()

  const currentTheme = resolvedTheme || theme
  const logoSrc = currentTheme === 'dark' ? logoDark : logoLight

  return (
    <Image
      alt="Logo"
      src={logoSrc}
      width={106}
      height={55}
      className="h-9 w-auto fill-slate-700 dark:fill-sky-100"
      {...props}
    />
  )
}

// Alternative approach using CSS classes (if you want to handle it with CSS)
export function LogoWithCSS() {
  return (
    <div className="logo-container">
      <Image
        src={logoLight}
        alt="Logo"
        width={106}
        height={55}
        className="block dark:hidden"
      />
      <Image
        src={logoDark}
        alt="Logo"
        width={106}
        height={55}
        className="hidden dark:block"
      />
    </div>
  )
}

// If you need to handle loading states
export function LogoWithLoading() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return light theme as fallback during hydration
    return (
      <Image
        src={logoLight}
        alt="Logo"
        width={106}
        height={55}
      />
    )
  }

  const currentTheme = resolvedTheme || theme
  const logoSrc = currentTheme === 'dark' ? logoDark : logoLight

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={106}
      height={55}
    />
  )
}
