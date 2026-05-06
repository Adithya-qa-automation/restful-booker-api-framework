// utils/headers.ts

export const JSON_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const getAuthHeaders = (token: string) => {
    return {
        ...JSON_HEADERS,
        'Cookie': `token=${token}`
    };
};