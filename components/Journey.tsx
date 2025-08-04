import Component from "@/components/ui/Timeline-originUI";


export default function Journey(){
    return (
        <section className="my-40 h-screen/2 w-full bg-amber-200">
            <div className="flex flex-col gap-20 justify-center items-center m-20">
                <h1 className="text-center text-4xl font-bold tracking-tight">Our Journey</h1>
                <div className="items-center justify-center ">
                    <Component />
                </div>
            </div>
            
        </section>
    )
}