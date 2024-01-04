import axios from "axios";

const getImage = () => {
	const assets = import.meta.glob("./assets/img/**/*.{png,jpg}", { eager: true });

	return (imagePath) => {
		const path = `./assets/img/${imagePath}`;
		const image = assets[path];
		return image.default;
	};
};

export const loadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => resolve(true);
		script.onerror = () => reject(true);
		document.body.appendChild(script);
	});
};

export const importDynamicImage = getImage();

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api/v1",
	headers: { "Content-Type": "application/json" },
});
