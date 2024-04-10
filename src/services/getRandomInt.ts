const getRandomInt = (min: number, max: number) => {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);

    return Math.floor(Math.random() * maxVal) + minVal;
};

export default getRandomInt;
