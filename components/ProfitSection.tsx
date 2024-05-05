export default function ProfitSection(){
    return (
        <section className="min-h-screen w-full py-16 px-10 lg:px-36 grid grid-rows-6 gap-5 md:gap-0 md:grid-rows-3 bg-black">
            <div className="row-span-1 flex flex-col gap-2 md:gap-3 uppercase">
                <h1 className="font-monument text-white text-2xl lg:text-5xl">Profiting through</h1>
                <h2 className="w-fit font-monument self-end text-xl lg:text-2xl bg-gradient-to-r from-Blue to-Purple text-transparent bg-clip-text font-bold">AI Innovation & Decentralization</h2>
            </div>
            <div className="row-span-5 lg:row-span-2 grid grid-cols-2 lg:grid-cols-6 gap-5">
                <div className="col-span-4 overflow-hidden rounded-md relative">
                <span className="absolute z-10 w-full h-full inset-0 bg-gradient-to-b from-Purple to-Blue mix-blend-soft-light"/>
                    <video autoPlay muted loop className="w-full h-full object-cover">
                        <source src="/videos/creon-logo.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="col-span-2 h-full flex flex-row items-center gap-5">
                    <span className="w-[1px] h-full bg-[#13171D]"/>
                    <div className="flex flex-col text-white gap-5">
                        <h3 className="font-bold">The dynamic community driven business model of the future.</h3>
                        <p className="text-sm">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}