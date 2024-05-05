import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {accordionData} from "@/helpers/accordionData"

export default function MissionSection() {
    return (
        <div className="w-full min-h-screen px-10 lg:px-36 py-5 lg:py-20 bg-black grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-8">
            <div className="row-span-1 lg:col-span-5 flex flex-col gap-5">
                <div>   
                    <p className="font-monument uppercase text-2xl text-white pr-24">
                        Our vision is to support the innovation of AI blockchain projects
                        <span className="pl-1 font-monument uppercase text-2xl bg-gradient-to-r from-Blue to-Purple text-transparent bg-clip-text">
                            while prioritizing communities and democratizing profits
                        </span>
                    </p>
                </div>
                <div className="flex justify-end overflow-hidden">
                    <img alt="mission img" src="/images/mission.png" className="min-w-52 h-72" />
                </div>
            </div>
            <div className="row-span-1 lg:col-span-3 flex flex-col">
            <Accordion type="multiple" collapsible="true">
                {accordionData.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger>
                        <div className="flex items-center text-start gap-5 text-white">
                            <div className="w-10 h-12 pentagon p-3">
                            <div className="absolute inset-0 flex justify-center items-center text-xl">
                                {item.icon}
                            </div>
                        </div>
                        <h1>{item.title}</h1> 
                        </div>
                        
                        </AccordionTrigger>
                    <AccordionContent>
                        <p className="pl-14 text-white">
                            {item.details}
                        </p>
                      
                    </AccordionContent>
                  </AccordionItem>
                ))}
  
</Accordion>
            </div>
        </div>
    )
}