export const getReferenceCardDifficulty = (text: string) => {
	const [title] = text.split("\n");
	return title;
};
