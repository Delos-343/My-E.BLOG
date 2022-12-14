import Link from 'next/link'
import React, { useContext } from 'react'

const Header = () => {

    const categories = [
        {
            name: 'My Profile',
            slug: 'profile',
        },
        {
            name: 'Latest',
            slug: 'latest',
        },
        {
            name: 'Dashboard',
            slug: 'dashboard',
        }
    ]

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                    <span className='cursor-pointer font-bold text-2xl text-gray-100 mt-4'>
                        Welcome, visitor.
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right md:px-2 mt-2 align-center text-gray-100 ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header