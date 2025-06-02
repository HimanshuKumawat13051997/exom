'use client'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaSearch } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import { Menu } from './Menu'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type username = {
  name: string
}

export const Header = ({ userdata }: { userdata: username }) => {
  const router = useRouter()
  const [openmenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleLogout = async () => {
    const req = await fetch('http://localhost:3000/api/users/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (req.ok) {
      router.refresh()
    }
  }

  return (
    <header className="bg-white flex p-8 text-black font-bold shadow-xl h-15">
      <nav className="flex items-center w-full justify-between ">
        <ul className="flex w-full justify-between items-center">
          <li>
            <div className="flex items-center gap-4">
              <span className="relative cursor-pointer" onClick={toggleMenu}>
                <RxHamburgerMenu />
                {openmenu && <Menu />}
              </span>
              <span className="hidden sm:block">
                <Link href={'/women'}>Women</Link>
              </span>
              <span className="hidden sm:block">
                <Link href={'/men'}>Men</Link>
              </span>
            </div>
          </li>
          <li>
            <h1 className="text-xl">Minna</h1>
          </li>
          <li className="flex items-center gap-4">
            <span>
              <FaSearch />
            </span>
            <span>
              <FiShoppingCart />
            </span>
            {userdata ? (
              <>
                <span className="border-2 rounded-[50%] size-8 flex items-center justify-center">
                  {`${userdata}`.slice(0, 1)}
                </span>
                <span
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center justify-center"
                >
                  Logout
                </span>
              </>
            ) : (
              <Link href={'/login'}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
