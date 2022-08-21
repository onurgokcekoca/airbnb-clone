import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router'

function Header({ placeholder }) {

    const [searchInput, setSearchInput] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("")
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests,
            }
        })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    console.log(startDate)

    return (
        <header className='sticky top-0 z-50 grid sm:grid-cols-3 bg-white shadow-md p-5 md:px-10'>

            {/* Left */}
            <div onClick={() => router.push("/")} className='hidden sm:flex relative  items-center h-8 md:h-10  my-auto cursor-pointer'>
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit='contain'
                    objectPosition="left"
                    alt='header'
                />
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-4 sm:py-2 shadow-xl bg-gray-100 sm:shadow-sm text-sm text-gray-600 placeholder-gray-400'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='pl-5 pr-1 bg-transparent outline-none flex-grow' type="text" placeholder={placeholder || 'Start your search'} />
                <SearchIcon className='hidden sm:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
            </div>


            {/* Right */}
            <div className='hidden sm:flex  items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden lg:inline cursor-pointer '>Become a host</p>
                <GlobeAltIcon className='hidden h-6 cursor-pointer md:inline ' />
                <div className='flex items-center space-x-2 p-2 rounded-full border-2'>
                    <MenuIcon className='h-5 md:h-6' />
                    <UserCircleIcon className='h-5 md:h-6' />
                </div>
            </div>



            {/* Booker */}
            {
                searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#F87171"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input
                            value={numberOfGuests}
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            min={1}
                            type="number"
                            className='w-12 pl-2 text-lg outline-none text-red-400'
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            }
        </header>
    )
}

export default Header

