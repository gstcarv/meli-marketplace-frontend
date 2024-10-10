type TokenOptions = Record<string, string | number>;

/**
 * Create a token getter to easily manipulates them
 *
 * @param tokens - Tokens
 * @returns structured tokens
 */
export function createTokens<T extends TokenOptions>(tokens: T) {
    return {
        /**
         * Gets a token
         *
         * @param token - Token to get
         * @returns resolved token
         */
        get: <Key extends keyof T>(token: Key): T[Key] => tokens[token]
    };
}
