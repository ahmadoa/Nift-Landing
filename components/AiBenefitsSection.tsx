import {aiBenifits} from "@/helpers/AiBenefits";

export default function AiBenefitsSection (){
    return (
        <section className="h-[300vh] lg:h-[110vh] w-full bg-black relative">
            <div className="absolute z-0 w-full h-full inset-0">
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/videos/roadmap-video.mp4" type="video/mp4"/>
                </video>
            </div>
            <span className="absolute z-10 w-full h-full inset-0 bg-gradient-to-b from-Purple to-Blue mix-blend-soft-light"/>
            <span className="absolute z-20 w-full h-full inset-0 bg-gradient-to-b from-black to-black/60"/>
            <div className="absolute z-40 w-full min-h-full inset-0 px-10 lg:px-36 pt-10 pb-20 grid grid-rows-3 gap-5 lg:gap-3">
{aiBenifits.map((item) => { 
                return (
                    <div key={item.id} className="grid grid-rows-12 lg:grid-rows-1 lg:grid-cols-3 bg-[#13171D]/60 rounded-lg overflow-hidden">
                        <div className="row-span-7 col-span-1 lg:col-span-2 flex flex-col gap-2 p-5">
                            <h1 className="font-monument text-xl text-white uppercase">{item.title}</h1>
                            <p className="text-white text-xs">{item.description}</p>
                        </div>
                        <div className="row-span-5 lg:row-span-1 overflow-hidden relative">
                        <span className="absolute z-10 w-full h-full inset-0 bg-gradient-to-b from-Purple to-Blue mix-blend-overlay"/>
                            
                
                                <img alt={item.title} src={item.path} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                )
            })}
            </div>
            
        </section>
    )
}