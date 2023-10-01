import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import i18n from '../pages/ i18n'

const Navbar = (props) => {
  const { t } = useTranslation()

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  const [banner, setBanner] = useState('')
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  function showBanner() {
    setBanner(true)
  }

  const AddBanner = {
    text:
      'Hajdeni kaloni pushimet te ne nga 1 Qershori – deri me 30 gusht 2023',
    description: 'Hotel Toni',
  }

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <>
      <div
        data-theme={props.darkTheme ? 'dark' : 'light'}
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-4xl"
            ></h1>
          </Link>
          <li></li>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4">
              <Link href="/">Rreth Nesh</Link>
            </li>

            <li className="p-4">
              <Link href="/rooms">Akomodimi</Link>
            </li>

            <li className="p-4">
              <Link href="/contact">Kontakt</Link>
            </li>
            <li className="p-4">
              <button onClick={() => handleLanguageChange('en')}>EN</button>
            
            </li>
            {/* <li className="p-4">
              <button onClick={() => handleLanguageChange('fr')}>FR</button>
            </li> */}
            <li className="p-4">
              <button onClick={() => handleLanguageChange('al')}>AL</button>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }
          >
            <ul>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">Rreth Nesh</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/rooms">Akomodimi</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/work">Restorante</Link>
              </li>
              {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/aktivitete'>Aktivitete</Link>
            </li> */}
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/contact">Kontakt</Link>
              </li>

              <li className="p-4">
                <button onClick={() => handleLanguageChange('en')}>EN</button>
              </li>
              {/* <li className="p-4">
              <button onClick={() => handleLanguageChange('fr')}>FR</button>
              </li> */}
              <li className="p-4">
                <button onClick={() => handleLanguageChange('al')}>AL</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
