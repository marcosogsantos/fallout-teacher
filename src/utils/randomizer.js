import seedrandom from 'seedrandom';
const randomizer = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const myRandomFunction = new seedrandom('randomSeed' + i);
        const randomArrayIndex = Math.floor(myRandomFunction.quick() * (i + 1));
        [array[i], array[randomArrayIndex]] = [array[randomArrayIndex], array[i]];
    }
}
export default randomizer;