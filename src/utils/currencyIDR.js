const currencyIDR = (n = 0) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(n);
};

export default currencyIDR;
