import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Header = () => (
  <header>
    <nav className="flex items-center justify-between bg-gray-800 py-4 px-4 lg:px-16 rounded-b-lg lg:rounded-none">
      <div className="flex-1">
        <Link href="/">
          <a className="text-gray-100 font-bold">Imgurのパクリアプリ</a>
        </Link>
      </div>
      <div className="flex-1 flex flex-row-reverse">
        <Link href="/posts/new">
          <Button className="bg-green-600">New post</Button>
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
