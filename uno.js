function matrixElementsSum(matrix) {
    var total = 0;
    for(var j = 0; j < matrix[0].length; j++)
        for(var i = 0; i < matrix.length;i++){
            if( matrix[i][j] == 0)
                break;
            else
                total += matrix[i][j];
        }
   return total;
}
console.log(matrixElementsSum([[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]]));
console.log(matrixElementsSum([[1, 1, 1, 0],[0, 5, 0, 1],[2, 1, 3, 10]]));
