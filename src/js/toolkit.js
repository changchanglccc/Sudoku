const matrixToolkit = {
    makeRow(value) {
        return new Array(9).fill(value);
    },

    makeMatrix(value = 0) {
        return Array.from({length: 9}, () => this.makeRow(value));
    },

    //Fisher - Yates
    shuffle(array) {
        const endIndex = array.length - 2;
    
        for(let i = 0; i <= endIndex; i++){
            const j = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[j]] = [array[j], array[i]];
        }
    
        return array;
    }
    
}

module.exports = matrixToolkit;