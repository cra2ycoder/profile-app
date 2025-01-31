'use client'

import { motion } from 'motion/react'

type AnimationProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function AnimButtonWrapper(props: AnimationProps) {
  const scaleSize = {
    sm: 0.9,
    md: 1.08,
    lg: 1.25,
    xl: 1.3,
  }

  return (
    <motion.div
      whileHover={{
        scale: scaleSize[props.size || 'md'],
      }}
      whileTap={{
        scale: 1 + scaleSize[props.size || 'md'] * 0.1,
        opacity: 0.5,
      }}
    >
      {props.children}
    </motion.div>
  )
}
