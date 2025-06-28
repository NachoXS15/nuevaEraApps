import {NavLink} from 'react-router-dom'

type Props = {
    img: string
    title: string
}

function CardD({img, title}: Props) {
  return (
    <NavLink to="" className='bg-white p-5 gap-5 w-60 shadow-2xl h-fit rounded-xl flex items-center justify-center flex-col transition active:scale-105'>
        <img src={img} className='w-32 h-32' alt="" />
        <span className='font-bold'>{title}</span>
    </NavLink>
  )
}

export default CardD