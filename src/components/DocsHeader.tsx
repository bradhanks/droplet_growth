'use client'

import { usePathname } from 'next/navigation'

import { navigation } from '@/lib/navigation'
import AdaptiveText from '@/components/AdaptiveText'

export function DocsHeader({ title }: { title?: string }) {
  let pathname = usePathname()
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === pathname),
  )

  if (!title && !section) {
    return null
  }

  return (
    <header className="mb-9 space-y-1">
      {section && (
        <AdaptiveText className="font-display text-sm font-medium text-sky-500">
          {section.title}
        </AdaptiveText>
      )}
      {title && (
        <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-slate-900">
          {title}
        </h1>
      )}
    </header>
  )
}
