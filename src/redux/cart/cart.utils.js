export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if(existingCartItem) { // add quantity to existing item
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1, teste: 'new one'}
            : cartItem
        )
    }

    // creates a new item
    return [...cartItems,   { ...cartItemToAdd, quantity: 1, teste: 'existing'}]
}