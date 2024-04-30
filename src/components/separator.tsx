import { cn } from '@/lib/tailwind'

interface SeparatorProps {
  className?: string
}

export function Separator({ className }: SeparatorProps) {
  return <div className={cn('h-px w-full bg-white/25', className)} />
}
