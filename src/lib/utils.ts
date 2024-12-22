import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getUrl(url: string) {
  const baseUrl = import.meta.env.BASE_URL;
  // 去除 baseUrl 和 url 的多余斜杠
  const normalizedBaseUrl = baseUrl.replace(/\/$/, ''); // 去除 baseUrl 末尾的斜杠
  const normalizedUrl = url.replace(/^\//, ''); // 去除 url 开头的斜杠
  return `${normalizedBaseUrl}/${normalizedUrl}`;
}

export function splitArray<T>(arr: T[], chunkSize: number): T[][] {
    return arr.reduce((result: T[][], item: T, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) {
            result[chunkIndex] = []; // 创建新的子数组
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
}