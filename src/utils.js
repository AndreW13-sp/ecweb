const getImage = () => {
	const assets = import.meta.glob("./assets/img/**/*.{png,jpg}", { eager: true });

	return (imagePath) => {
		const path = `./assets/img/${imagePath}`;
		const image = assets[path];
		return image.default;
	};
};

const importDynamicImage = getImage();

export { importDynamicImage };
