export default function Delivery(){
    return (
        <section className="w-screen flex flex-col gap-5 items-center py-30 bg-amber-100">
            <div className="flex flex-col gap-2 w-full items-center font-sans">
                <h1 className="text-4xl font-bold">Our Delivery</h1>
                <h2 className="text-lg font-light">Statistics of Our company</h2>
            </div>
            <div className="flex flex-row gap-35 mt-5">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600 font-sans">34+</h1>
                    <h1 className="text-md tracking-wide font-sans">Active Customers</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600 font-sans">82.7%</h1>
                    <h1 className="text-md tracking-wide font-sans">Repeat Business</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600 font-sans">242+</h1>
                    <h1 className="text-md tracking-wide font-sans">Completed Projects</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600 font-sans">96.8%</h1>
                    <h1 className="text-md tracking-wide font-sans">Ontime Delivery</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-blue-600 font-sans">28+</h1>
                    <h1 className="text-md tracking-wide font-sans">Accredited Partners</h1>
                </div>
            </div>
        </section>
    )
}