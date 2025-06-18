import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen bg-white flex justify-center text-black items-center'>
      <form action="" className='w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Login area</h1>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
          <input type="email" id="email" name="email" required
                 className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <div className='mb-6'>
          <label htmlFor="password" className='block text-sm font-medium mb-2'>Password</label>
          <input type="password" id="password" name="password" required
                 className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
        <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200'>Login</button>
      </form>
    </div>
  )
}
