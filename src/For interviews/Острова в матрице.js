let grid1 = [
    [`1`, `1`, `1`, `1`, `0`],
    [`1`, `1`, `0`, `1`, `0`],
    [`1`, `1`, `0`, `0`, `0`],
    [`0`, `0`, `0`, `0`, `0`],
];

let grid2 = [
    [`1`, `1`, `0`, `0`, `0`],
    [`1`, `1`, `0`, `0`, `0`],
    [`0`, `0`, `1`, `0`, `0`],
    [`0`, `0`, `0`, `1`, `1`],
];

function numIsIslands(grid) {
    if (grid.length === 0) return 0;
    let count = 0;
    let rowsL = grid.length;
    let colsL = grid[0].length;

    function markNeighbours(grid, R, C) {
        grid[R][C] = `6`;
        if (grid[R][C - 1] === `1`) {
            markNeighbours(grid, R, C - 1);
        }
        if (grid[R][C + 1] === `1`) {
            markNeighbours(grid, R, C + 1);
        }
        if (grid[R - 1] && grid[R - 1][C] === `1`) {
            markNeighbours(grid, R - 1, C);
        }
        if (grid[R + 1] && grid[R + 1][C] === `1`) {
            markNeighbours(grid, R + 1, C);
        }
    }

    for (let R = 0; R < rowsL; R++) {
        for (let C = 0; C < colsL; C++) {
            if (grid[R][C] === `1`) {
                count++;
                markNeighbours(grid, R, C);
            }
        }
    }
    return count;
}
console.log(numIsIslands(grid1));
console.log(numIsIslands(grid2));
