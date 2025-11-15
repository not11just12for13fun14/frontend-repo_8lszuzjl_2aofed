export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Threadly. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
