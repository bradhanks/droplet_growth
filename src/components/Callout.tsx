import clsx from 'clsx'
import { SectionNumber } from '@/components/SectionNumber'


const styles = {
  note: {
    container:
      'bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
    title: 'text-sky-900 dark:text-sky-400',
    body: 'text-sky-800 [--tw-prose-background:var(--color-sky-50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300',
  },
  warning: {
    container:
      'bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
    title: 'text-amber-900 dark:text-amber-500',
    body: 'text-amber-800 [--tw-prose-underline:var(--color-amber-400)] [--tw-prose-background:var(--color-amber-50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-sky-700)] dark:prose-code:text-slate-300',
  },
}



export function Callout({
  title,
  children,
  type = 'note',
  number = 1,
}: {
  title: string
  children: React.ReactNode
  type?: keyof typeof styles
  number?: number | string
}) {

  return (
    <div className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}>
      <SectionNumber number={number} />
      <div className="ml-4 flex-auto">
        <p
          className={clsx('not-prose font-display text-xl', styles[type].title)}
        >
          {title}
        </p>
        <div className={clsx('prose mt-2.5', styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  )
}
