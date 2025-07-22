import logo from '../assets/logo2.webp'
// import brain from '../assets/svg/brain.svg'
// import spin from '../assets/svg/spin.svg'
import CardD from '../components/CardD'

export default function App() {

    const dCards = [
        {link: "/ruleta", img: "/assets/svg/spin.svg", title: "Ruleta"},
        {link: "/memory-game", img: "/assets/svg/brain.svg", title: "Juego de la Memoria"},
        {link: "/map", img: "/assets/svg/map.svg", title: "Mapa Interactivo"},
        {link: "/dashboard", img: "/assets/svg/chart.svg", title: "Dashboard"}
    ]

    return (
        <>
            <header className="w-full h-fit bg-blue-600 flex items-cente justify-center">
                <img src={logo} className='w-32 h-32' alt="" />
            </header>
            <main className='h-[800px] w-full flex items-center gap-20 justify-center'>
                {dCards.map(card => (
                    <CardD link={card.link} img={card.img} title={card.title} />
                ))}
            </main>
        </>
    )
}