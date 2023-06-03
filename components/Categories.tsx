import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {

  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then((newCategories) =>[
      setCategories(newCategories)
    ])
  }, [])
  

  return (
    <div className='bg-gray-900 shadow-lg rounded-lg pb-12 p-8 mb-8 bg-opacity-25 backdrop-blur-md'>
      <h3 className='text-xl text-gray-200 mb-8 font-semibold border-b border-gray-800 pb-4'>
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-0'} pb-3 mb-3 text-gray-300`}>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories