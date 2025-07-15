const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const separator = "";

const getLetterWithOffset = (letter: string) => {
	const index = dict.indexOf(letter);

	if (index + 13 >= 26) {
		return dict[index + 13 - 26];
	}
	return dict[index + 13];
};

const transform = (letter: string) => {
	const index = dict.indexOf(letter);
	if (index !== -1) {
		return getLetterWithOffset(letter);
	}

	return letter;
};

export const convert = (str: string) => {
	return str.split(separator).map(transform).join(separator);
};
