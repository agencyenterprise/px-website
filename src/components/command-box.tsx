import { cn } from '@/lib/tailwind'

interface CommandSegment {
  text: string
  highlighted?: boolean
}

interface CommandBoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  segments: CommandSegment[]
  size?: 'md' | 'sm'
}

export function CommandBox({
  segments,
  size = 'md',
  className,
  ...props
}: CommandBoxProps) {
  return (
    <code
      className={cn(
        'flex items-center gap-3.5 border rounded-md border-neutral-700 w-fit px-4 py-2 font-medium text-2xl leading-7 whitespace-nowrap',
        size === 'sm' && 'text-lg gap-3',
        className,
      )}
      {...props}
    >
      $
      {segments.map((segment, index) => {
        return (
          <span
            key={index}
            className={cn(segment.highlighted && 'text-primary-400')}
          >
            {segment.text}
          </span>
        )
      })}
    </code>
  )
}
