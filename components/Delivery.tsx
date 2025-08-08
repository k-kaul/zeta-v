export default function Delivery(){
    
    const data = [{
        title: 'Active Customers',
        data: '34+'
    }, {
        title: 'Repeat Business',
        data: '82.7%'
    }, {
        title: 'Completed Projects',
        data: '242+'
    },{
        title:'Ontime Delivery' ,
        data: '96.8%'
    },{
        title: 'Accredited Partners',
        data: '28+'
    }

]
    
    return (
        <section className="w-screen flex flex-col gap-5 items-center py-30 bg-gray-100">
            <div className="flex flex-col gap-2 w-full items-center font-sans">
                <h1 className="text-4xl font-bold">Our Delivery</h1>
                <h2 className="text-lg font-light">Statistics of Our company</h2>
            </div>
            <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 grid grid-cols-2 gap-10 mt-5">
                {
                    data.map((item,index) => (
                        <div key={index} className="flex flex-col gap-5">
                            <h1 className="text-5xl text-blue-600 font-sans">{item.data}</h1>
                            <h1 className="text-md tracking-wide font-sans">{item.title}</h1>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}