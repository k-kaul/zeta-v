import Component from "@/components/ui/Timeline-originUI";


export default function Journey(){
    return (
        <section className="w-full bg-amber-100">
            <div className="flex flex-col gap-15 justify-center items-center m-10 p-20">
                <h1 className="text-center text-4xl font-bold tracking-tight">Our Journey</h1>
                <div className="items-center justify-center ">
                    <Component />
                </div>
            </div>
        </section>
    )
}