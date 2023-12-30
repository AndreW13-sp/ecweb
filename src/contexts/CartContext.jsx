/* eslint-disable no-case-declarations */

import { createContext, useContext, useMemo, useReducer } from "react";

const initialCartState = {
	items: [],
	totalPrice: 0,
};

const CartContext = createContext(initialCartState);

export const CART_ACTIONS = {
	ADD: "ADD_TO_CART",
	REMOVE: "REMOVE_FROM_CART",
	CLEAR: "CLEAR_CART",
	INC_ITEM: "INCREASE_ITEM_QUANTITY",
	DEC_ITEM: "DECREASE_ITEM_QUANTITY",
};

const calculateTotal = (cartItems) => {
	return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const updateCartItems = (cartItems, itemToUpdate, quantityChange) => {
	return cartItems.map((item) =>
		item.id === itemToUpdate.id ? { ...item, quantity: item.quantity + quantityChange } : item
	);
};

function cartReducer(state, action) {
	switch (action.type) {
		case CART_ACTIONS.ADD:
			const updatedCartItems = [...state.items, action.payload];
			const updatedTotal = calculateTotal(updatedCartItems);
			return { ...state, items: updatedCartItems, totalPrice: updatedTotal };
		case CART_ACTIONS.REMOVE:
			const filteredCartItems = state.items.filter((item) => item.id !== action.payload);
			const updatedTotalAfterRemove = calculateTotal(filteredCartItems);
			return {
				...state,
				items: filteredCartItems,
				totalPrice: updatedTotalAfterRemove,
			};
		case CART_ACTIONS.CLEAR:
			return {
				...state,
				items: [],
				totalPrice: 0,
			};
		case CART_ACTIONS.INC_ITEM:
			const increaseBy = action.payload.quantity || 1;
			const updatedCartItemsIncrease = updateCartItems(
				state.items,
				action.payload.item,
				increaseBy
			);
			const updatedTotalIncrease = calculateTotal(updatedCartItemsIncrease);
			return {
				...state,
				cartItems: updatedCartItemsIncrease,
				total: updatedTotalIncrease,
			};
		case CART_ACTIONS.DEC_ITEM:
			const updatedCartItemsDecrease = updateCartItems(state.cartItems, action.payload, -1);
			const updatedTotalDecrease = calculateTotal(updatedCartItemsDecrease);
			return {
				...state,
				cartItems: updatedCartItemsDecrease,
				total: updatedTotalDecrease,
			};
		default:
			return state;
	}
}

// eslint-disable-next-line react/prop-types
function CartContextProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);
	const contextValue = useMemo(() => ({ state, updateCart: dispatch }), [state, dispatch]);

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

export default CartContextProvider;
