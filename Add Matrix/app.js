

let a = [
    [12, 12, 55],
    [14, 1, 67],
    [78, 2, 23]
];
let b = [
    [1, 7, 5],
    [14, 1, 6],
    [8, 3, 13]
];
const result = [];

for (let i = 0; i < matrix1.length; i++) {
    result[i]=[]
    for (let j = 0; j < matrix2.length; j++) {
        const sum = matrix1[i][j] + matrix2[i][j]
        result[i].push(sum)

    }

}
console.log(result)








