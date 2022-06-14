export function setTodoStorage(key: string, data: string) {
    localStorage.setItem(key, data);
}

export function getTodoStorage(key: string): string {
    return localStorage.getItem(key) as string;
}
