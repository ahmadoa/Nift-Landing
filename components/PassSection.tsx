export default function PassSection() {
    return (
        <section className=" w-full py-14 px-10 lg:px-36 bg-black grid grid-rows-1 lg:grid-cols-2 gap-10">
            <div className="col-span-1 flex flex-col py-5 gap-6">
                <h1 className="uppercase font-monument text-xl md:text-5xl text-white">creon pass nft</h1>
                <span className="w-full h-[1px] bg-[#13171D]"/>
                <p className="w-fit bg-gradient-to-r from-Blue to-Purple text-transparent bg-clip-text font-bold">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
                <div className="flex flex-col gap-2">
                    <p className="w-fit py-2 px-3 text-white text-sm border border-[#13171D] rounded-lg">Pre-launch investment opportunities for upcoming AI projects</p>
                    <p className="w-fit py-2 px-3 text-white text-sm border border-[#13171D] rounded-lg">Free and early access to Creon built AI projects</p>
                    <p className="w-fit py-2 px-3 text-white text-sm border border-[#13171D] rounded-lg">Higher allocation limits on the Creon AI Launchpad</p>
                    <p className="w-fit py-2 px-3 text-white text-sm border border-[#13171D] rounded-lg">Revenue share distribution from Creon built AI projects</p>
                </div>
                <button className="py-2 px-24 mt-5 w-fit bg-gradient-to-r from-Blue to-Purple text-white font-bold rounded-lg">Buy Creon Pass</button>
            </div>
            <div className="col-span-1 relative hidden md:block">
                <span className="absolute top-0 left-0 right-0 w-full h-24 bg-gradient-to-b from-black to-black/0"/>
                <span className="absolute z-10 w-full h-full inset-0 bg-gradient-to-b from-Purple to-Blue mix-blend-overlay"/>
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/videos/nft-video.mp4" type="video/mp4"/>
                </video>
                <span className="absolute bottom-0 left-0 right-0 w-full h-24 bg-gradient-to-b from-black/0 to-black"/>
            </div>
        </section>
    )
}