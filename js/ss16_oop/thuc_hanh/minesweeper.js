const canvas = document.getElementById('minesweeperCanvas');
const ctx = canvas.getContext('2d');
const sizeWidth = window.innerWidth;
const sizeHeight = window.innerHeight;
const size = Math.min(sizeWidth, sizeHeight) - 400;
canvas.width = size;
canvas.height = size;
let colNumber = 8;
let lolRows = colNumber;
let cols = colNumber;
let cellSize = size / colNumber;
let mineCount = 8;
let gameOver = false;

let timer;
let seconds = 0;

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').textContent =
        `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    //padStart đảm bảo luôn có 2 số , thêm số 0 nếu cần;
}

function stopTimer() {
    clearInterval(timer);
}


const board = [];  //mảng lưu thông tin từng ô(mìn xung quanh)
let revealed = []; //mảng lưu ô đã mở hay chưa
let flags = [];    //mảng lưu ô đã cắm cờ nghi ngờ

// tạo bảng
function initBoard() {
    seconds = 0;
    updateTimerDisplay();
    stopTimer();
    gameOver = false;
    for (let i = 0; i < lolRows; i++) {
        board[i] = [];
        revealed[i] = [];
        flags[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = {mine: false, nearMines: 0};
            revealed[i][j] = false;
            flags[i][j] = false;
        }
    }
    //đặt bom random
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
        const row = Math.floor(Math.random() * lolRows);
        const col = Math.floor(Math.random() * cols);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            minesPlaced++;
            updateNearCells(row, col);
        }
    }
}

function updateNearCells(row, col) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < lolRows && newCol >= 0 && newCol < cols && !(i === 0 && j === 0)) {
                //phạm vi bảng hợp lệ newRow và newCol                          !(ô kiểm tra)
                board[newRow][newCol].nearMines++;
            }
        }
    }
}

//vẽ lên html băng canvas
function drawBoard() {
    for (let i = 0; i < lolRows; i++) {
        for (let j = 0; j < cols; j++) {
            const x = j * cellSize;
            const y = i * cellSize;
            if (revealed[i][j]) {
                ctx.fillStyle = '#e0e0e0'//ô mở rồi
            } else {
                ctx.fillStyle = '#8a8a8a'//ô chưa mở
            }
            ctx.fillRect(x, y, cellSize, cellSize);
            ctx.strokeRect(x, y, cellSize, cellSize);

            if (revealed[i][j]) {
                if (board[i][j].mine) { //ô chứa mìn
                    ctx.fillStyle = 'red';
                    ctx.font = `${cellSize * 0.6}px Arial`;
                    ctx.fillText('💣', x + 15, y + 40);
                } else if (board[i][j].nearMines > 0) { //không chứa mìn, ktra mìn lân cận
                    ctx.fillStyle = getNumberColor(board[i][j].nearMines)
                    ctx.font = `${cellSize * 0.45}px Arial`;
                    ctx.fillText(board[i][j].nearMines, x + 20, y + 35);
                }
            } else if (flags[i][j]) {
                ctx.fillStyle = 'blue'; //cắm cờ
                ctx.font = `${cellSize * 0.6}px Arial`;
                ctx.fillText('🚩', x + 15, y + 35);
            }
        }
    }
}

//màu ô
function getNumberColor(number) {
    const colors = ['#0000FF', '#008000', '#FF0000', '#000080', '#800000', '#008080', '#000000', '#808080'];
    return colors[number - 1] || '#000000';
}

// mở các ô lân cận nếu không có bom xung quanh
function revealCell(row, col) {
    if (row < 0 || row >= lolRows || col < 0 || col >= cols || revealed[row][col] || flags[row][col]) {
        return;
    }

    revealed[row][col] = true; //mở ô này

    if (board[row][col].nearMines === 0 && !board[row][col].mine) {
        //số mìn ô lân cận = 0               ô không có mìn
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                revealCell(row + i, col + j); // mở hết 9 ô
            }
        }
    }
}

function checkWin() {
    let cellsRevealed = 0;
    for (let i = 0; i < lolRows; i++) {
        for (let j = 0; j < cols; j++) {
            if (revealed[i][j]) {
                cellsRevealed++;
            }
        }
    }

    if (cellsRevealed === lolRows * cols - mineCount) { // ô không có bom
        stopTimer();
        alert('You win!');
        gameOver = true;
    }
}

canvas.addEventListener('click', (event) => {
    if (seconds === 0) {
        startTimer();
    }
    //theo code w3school
    const rect = canvas.getBoundingClientRect();
    //getBoundingClientRect() dùng để lấy kích thước và vị trí của phần tử
    const x = Math.floor((event.clientX - rect.left) / cellSize);//lấy toạ độ x click chuột vào canvas trừ đi vị trí X
                                                                 // của canvas
    const y = Math.floor((event.clientY - rect.top) / cellSize);//lấy toạ độ y click chuột vào canvas trừ đi vị trí y
    // của canvas
    if (gameOver) {
        return;
    }
    if (!revealed[y][x] && !flags[y][x]) {//nếu ô chưa mở và chưa cắm cờ
        if (board[y][x].mine) {
            revealCell(y, x);
            stopTimer();
            alert('Game Over!');
            gameOver = true;
        } else {
            revealCell(y, x); //y là hàng,x là cột
            checkWin();
        }
        drawBoard();
    }

});

canvas.addEventListener('contextmenu', (event) => { // chuột phải
    event.preventDefault(); //k hiện như khi bấm chuột phải lên web
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / cellSize);
    const y = Math.floor((event.clientY - rect.top) / cellSize);
    if (gameOver) {
        return;
    }
    if (!revealed[y][x]) {
        flags[y][x] = !flags[y][x]; //cắm cờ hoặc bỏ cờ
        drawBoard();
    }
});
document.getElementById('resetMine').addEventListener('click', () => {

    initBoard();
    drawBoard();
})
document.getElementById('settingMine').addEventListener('click', () => {
    stopTimer();
    colNumber = parseInt(prompt(`nhập số hàng/cột: `, colNumber)) || colNumber;
    lolRows = colNumber;
    cols = colNumber;
    mineCount = parseInt(prompt(`nhập số bom muốn rải: `, mineCount)) || mineCount;

    canvas.width = size;
    canvas.height = size;

    cellSize = size / colNumber;

    initBoard();
    drawBoard();
})
initBoard();
drawBoard();