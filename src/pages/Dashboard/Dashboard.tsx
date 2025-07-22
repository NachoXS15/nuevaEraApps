import DashboardCard from "../../components/DashboardCard";
import GraphCol from "../../components/GraphCol";
import Header from "../../components/Header";

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
]

const info = [
    {title: "Información", value: "30"},
    {title: "Pagos", value: "45"},
    {title: "Impuestos", value: "15"},
]

export default function Dashboard() {
    return (
        <>
            <Header />
            <main className="w-full mt-12 flex items-center justify-center gap-5 px-10">
                <section className="w-3/4 h-[850px] rounded-lg flex flex-col gap-10">
                    <div className="h-1/3 w-full flex items-center gap-5">
                        {info.map(card => (
                            <DashboardCard title={card.title} value={card.value} />
                        ))}
                    </div>
                    <div className="h-2/3 w-full flex flex-col justify-center rounded-lg shadow-2xl gap-5 px-20">
                        <h2 className="text-3xl font-bold mt-5 underline">Porcentaje de Ventas</h2>
                        <div className="h-full w-full self-baseline flex rounded-lg justify-between">
                            {months.map(month => (
                                <GraphCol month={month} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-1/4 h-[850px] rounded-lg shadow-xl">
                    <div className="flex items-center flex-col justify-center">
                        <img src="/assets/svg/spin1.svg" width={250} alt="" />
                        <h2 className="font-semibold text-xl">Información</h2>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <img src="/assets/svg/spin1.svg" width={250} alt="" />
                        <h2 className="font-semibold text-xl">Información</h2>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <img src="/assets/svg/spin1.svg" width={250} alt="" />
                        <h2 className="font-semibold text-xl">Información</h2>
                    </div>
                </section>
            </main>
        </>
    )
}
