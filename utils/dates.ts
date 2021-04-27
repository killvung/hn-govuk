export const buildLocaleDate = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleString('en-GB');
}
