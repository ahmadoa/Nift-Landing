import {comingSoon} from '@/helpers/comingSoon';


export default function ComingSection(){
    return (
        <section className="h-[200vh] lg:h-screen w-full px-10 lg:px-36 lg:py-20 bg-black grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-10 lg:gap-5">
            {comingSoon.map((item) => {
                return (
                    <div key={item.id} className="col-span-1 row-span-1 h-full grid grid-rows-12 gap-5 bg-[#13171D]/60 rounded-lg py-7 relative">
                        <span className='absolute -top-2 right-5 bg-white rounded-full px-2 font-bold text-xs text-black uppercase'>coming soon</span>
                        <h1 className='font-monument text-2xl text-white uppercase px-5 row-span-1'>{item.title}</h1>
                        <h3 className='row-span-2 w-fit px-5 bg-gradient-to-r from-Blue to-Purple text-transparent bg-clip-text font-bold'>{item.subtitle}</h3>
                        <div className='row-span-5 w-[95%] overflow-hidden rounded-r-lg relative'>
                        <span className="absolute z-10 w-full h-full inset-0 bg-gradient-to-b from-Purple to-Blue mix-blend-overlay"/>
                            <img src={item.path} className='w-full h-full object-cover'/>
                        </div>
                        <p className='row-span-1 text-xs text-white px-5'>{item.description}</p>
                    </div>
                )
            })}
        </section>
    )
}