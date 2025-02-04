export function withHTTPS(url?: string): string | undefined {
    if (!url) return url;

    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    return url;
}
