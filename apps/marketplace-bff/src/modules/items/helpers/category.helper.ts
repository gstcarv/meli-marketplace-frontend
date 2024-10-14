/**
 * Get the most frequent category that appears within a category array
 *
 * @param categories - categories to check
 * @returns most frequest id
 */
export function getMostFrequentCategory(categories: string[]) {
    const count = categories.reduce(
        (acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );

    return Object.keys(count).reduce((a, b) => ((count?.[a] || 0) > (count?.[b] || 0) ? a : b));
}
