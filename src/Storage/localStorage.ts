export function setLocalStorage(key: string, data: string) {
    localStorage.setItem(key, data);
}

export function getLocalStorage(key: string): string {
    return localStorage.getItem(key) as string;
}
