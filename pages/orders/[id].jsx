import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {

    const status = 0;

    const checkStatus = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status == 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <h1 className={styles.order__title}>Информация о заказе</h1>
            <div className={styles.order__row}>
                <table className={styles.order__table}>
                    <tr className={styles.order__tr}>
                        <th>Id</th>
                        <th>Адресс</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Всего</th>
                    </tr>
                    <tr>
                        <td>
                            <span>12131</span>
                        </td>
                        <td>
                            <span>Streen Bogdana Xmelnickogo 12</span>
                        </td>
                        <td>
                            <span>$12.88</span>
                        </td>
                        <td>
                            <span>2</span>
                        </td>
                        <td>
                            <span>$24</span>
                        </td>
                    </tr>
                </table>
            </div>          
            <h1 className={styles.order__title}>Статус заказа</h1>
            <div className={styles.order__row}>
                <div className={checkStatus(0)}>
                    <div className={styles.order__icon}>
                        <Image src="/img/paid.png" width='200px' height='200px' objectFit='contain'/>
                    </div>
                    <span className={styles.order__description}>Оплата</span>
                    <div className={styles.order__checkicon}></div>
                </div>
                <div className={checkStatus(1)}>
                    <div className={styles.order__icon}>
                        <Image src="/img/bake.png" width='200px' height='200px' objectFit='contain'/>
                    </div>
                    <span className={styles.order__description}>Готовим</span>
                    <div className={styles.order__checkicon}></div>
                </div>
                <div className={checkStatus(2)}>
                    <div className={styles.order__icon}>
                        <Image src="/img/bike.png" width='200px' height='200px' objectFit='contain'/>
                    </div>
                    <span className={styles.order__description}>В пути</span>
                    <div className={styles.order__checkicon}></div>
                </div>
                <div className={checkStatus(3)}>
                    <div className={styles.order__icon}>
                        <Image src="/img/delivered.png" width='200px' height='200px' objectFit='contain'/>
                    </div>
                    <span className={styles.order__description}>Доставлено</span>
                    <div className={styles.order__checkicon}></div>
                </div>
            </div>            
        </div>
        <div className={styles.order__banner}>
            <div className={styles.order__img}>
                <Image src="/img/home.png" width='200px' height='200px' objectFit='contain'/>
            </div>
            <h1 className={styles.order__title}>Благодаря вам природа станет чище!</h1>
            <span className={styles.order__description}>Спасибо!</span>                
        </div>
    </div>
  )
}

export default Order