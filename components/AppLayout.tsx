type TAppLayoutProps = {
  children?: React.ReactNode
}

export default function AppLayout(props: TAppLayoutProps) {
  return (
    <main className="w-full h-screen m-auto flex flex-col w-4xl max-w-4xl">
      {props.children}
    </main>
  )
}
