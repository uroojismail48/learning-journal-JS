const board = document.querySelector(".board");

const blockWidth = 30;
const blockHeight = 30;

const blocks = [];
let direction = "right";

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const snake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 }
];

const food = {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows)
};


for (let i = 0; i < rows * cols; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks.push(block);
}

function clearBoard() {
    blocks.forEach(block => {
        block.classList.remove("fill");
        block.classList.remove("food");
    });
}

function render() {
    clearBoard();


    blocks[food.y * cols + food.x].classList.add("food");

  
    snake.forEach(segment => {
        blocks[segment.y * cols + segment.x].classList.add("fill");
    });
}

render();

const intervalId = setInterval(() => {
    let head;

    if (direction === "right") {
        head = {
            x: snake[0].x + 1,
            y: snake[0].y
        };
    }

    if (direction === "left") {
        head = {
            x: snake[0].x - 1,
            y: snake[0].y
        };
    }

    if (direction === "up") {
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        };
    }

    if (direction === "down") {
        head = {
            x: snake[0].x,
            y: snake[0].y + 1
        };
    }

   
    if (
        head.x < 0 ||
        head.x >= cols ||
        head.y < 0 ||
        head.y >= rows
    ) {
        clearInterval(intervalId);
        alert("Game Over!");
        return;
    }

    
    if (
        snake.some(
            segment =>
                segment.x === head.x &&
                segment.y === head.y
        )
    ) {
        clearInterval(intervalId);
        alert("Game Over!");
        return;
    }

    
    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);

        food.x = Math.floor(Math.random() * cols);
        food.y = Math.floor(Math.random() * rows);

        render();
        return;
    }


    snake.unshift(head);
    snake.pop();

    render();

}, 100);

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
    }

    if (e.key === "ArrowRight" && direction !== "left") {
        direction = "right";
    }

    if (e.key === "ArrowUp" && direction !== "down") {
        direction = "up";
    }

    if (e.key === "ArrowDown" && direction !== "up") {
        direction = "down";
    }

});