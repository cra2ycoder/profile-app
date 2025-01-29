export default function Footer() {
  const curDate = new Date()
  return (
    <footer className="border-t py-2 text-end dark:border-gray-800 border-gray-300 flex justify-between flex-row">
      <p className="text-sm dark:text-gray-700 text-gray-500">
        Tech Stacks: Next.js v15 + React.js v19 + Tailwindcss v4 + Vercel
      </p>
      <p className="dark:text-gray-700 text-gray-500 text-sm">
        © {curDate.getFullYear()} Cra2y Coder. All rights reserved.
      </p>
    </footer>
  )
}
