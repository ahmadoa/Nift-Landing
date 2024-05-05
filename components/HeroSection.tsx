export default function HeroSection() {
return (
    <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute w-full z-20 h-full bg-gradient-to-b from-Purple via-Blue to-DarkBlack mix-blend-soft-light"/>
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
            <source src="/videos/main-background-video.mp4" type="video/mp4"/>
        </video>
        <div className="absolute w-full z-30 h-full inset-0 flex flex-col justify-end px-10 md:px-36 pb-20 gap-7">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-monument text-white uppercase leading-tight md:leading-none">The world's first platform for Tokenizing AI blockchain projects</h1>
            <div className="flex flex-col w-fit bg-gradient-to-r from-Blue to-Purple text-transparent bg-clip-text text-sm  md:text-base font-bold">
                <span className="w-full h-[1px] bg-gradient-to-r from-Blue to-Purple"/>
                <p className="py-1">Hold the Creon Pass NFT and earn passive income from AI Tools</p>
                <span className="w-full h-[1px] bg-gradient-to-r from-Blue to-Purple"/>
            </div>
        </div>
    </section>
);
}