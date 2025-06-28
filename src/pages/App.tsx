import logo from '../assets/logo2.webp'
// import brain from '../assets/svg/brain.svg'
// import spin from '../assets/svg/spin.svg'
import CardD from '../components/CardD'

export default function App() {

    const dCards = [
        {img: "/assets/svg/brain.svg", title: "Ruleta"},
        {img: "/assets/svg/spin.svg", title: "Juego de la Memoria"},
        {img: "/assets/svg/brain.svg", title: "Dashboard"},
    ]

    return (
        <>
            <header className="w-full h-fit bg-blue-600 flex items-cente justify-center">
                <img src={logo} className='w-32 h-32' alt="" />
            </header>
            <main className='h-[600px] w-full flex items-center gap-20 justify-center'>
                {dCards.map(card => (
                    <CardD img={card.img} title={card.title} />
                ))}
            </main>
        </>
    )
}