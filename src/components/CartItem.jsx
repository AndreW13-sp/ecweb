import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { importDynamicImage } from "../utils";

// eslint-disable-next-line react/prop-types
function CartItem({ id, name, image, price, quantity, updateCartQuantity, removeSelf }) {
	const [itemCount, setItemCount] = useState(quantity);
	const calculateSubtotal = useMemo(() => price * itemCount, [price, itemCount]);

	return (
		<tr>
			<td>
				<Link to="#" onClick={() => removeSelf(id)}>
					<i className="far fa-times-circle"></i>
				</Link>
			</td>
			<td>
				<img src={importDynamicImage(image)} alt="" />
			</td>
			<td>{name}</td>
			<td>₹{price}</td>
			<td>
				<input
					type="number"
					value={itemCount}
					onChange={(event) => {
						const newValue = Math.max(1, parseInt(event.target.value, 10));
						setItemCount(newValue);
						updateCartQuantity(id, newValue);
					}}
				/>
			</td>
			<td>₹{calculateSubtotal}</td>
		</tr>
	);
}

export default CartItem;
