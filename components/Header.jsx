import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* Left */}
            <div className='relative flex items-center h-8 md:h-10  my-auto cursor-pointer '>
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit='contain'
                    objectPosition="left"

                />
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm text-sm text-gray-600 placeholder-gray-400'>
                <input className='pl-5 bg-transparent outline-none flex-grow ' type="text" placeholder='Start your search' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500 '>
                <p className='hidden lg:inline cursor-pointer '>Become a host</p>
                <GlobeAltIcon className='hidden h-6 cursor-pointer md:inline ' />
                <div className='flex items-center space-x-2 p-2 rounded-full border-2'>
                    <MenuIcon className='h-5 md:h-6' />
                    <UserCircleIcon className='h-5 md:h-6' />
                </div>
            </div>



        </header>
    )
}

export default Header