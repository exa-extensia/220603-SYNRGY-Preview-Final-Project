const currencyIDR = (n) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(n);
};

export default currencyIDR();
