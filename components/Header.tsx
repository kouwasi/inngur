import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Header = () => (
  <header>
    <nav className="flex items-center justify-between bg-blue-400 py-4 px-4 lg:px-16 rounded-b-lg">
      <div className="flex-1">
        <Link href="/">
          <a className="text-gray-100 font-bold">Imgurのパクリアプリ</a>
        </Link>
      </div>
      <div className="flex-1 flex flex-row-reverse">
        <Button>New post</Button>
      </div>
    </nav>
  </header>
)

export default Header
