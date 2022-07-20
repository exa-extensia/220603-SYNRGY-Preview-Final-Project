const thousandSeparator = (x) => {
	if (!x) {
		window.setTimeout(thousandSeparator, 10000);
	} else {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
};

export default thousandSeparator();
