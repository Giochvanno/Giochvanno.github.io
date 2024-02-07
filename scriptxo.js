const cells = Array.from(document.querySelectorAll('.cell'));

let currentPlayer = 1;

const checkWin = () => {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
    }
    return false;
};

const checkDraw = () => {
    return cells.every(cell => cell.textContent);
};


const handleCellClick = (e) => {
    const cell = e.target;

    if (cell.textContent || checkWin() || checkDraw()) {
        return;
    }
    cell.textContent = currentPlayer === 1 ? 'X' : '0';
    currentPlayer = currentPlayer === 1 ? 2 : 1;
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
