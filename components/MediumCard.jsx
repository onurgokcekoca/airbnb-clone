import Image from 'next/image'

function MediumCard({ item }) {
    const { img, title } = item;
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative sm:h-80 sm:w-80 h-60 w-60'>
                <Image className='rounded-xl'
                    src={img}
                    layout="fill"
                    alt={title}
                />
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default MediumCard