import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios';

const Cart = () => {

    const cart = useSelector((state) => state.cart)
    const [open,setOpen] = useState(false);
    const amount = cart.total;
    const currency = "USD";
    const style = {"layout":"vertical"};
    const dispatch = useDispatch();
    const router = useRouter();
    
    const createOrder = async (data) => {
        try {
            const res = axios.post('http://localhost:3000/orders', data)
            res.status === 201 && router.push('/orders/' + res.data._id)
            dispatch(reset())
        } catch (err) {
            console.log(err)
        }
    }
    
    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        const shipping = details.purchase_units[0].shipping;
                        createOrder({customer:shipping.name.full_name, address:shipping.address_line_1,total: cart.total, method: 1,})
                    });
                }}
            />
        </>
    );
}

  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <h1 className={styles.cart__title}>Информация о заказе</h1>
            <div className={styles.cart__row}>
                <table className={styles.cart__table}>
                    <tr className={styles.cart__tr}>
                        <th>Продукт</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Всего</th>
                    </tr>
                    {cart.products.map(product=>(                
                    <tr key={product._id}>
                        <td>
                        <Image src={product.img} width='50px' height='50px' objectFit='contain'/>
                        </td>
                        <td>
                            <span className={styles.cart__description}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.cart__description}>{product.price}Р</span>
                        </td>
                        <td>
                            <span className={styles.cart__description}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.cart__description}>{product.price * product.quantity}Р</span>
                        </td>
                    </tr>
                    ))}
                </table>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.cart__title}>Оплата</h1>
            <div className={styles.cart__pay}>
                <span>Всего: {cart.total}Р</span>
                <span>К оплате: {cart.total}Р</span>
                {open ? (
                    <PayPalScriptProvider
                        options={{
                            "client-id": "test",
                            components: "buttons",
                            currency: "USD",
                            "disable-funding": "credit,card,p24",
                        }}
                        >
                        <ButtonWrapper
                            currency={currency}
                            showSpinner={false}
                        />
			        </PayPalScriptProvider>
                ) : (
                    <button onClick={() => setOpen(true)} className={styles.cart__btn}>Оплатить</button>
                )}                          
            </div> 
        </div>
    </div>
  )
}

export default Cart