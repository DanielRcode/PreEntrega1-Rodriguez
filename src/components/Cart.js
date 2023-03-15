import cartImage from '../images/cart.png'
function Cart() {
    return (
        <>
            <div className="cart">
                <img className="cart-image" src={cartImage} alt="cart"></img>
                <span className="cart-number">1</span>
            </div>
        </>
    )
}

export default Cart