import React from 'react'

function Footer() {
  return (
    <>
      <footer className='w-full bg-gray-900 text-white relative bottom-0 h-auto'>

        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className='text-3xl'>🏪</span>
              <span className="self-center text-2xl font-semibold whitespace-nowrap italic">FlipZone</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shiwang-sanger-470750222/" className="hover:underline me-4 md:me-6" target='_blank'>LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/mr21sanger" className="hover:underline me-4 md:me-6" target='_blank'>Github</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">FlipZone</a>. All Rights Reserved. <br></br>Developed by Shiwang Sanger</span>
        </div>
      </footer>

    </>
  )
}

export default Footer
