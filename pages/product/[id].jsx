import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
import { useState } from 'react'

const Product = ({plants}) => {
  const [size, setSize] = useState(0)
  const [price, setPrice] = useState(plants.prices[0])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const changePrice = (number) => {
    setPrice(price + number);
  }

  const handleSize = (sizeIndex) => {
    const difference = plants.prices[sizeIndex] - plants.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }

  const handleClick = () => {
    dispatch(addProduct({...plants, price, quantity}))
  }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.image__container}>
                <Image src={plants.img} width='250px' height='200px' objectFit='contain'/>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.product__header}>
              <h1 className={styles.title}>{plants.title}</h1>
              <span className={styles.product__price}>{price}Р</span>
            </div>
            <h1 className={styles.product__title}>Выберите размер</h1>
            <span className={styles.product__choose} onClick={() => handleSize(0)}>18 см</span>
            <span className={styles.product__choose} onClick={() => handleSize(1)}>20 см</span>
            <span className={styles.product__choose} onClick={() => handleSize(2)}>24 см</span>
            <span className={styles.product__choose} onClick={() => handleSize(3)}>30 см</span>
            <h1 className={styles.product__title}>Описание</h1>            
            <p className={styles.product__description}>{plants.desc}</p>        

            <div className={styles.product__add}>
                <button className={styles.product__btn} onClick={handleClick}>В корзину</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
      props: {
        plants: res.data,
      },
    };
  };
  

export default Product