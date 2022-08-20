import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'

export default function Home({ data, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className=' max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className=' pt-6 '>
          <h2 className=' text-4xl font-semibold pb-5 '>Explore Nearby</h2>

          {/* Server'dan data çek - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.map(item => <Card key={item.img} item={item} />)}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {cardsData?.map(item => <MediumCard key={item.img} item={item} />)}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

        <Footer />
      </main>


    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch("https://links.papareact.com/pyp").then(res => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1").then(res => res.json());


  return {
    props: {
      data, cardsData
    }
  }
}
