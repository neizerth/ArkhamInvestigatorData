import { capitalize } from "@/features";

export const getReferenceCardDifficulty = (text: string) => {
	const [title] = text.split("\n");
	return capitalize(title);
};
