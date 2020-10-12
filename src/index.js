module.exports = function towelSort (matrix) {
    if (!matrix) return [];
   return matrix.reduce((acc, curr, i) => acc.concat(i % 2 === 0 ? curr : curr.reverse()), []);
}
