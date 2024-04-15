function numCombo(arr, num){
    const comboLength = arr.length - 1;
    let count = 0;

    function findCombinations(indices, start, depth, currentCombo) {
        if (depth === comboLength) {
            const sum = currentCombo.reduce((acc, idx) => acc + arr[idx], 0);
            if (sum === num) {
                count++;
            }
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentCombo.push(i);
            findCombinations(indices, i + 1, depth + 1, currentCombo);
            currentCombo.pop(); 
        }
    }

    findCombinations(arr, 0, 0, []);

    return count;
}