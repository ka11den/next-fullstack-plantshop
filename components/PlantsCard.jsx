import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PlantsCard.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { useState } from 'react'

const PlantsCard = ({plants}) => {
  const [price, setPrice] = useState(plants.prices[0])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addProduct({...plants, price, quantity}))
  }

  return (
    <article className={styles.products__card}>
        <div className={styles.cyrcle__products}/>
        <Link href={`/product/${plants._id}`}>
          <Image src={plants.img} alt='' width='150px' height='200px'/>
        </Link>
        <h1 className={styles.products__title}>{plants.title}</h1>
        <span className={styles.products__price}>{plants.prices[0]}Р</span>
        <button className={styles.products__buy} onClick={handleClick}>
          <Image src='/img/cart.png' width='20px' height='20px' objectFit='contain'/>
        </button>
    </article>
  )
}

export default PlantsCard