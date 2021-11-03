const transpose = function(matrix) {
  let grid = [];

  for (let i = 0; i < matrix[0].length; i++) {
    grid.push([]);
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      grid[x][y] = matrix[y][x];
    }
  }

  return grid;
};

const checkWordExists = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalReverseJoin = horizontalJoin.map((ls) => ls.split("").reverse().join(""));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of horizontalReverseJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const transposedArr = transpose(letters);

  return checkWordExists(letters, word) || checkWordExists(transposedArr, word);
};

module.exports = wordSearch;