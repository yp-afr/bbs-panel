export const jwt = {
    decode: (token: string | undefined) => {
        if (!token) return;

        return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    },
};

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}