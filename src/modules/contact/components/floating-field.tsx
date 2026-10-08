'use client'

import { cn } from '@/utils'
import { AnimatePresence, motion } from 'motion/react'
import { forwardRef, useId, type ComponentProps } from 'react'

type FieldProps = {
    label: string
    error?: string
    multiline?: boolean
} & Omit<ComponentProps<'input'>, 'ref' | 'placeholder'>

const BASE =
    'peer block w-full rounded-[10px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] px-5 pt-6 pb-2.5 text-sm text-white placeholder-transparent transition-[border-color,box-shadow] duration-300 outline-none focus:border-brand/70 focus:shadow-[0_0_0_4px_rgb(91_120_246/0.14)] aria-invalid:border-red-400/60'

/** Text field / textarea with a floating label that lifts on focus or when filled, plus an animated error line. */
export const FloatingField = forwardRef<HTMLInputElement & HTMLTextAreaElement, FieldProps>(
    ({ label, error, multiline, className, ...rest }, ref) => {
        const id = useId()
        const errorId = `${id}-error`
        const shared = {
            id,
            ref,
            placeholder: ' ',
            'aria-invalid': !!error,
            'aria-describedby': error ? errorId : undefined,
        }

        return (
            <div className={className}>
                <div className="relative">
                    {multiline ? (
                        <textarea
                            {...shared}
                            {...(rest as ComponentProps<'textarea'>)}
                            rows={5}
                            className={cn(BASE, 'min-h-[150px] resize-none')}
                        />
                    ) : (
                        <input {...shared} {...rest} className={BASE} />
                    )}
                    <label
                        htmlFor={id}
                        className="text-text-label/60 peer-focus:text-brand pointer-events-none absolute top-[18px] left-5 origin-left text-sm transition-all duration-300 peer-not-placeholder-shown:top-2.5 peer-not-placeholder-shown:scale-[0.8] peer-focus:top-2.5 peer-focus:scale-[0.8]"
                    >
                        {label}
                    </label>
                </div>
                <AnimatePresence initial={false}>
                    {error && (
                        <motion.p
                            id={errorId}
                            role="alert"
                            initial={{ opacity: 0, height: 0, y: -6 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pt-1.5 pl-1 text-xs text-red-300"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        )
    },
)
FloatingField.displayName = 'FloatingField'
