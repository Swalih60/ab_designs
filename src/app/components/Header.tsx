import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            AB DESIGNS
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-700 hover:text-gray-900">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

