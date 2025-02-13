'use client'

import { motion } from 'motion/react'
// import * as ReactMotion from 'motion/react-client'

type AnimationProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  hoverStyles?: {
    [key: string]: string
  }
  tapStyles?: {
    [key: string]: string
  }
}

type ViewAnimationProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  tagName?: string
  directions?: 'left-to-right' | 'bottom-to-top' | 'zoomout-to-zoomin'
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
        ...(props.hoverStyles || {}),
      }}
      whileTap={{
        scale: 1 + scaleSize[props.size || 'md'] * 0.1,
        opacity: 0.5,
        ...(props.tapStyles || {}),
      }}
    >
      {props.children}
    </motion.div>
  )
}

export function ViewAnimationWrapper(props: ViewAnimationProps) {
  const tagName = props.tagName || 'div'

  const animationDirections = {
    'left-to-right': {
      initial: { opacity: 0, translateX: 25 },
      whileInView: { opacity: 1, translateX: 0 },
    },
    'bottom-to-top': {
      initial: { opacity: 0, translateY: 25 },
      whileInView: { opacity: 1, translateY: 0 },
    },
    'zoomout-to-zoomin': {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
    },
  }

  const componentProps = {
    className: props.className,
    transition: { duration: 0.65, ease: 'anticipate', delay: props.delay },
    ...animationDirections[props.directions || 'bottom-to-top'],
  }

  if (tagName === 'div') {
    return <motion.div {...componentProps}>{props.children}</motion.div>
  }

  if (tagName === 'li') {
    return <motion.li {...componentProps}>{props.children}</motion.li>
  }
}
