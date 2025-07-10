import { useState } from "react";
import '../../styles/ruleta.css'
import logo from '../../assets/logo2.webp'
import { type Category, categories, categoryContent} from '../../config/SpinCategories';
import PhraseModal from "./PhaseModal";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header";
export default function Ruleta() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isSpinning, setIsSpinning] = useState(false);
    // const navigate = useNavigate();

    const handleSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            const randomCategoryIndex = Math.floor(Math.random() * categories.length);
            const randomCategory = categories[randomCategoryIndex];
            setSelectedCategory(randomCategory);

            setModalOpen(true);
            setIsSpinning(false);
        }, 4900);
    };

    // const closeModal = () => {
    //     setModalOpen(false)
    // }

    // const handleAction = () => {
    //     const currentContent = selectedCategory ? categoryContent[selectedCategory] : null;
    //     if (currentContent?.action === "redirect") {
    //         navigate(`/qaplay/${currentContent.block}`);
    //     } else if (currentContent?.action === "spin") {
    //         closeModal();
    //     }
    // };

    const currentContent = selectedCategory ? categoryContent[selectedCategory] : null;

    return (
        <>
            <Header />
            <section className="w-full bg-white flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
                <div className="flex items-center w-4/5 justify-between mt-20">
                    <h2 className="font-bold text-4xl">2. Ruleta Aleatoria</h2>
                    <NavLink to="/" className="text-4xl">X</NavLink>
                </div>
                <div className="flex items-center flex-col">
                    <img src="/assets/RULETA.webp" className={isSpinning ? 'spin-animation' : ""} alt="" width={600} />
                    <button onClick={() => handleSpin()} className="mt-7 px-7 py-3 text-white font-bold rounded-full bg-indigo-700 text-4xl">GIRAR</button>
                </div>
            </section>

            <PhraseModal
                isOpen={isModalOpen}
                content={
                    currentContent && (
                        <div
                            className="h-full font-bold flex items-center justify-between pr-28 gap-14"
                        >
                            <div>
                                <img src={logo} className="w-[500px] h-[500px]" alt="" />
                            </div>
                            <div className="flex items-end gap-8 flex-col justify-end">
                                <div className="text-end">
                                    <h1 className="text-7xl mb-4 text-green-600">¡La Ruleta habló!</h1>
                                    <h2 className="text-5xl text-darkblue">Este es el resultado:</h2>
                                </div>
                                <div className="text-end">
                                    <h2 className='text-5xl text-darkblue'>¡Feliciadades!</h2>
                                    <p className='text-2xl mt-3 text-orange-500'>Obtuviste la mejor opción</p>
                                </div>
                                <NavLink to="/"
                                    className="w-fit px-7 py-3 uppercase font-bold text-4xl bg-orange-600 rounded-full active:scale-110 transition"
                                    
                                >
                                    Volver a Inicio
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            />
        </>
    );
}