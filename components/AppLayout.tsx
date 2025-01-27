type TAppLayoutProps = {
  children?: React.ReactNode
}

export default function AppLayout(props: TAppLayoutProps) {
  return (
    <main className="w-full h-screen m-auto flex flex-col w-3xl max-w-3xl">
      {props.children}
    </main>
  )
}
