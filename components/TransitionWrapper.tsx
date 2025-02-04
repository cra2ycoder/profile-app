'use client'

import { motion } from 'motion/react'
import * as ReactMotion from 'motion/react-client'

type AnimationProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

type ViewAnimationProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  [key: string]: any
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
      className={props.className}
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

export function ViewAnimationWrapper(props: ViewAnimationProps) {
  return (
    <motion.div
      className={props.className}
      initial={{ opacity: 0, translateY: 25 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'anticipate', delay: props.delay }}
    >
      {props.children}
    </motion.div>
  )
}
