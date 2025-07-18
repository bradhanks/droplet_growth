import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

// Import your light and dark images
import logoLight from '@/images/logo-light.webp'
import logoDark from '@/images/logo-dark.webp'
import logomarkLight from '@/images/logomark-light.webp'
import logomarkDark from '@/images/logomark-dark.webp'

export function Logomark({ className, src, ...props }: React.ComponentPropsWithoutRef<typeof Image>) {
  const { theme, resolvedTheme } = useTheme()

  // Use resolvedTheme to get the actual theme (handles 'system' theme)
  const currentTheme = resolvedTheme || theme
  const logomarkSrc = currentTheme === 'dark' ? logomarkDark : logomarkLight

  return (
    <Image
      src={src || logomarkSrc}
      width={75}
      height={75}
      className={className}
      {...props}
    />
  )
}

export function Logo({ className, src, alt, ...props }: React.ComponentPropsWithoutRef<typeof Image>) {
  const { theme, resolvedTheme } = useTheme()

  const currentTheme = resolvedTheme || theme
  const logoSrc = currentTheme === 'dark' ? logoDark : logoLight

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      height={55}
      className={className}
      {...props}
    />
  )
}

// Alternative approach using CSS classes (if you want to handle it with CSS)
export function LogoWithCSS({ className }: { className?: string }) {
  return (
    <div className={`logo-container ${className || ''}`}>
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
export function LogoWithLoading({ className }: { className?: string }) {
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
        className={className}
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
      className={className}
    />
  )
}
