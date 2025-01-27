type TTitleProps = {
  text: string
}

export default function Title(props: TTitleProps) {
  return (
    <h4 className="w-auto inline-block text-4xl font-weight-400 font-[Inter] font-bold bg-gradient-to-r from-violet-800 to-pink-600 text-transparent bg-clip-text whitespace-nowrap leading-normal">
      {props.text}
    </h4>
  )
}
