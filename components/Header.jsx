import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Header = () => {

  const quantity = useSelector(state=> state.cart.quantity)

  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className='left'>
                <h1 className={styles.logo}>PLANTEX</h1>
            </div>
            <div className={styles.right}>
                <Link href='/'><span className={styles.header__span}>Home</span></Link>
                <span className={styles.header__span}>About</span>
                <span className={styles.header__span}>Products</span>
                <span className={styles.header__span}>FAQs</span>
                <span className={styles.header__span}>Contact Us</span>
                <Link href='/cart'>
                <div className={styles.header__cart}>
                  <div className={styles.header__img}>
                    <span className={styles.header__cart__span}>{quantity}</span>
                    <Image src='/img/cart.png' width='250px' height='200px' objectFit='contain'/>
                  </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header