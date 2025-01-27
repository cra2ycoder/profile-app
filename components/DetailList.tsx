import React from 'react'

type TDetailListProps = {
  title: string
}
export default function DetailList(props: TDetailListProps) {
  return (
    <div>
      <p className="text-4xl font-weight-400 font-[Inter] font-bold text-gray-800 tracking-tight bg-gradient-to-r from-sky-800 to-cyan-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
        {props.title}
      </p>
    </div>
  )
}
