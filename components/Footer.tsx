export default function Footer() {
  const curDate = new Date()
  return (
    <footer className="border-t py-2 text-center border-gray-800">
      <p className="text-gray-600 text-sm">
        © {curDate.getFullYear()} Cra2y Coder. All rights reserved.
      </p>
    </footer>
  )
}
