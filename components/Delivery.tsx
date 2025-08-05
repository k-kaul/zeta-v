export default function Delivery(){
    return (
        <section className="w-full flex flex-col gap-5 items-center py-30 bg-amber-100">
            <div className="flex flex-col gap-2 w-full items-center">
                <h1 className="text-4xl font-bold">Our Delivery</h1>
                <h2 className="text-lg font-light">Statistics of Our company</h2>
            </div>
            <div className="flex flex-row gap-35 mt-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600">34+</h1>
                    <h1 className="text-md tracking-wide">Active Customers</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600">82.7%</h1>
                    <h1 className="text-md tracking-wide">Repeat Business</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600">242+</h1>
                    <h1>Completed Projects</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600">96.8%</h1>
                    <h1>Ontime Delivery</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600">28+</h1>
                    <h1>Accredited Partners</h1>
                </div>
            </div>
        </section>
    )
}