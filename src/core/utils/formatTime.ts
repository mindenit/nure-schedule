export function formatTime(time: string): string {
    const res = new Date(Number(time) * 1000).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return res;
}
