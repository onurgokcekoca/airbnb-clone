import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';


function Search({ searchResults }) {

    const router = useRouter();

    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formatStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatEndDate = format(new Date(endDate), "dd MMMM yy")

    const range = `${formatStartDate} - ${formatEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} ${numberOfGuests > 1 ? "guests" : "guest"}`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p>300+ Stays {(range)}  for {numberOfGuests} number of guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>
                            Cancellation Flexibility</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>
                            Type of Place</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>
                            Price</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>
                            Rooms and Beds</p>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out'>
                            More Filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults?.map(item => (
                            <InfoCard key={item.img} item={item} />
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}