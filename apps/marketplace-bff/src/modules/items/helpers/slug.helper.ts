export function createItemSlug(id: string, name: string): string {
    const removeAccents = (str: string): string => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    const formatted = removeAccents(name)
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .toLowerCase()
        .slice(0, 255);

    return `${id}-${formatted}`;
}

export function getIdBySlug(slug: string): string {
    return slug.split('-')[0]!;
}
