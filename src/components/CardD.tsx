import {NavLink} from 'react-router-dom'

type Props = {
    img: string
    title: string
    link: string
}

function CardD({link, img, title}: Props) {
  return (
    <NavLink to={link} className='bg-white p-10 gap-5 w-80 shadow-2xl h-fit rounded-xl flex items-center justify-center flex-col transition active:scale-105'>
        <img src={img} className='w-44 h-44' alt="" />
        <span className='font-bold text-2xl text-center'>{title}</span>
    </NavLink>
  )
}

export default CardD