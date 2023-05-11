import React,{useState} from 'react'
import styles from './Ec.module.css'
export default function Ec(){
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My E-Commerce Store</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className={styles.cart}>
        <h2>Cart</h2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
        {cart.length > 0 && (
          <div className={styles.cartTotal}>
            <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
          </div>
        )}
      </div>
    </div>
  );
}








