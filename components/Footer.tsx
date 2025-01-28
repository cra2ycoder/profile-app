export default function Footer() {
  const curDate = new Date()
  return (
    <footer className="border-t py-2 text-end border-gray-800 flex justify-between flex-row">
      <p className="text-sm text-gray-700">
        Tech Stacks: next.js v15 + react.js v19 + tailwindcss v4 + vercel
      </p>
      <p className="text-gray-600 text-sm">
        © {curDate.getFullYear()} Cra2y Coder. All rights reserved.
      </p>
    </footer>
  )
}
