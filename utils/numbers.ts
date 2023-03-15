import moment from "moment-timezone";

export const formatDate = (
	dateString: string | number,
	options?: Intl.DateTimeFormatOptions
): string => {
	if (!dateString) {
		return "";
	}

	var date = new Date(dateString);
	//date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

	if (!options) {
		return date.toLocaleDateString("en-us", {
			weekday: "short",
			month: "short",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			timeZone: "America/Los_Angeles",
		});
	} else {
		return date.toLocaleDateString("en-us", options);
	}
};

export const formatDateTime = (dateString: string | number): string => {
	if (!dateString) {
		return "";
	}
	const date = new Date(dateString);

	return date.toLocaleDateString("en-us", {
		weekday: "short",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	});
};

export const getDateToday = (): string => {
	const date = new Date();

	return date.toISOString().replace(/T.*/, "").split("-").join("-");
};

export const formatTime = (dateString: string | number): string => {
	if (!dateString) {
		return "";
	}
	const date = new Date(dateString);

	return date.toLocaleTimeString(navigator.language, {
		hour: "2-digit",
		minute: "2-digit",
	});
};

export const convertToDollars = (amount: number) => {
	if (!amount) {
		return "";
	}

	const formatter = new Intl.NumberFormat(navigator.language, {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
		// These options are needed to round to whole numbers if that's what you want.
		// minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		// maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

	return formatter.format(amount);
};

export const convertToInternationalCurrencySystem = (amount: number) => {
	if (!amount) {
		return "";
	}

	// Nine Zeroes for Billions
	return Math.abs(Number(amount)) >= 1.0e9
		? (Math.abs(Number(amount)) / 1.0e9).toFixed(1).replace(/\.0+$/, "") + "B"
		: // Six Zeroes for Millions
		Math.abs(Number(amount)) >= 1.0e6
		? (Math.abs(Number(amount)) / 1.0e6).toFixed(2).replace(/\.0+$/, "") + "M"
		: // Three Zeroes for Thousands
		Math.abs(Number(amount)) >= 1.0e3
		? (Math.abs(Number(amount)) / 1.0e3).toFixed(2).replace(/\.0+$/, "") + "K"
		: Math.abs(Number(amount)).toFixed(2);
};

export const convertToIntNum = (amount: number) => {
	if (!amount) {
		return "";
	}

	return Intl.NumberFormat("en", {
		notation: "compact",
		minimumFractionDigits: 2,
	}).format(amount);
};

export const numberWithCommas = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const inRange = (value: number, min: number, max: number) => {
	return value >= min && value <= max;
};

// function inRange(value: number, min: number, max: number) {
// 	return value >= min && value <= max;
// }

export const getWorkDurationFromAndTo = (
	startDate: string,
	endDate: string
) => {
	const start = startDate ? moment(startDate) : null;
	const end = endDate ? moment(endDate) : null;

	return `${start ? start.format("MMM YYYY") : "from"} - ${
		end ? end.format("MMM YYYY") : "Present"
	}`;
};

export const getTimeOfWork = (startDate: string, endDate: string) => {
	const today = moment();
	const start = startDate ? moment(startDate) : null;
	const end = endDate ? moment(endDate) : null;

	if (!start) return null;

	const timeDiff = end ? end.diff(start) : today.diff(start);

	return `${moment.duration(timeDiff).years()} yrs ${moment
		.duration(timeDiff)
		.months()} mo`;
};

export const getTimeString = (value: Date) => {
	const hour = new Date(value).getHours()
	const mins = ('0'+ new Date(value).getMinutes()).slice(-2);
	return `${hour}:${mins}`;
}