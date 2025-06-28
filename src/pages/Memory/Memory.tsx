import { useEffect, useState } from "react";
import type CardProps from '../../config/CardProps';
import cards from "../../config/Cards";
import getPhrase from './getPhrase';
import Card from '../../components/CardM';
import { NavLink } from "react-router-dom";

export default function MemoryGame() {
	const [cardsA, setCardsA] = useState<CardProps[]>([]);
	const [firstCard, setFirstCard] = useState<CardProps | null>(null);
	const [SecondCard, setSecondCard] = useState<CardProps | null>(null);
	const [disabledCards, setDisabledCards] = useState<number[]>([]);
	const [unFlippedCards, setUnFlippedCards] = useState<number[]>([]);
	const [score, setScore] = useState(0)
	const [timeLeft, setTimeLeft] = useState(120)
	const [isFinished, setIsFinished] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [phrase, setPhrase] = useState({ title: '', desc: '' })
	const [hasGameEnded, setHasGameEnded] = useState(false);

	

	//baraja las cartas aleatoriamente
	const shuffleCards = (array: CardProps[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp
		}
	}

	//asigna las cartas a voltear en caso de no estarlo
	const flipCards = (cardName: string, index: number) => {
		if (firstCard && firstCard.index === index) {
			return;
		}
		if (!firstCard) {
			setFirstCard({ cardName, index });
		} else if (!SecondCard) {
			setSecondCard({ cardName, index });
		}
	};

	//revisa si las cartas selecciondas coinciden
	const checkCards = () => {
		if (firstCard && SecondCard) {
			const match = firstCard.cardName === SecondCard.cardName;
			if (match) {
				disableCards()
				setScore(score + 1)
			} else {
				unFlipCards();
			}
		}
	};

	//define una frase en base al score
	const phraseCatch = (score: number) => {
		const finalPhrase = getPhrase(score)
		setPhrase(finalPhrase)
	}

	//deshabilita las cartas disponibles para jugar
	const disableCards = () => {
		if (firstCard && SecondCard) {
			setDisabledCards([...disabledCards, firstCard.index!, SecondCard.index!]);
		}
		resetCards();
	};

	const unFlipCards = () => {
		if (firstCard && SecondCard) {
			setUnFlippedCards([firstCard.index!, SecondCard.index!]);
		}
		resetCards();
	};

	//resetea las cartas en caso de no coindicir
	const resetCards = () => {
		setFirstCard(null);
		setSecondCard(null);
	};

	useEffect(() => {
		shuffleCards(cards);
		setCardsA([...cards]);
	}, []);

	//en base a la segunda carta, ejecuta checkCards
	useEffect(() => {
		if (SecondCard) {
			checkCards();
		}
	}, [SecondCard]);
	//contador de tiempo
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(timeLeft - 1)
		}, 1000)

		if (timeLeft == 0 || hasGameEnded) {
			clearTimeout(timer)
		}

	}, [timeLeft, hasGameEnded]);

	//condiciones para terminar el juego y mostrar resultados
	useEffect(() => {
		if ((score === 11 || timeLeft === 0) && !hasGameEnded) {
			setHasGameEnded(true); // Evitar múltiples ejecuciones
			setIsFinished(true);
			setShowResults(true);
			phraseCatch(score);
		}
	}, [score, timeLeft, hasGameEnded]);

	return (
		<>
			<div className="w-full min-h-screen bg-cyan-500 flex items-center justify-center bg-center bg-cover bg-no-repeat">
				<div className='w-10/12 mt-5  bg-opacity-40 rounded-md relative'>
				{/* <NavLink to="/" className="transition active:scale-105 text-white font-bold text-5xl absolute top-10 right-5">X</NavLink> */}
				<NavLink to="/" className="transition active:scale-105 text-white font-bold text-5xl absolute top-10 left-5">{"<-"}</NavLink>
					<div className="w-full h-fit flex flex-col gap-10 justify-between items-center text-white font-bold">
						<h1 className='text-6xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
						<div className='w-3/5 h-3/5 flex flex-wrap items-center justify-center'>
							{cardsA.map((card, index) => (
								<Card
									key={index}
									cardName={card.cardName}
									index={index}
									img={card.img}
									flipCards={() => flipCards(card.cardName, index)}
									disabledCards={disabledCards}
									unFlippedCards={unFlippedCards}
								/>
							))}
						</div>
						<div className='w-full flex justify-around mt-4'>
							<h2 className='text-4xl pb-10 pr-10'>Tiempo restante: <span className={`${timeLeft < 30 ? "text-red-600" : "text-white"}`}>{timeLeft}</span>s</h2>
							<h2 className='text-4xl pb-10 pr-10'>Puntuacion: {score}/11</h2>
						</div>
					</div>
				</div>
			</div>
			{
				isFinished && showResults ? <>
					<div
						className="w-5/6 h-[650px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
					>
						<div className="w-auto my-12 bg-cover bg-center flex flex-col items-start pl-36 pt-14 text-white">
							{/*content*/}
							<h2 className='text-6xl text-green-600 font-bold'>¡Juego terminado!</h2>
							<p className='text-4xl mt-3 font-semibold text-darkblue'>Esperamos que te hayas divertido</p>
							<div className='mt-14'>
								<h2 className='text-5xl text-darkblue font-semibold'>{phrase.title}</h2>
								<h2 className='w-3/5 text-3xl text-orange-400 font-medium'>{phrase.desc}</h2>
							</div>
							<NavLink
								to="/memorygame-rules"
								className='text-3xl font-bold mt-14 bg-purple px-3 py-4 bg-indigo-800 rounded-full active:scale-105 transition'
							>
								Volver a inicio
							</NavLink>
						</div>
					</div>
					<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
				</>
					: null
			}
		</>
	)
}
