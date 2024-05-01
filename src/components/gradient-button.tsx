import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/tailwind'

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export function GradientButton({
  asChild,
  className,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'px-4 py-2 rounded-md text-black font-medium from-primary-400 to-primary-600 bg-gradient-to-r hover:brightness-75 transition-all font-ibm-plex-mono',
        className,
      )}
      {...props}
    />
  )
}

export function TextGradientButton({
  asChild,
  className,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'rounded-md text-gradient-primary font-medium from-transparent to-transparent transition-all font-ibm-plex-mono hover:brightness-75 p-2',
        className,
      )}
      {...props}
    />
  )
}
