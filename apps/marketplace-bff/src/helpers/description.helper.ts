export function sanitizeDescription(description: string | undefined) {
    if (!description) return null;

    return description.replace(/\n/g, '<br />');
}
