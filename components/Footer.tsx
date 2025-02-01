export default function Footer() {
  const curDate = new Date()
  return (
    <footer className="border-t py-2 text-end dark:border-gray-800 border-gray-300 flex md:justify-between flex-row flex-wrap md:flex-nowrap justify-center">
      <p className="text-sm dark:text-gray-700 text-gray-500">
        Tech Stacks: Next.js + React.js + Tailwindcss + Vercel
      </p>
      <p className="dark:text-gray-700 text-gray-500 text-sm mt-4 sm:mt-0">
        © {curDate.getFullYear()} Cra2y Coder. All rights reserved.
      </p>
    </footer>
  )
}
