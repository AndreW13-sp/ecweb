import { create } from "zustand";

// Item in the cart must be of this shape i.e. no other fields are required/allowed
const serializeCartItem = (item) => ({
	id: item.id,
	name: item.name,
	image: item.image,
	price: item.price,
	quantity: item.quantity,
	totalPrice: item.totalPrice,
});

const useCartStore = create((set) => ({
	items: [],
	totalPrice: 0,

	addToCart: (newItem) => {
		const serializedItem = serializeCartItem(newItem);

		set((state) => ({
			items: [...state.items, serializedItem],
			totalPrice: state.totalPrice + serializedItem.totalPrice,
		}));
	},

	removeFromCart: (itemId) => {
		set((state) => {
			if (state.items.length > 0) {
				// Find the item from the current state and remove it
				const itemToRemove = state.items.find((item) => item.id === itemId);
				if (!itemToRemove) return state;

				// Filter out the item to remove from the current state and update it
				const updatedCartItems = state.items.filter((item) => item.id !== itemId);
				return {
					items: updatedCartItems,
					totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
				};
			}
		});
	},

	updateQuantity: (itemId, newQuantity) => {
		set((state) => {
			// Find the item from the current state matching the itemId param
			const itemToUpdate = state.items.find((item) => item.id === itemId);
			if (!itemToUpdate) {
				// alert("Cart does not have that item, added it first by clicking Add to Cart button");
				return state;
			}
			if (newQuantity < 1) {
				// alert("Minimum 1 quantity is required");
				return state;
			}

			// Update the item which was found above
			const updatedCartItems = state.items.map((item) =>
				item.id === itemId
					? { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
					: item
			);
			const totalCartValue = state.items.reduce((total, item) => total + item.totalPrice, 0);
			return {
				items: updatedCartItems,
				totalPrice: totalCartValue,
			};
		});
	},

	clearCart: () => {
		// Reset the state to its initial value
		set({ items: [], totalPrice: 0 });
	},
}));

export { useCartStore };
