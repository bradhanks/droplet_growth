import Link from 'next/link'
import { SectionNumber } from '@/components/SectionNumber'
// import { Icon } from '@/components/Icon'

export function QuickLinks({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6">
      {children}
    </div>
  )
}

export function QuickLink({
  title,
  description,
  href,
  icon
}: {
  title: string
  description: string
  href: string
  icon: number
}) {
  return (
    <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
      {/* ... hover effect div ... */}
      <div className="relative overflow-hidden rounded-xl p-6">
        {/* New flex container */}
        <div className="flex items-baseline gap-4">
          <SectionNumber number={icon} size="small" />

          {/* `mt-4` class is removed from the h2 */}
          <h2 className="font-display text-xl font-medium text-slate-900 dark:text-slate-900">
            <Link href={href}>
              <span className="absolute -inset-px rounded-xl" />
              {title}
            </Link>
          </h2>
        </div>

        <p className="mt-1 text-lg text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
