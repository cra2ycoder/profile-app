import { Links, Meta, Outlet, Scripts } from '@remix-run/react'

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <div>Welcome, to my first site with Remix Framework!</div>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
