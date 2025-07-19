import React, { useEffect, useState, useRef } from 'react'

// Utility function to calculate luminance
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const normalized = c / 255
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

// Utility function to determine if background is dark
function isDarkBackground(r: number, g: number, b: number): boolean {
  const luminance = getLuminance(r, g, b)
  return luminance < 0.5
}

// Utility function to extract RGB from various color formats
function parseColor(color: string): [number, number, number] | null {
  // Handle hex colors
  if (color.startsWith('#')) {
    const hex = color.slice(1)
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16)
      ]
    }
    if (hex.length === 6) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16)
      ]
    }
  }

  // Handle rgb() and rgba() colors
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (rgbMatch) {
    return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])]
  }

  return null
}

// Hook to detect background color and return appropriate text color
export function useAdaptiveTextColor(elementRef: React.RefObject<HTMLElement>) {
  const [textColor, setTextColor] = useState('text-gray-900')

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const computedStyle = window.getComputedStyle(element)
    const backgroundColor = computedStyle.backgroundColor

    const rgb = parseColor(backgroundColor)
    if (rgb) {
      const [r, g, b] = rgb
      const isDark = isDarkBackground(r, g, b)
      setTextColor(isDark ? 'text-slate-900' : 'text-gray-900')
    }
  }, [elementRef])

  return textColor
}

// Component that automatically adapts text color
interface AdaptiveTextProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function AdaptiveText({ children, className = '', as = 'p' }: AdaptiveTextProps) {
  const elementRef = useRef<HTMLElement>(null)
  const adaptiveTextColor = useAdaptiveTextColor(elementRef)

  // Create the component with proper typing
  const Component = as as any

  return (
    <Component
      ref={elementRef}
      className={`${adaptiveTextColor} ${className}`}
    >
      {children}
    </Component>
  )
}

// Alternative: CSS-based approach using CSS custom properties
export function AdaptiveTextCSS({ children, className = '', as = 'p' }: AdaptiveTextProps) {
  const Component = as as any

  return (
    <Component
      className={`adaptive-text ${className}`}
      style={{
        color: 'var(--adaptive-text-color, inherit)',
      }}
    >
      {children}
    </Component>
  )
}

// Higher-order component for adaptive text
export function withAdaptiveText<T extends {}>(
  WrappedComponent: React.ComponentType<T>
) {
  return function AdaptiveTextWrapper(props: T & { className?: string }) {
    const elementRef = useRef<HTMLDivElement>(null)
    const adaptiveTextColor = useAdaptiveTextColor(elementRef)

    return (
      <div ref={elementRef}>
        <WrappedComponent
          {...props}
          className={`${adaptiveTextColor} ${props.className || ''}`}
        />
      </div>
    )
  }
}
