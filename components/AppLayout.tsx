type TAppLayoutProps = {
  children?: React.ReactNode
}

export default function AppLayout(props: TAppLayoutProps) {
  return (
    <main className="w-full h-[100%] m-auto flex flex-col w-4xl max-w-4xl pt-[4rem]">
      {props.children}
    </main>
  )
}
