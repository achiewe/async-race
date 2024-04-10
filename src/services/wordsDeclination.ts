const declOfWords = (n: number, arr: Array<string>) => {
    return n === 0 || n === 1 ? `${arr[0]}` : `${arr[1]}`;
};

export default declOfWords;
