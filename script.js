alert("'X' paly first");
let playerXname = prompt("Enter Player X's Name");
let playerOname = prompt("Enter Player O's Name");
console.log(`player X : ${playerXname}`);
console.log(`Player O : ${playerOname}`);

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let Xname = document.querySelector(".Xname");
let Oname = document.querySelector(".Oname");
let count = 0;
let turnX = true;
const winPatterns = [
    [0, 1, 2],
        [0, 3, 6],
            [0, 4, 8],
                [1, 4, 7],
                    [2, 5, 8],
                        [2, 4, 6],
                            [3, 4, 5],
                                [6, 7, 8]
                                ];

                                Xname.innerText = `Player X : ${playerXname}`;
                                Oname.innerText = `Player O : ${playerOname}`;


                                const enableBtn = () => {
                                    for(let box of boxes) {
                                            box.disabled = false;
                                                    box.innerText = "";
                                                        }
                                                        };

                                                        const disableBtn = () => {
                                                            for(let box of boxes) {
                                                                    box.disabled = true;
                                                                        }
                                                                        };

                                                                        const resetGame = () => {
                                                                            turnX = true;
                                                                                count = 0;
                                                                                    enableBtn();
                                                                                    }

                                                                                    resetBtn.addEventListener("click", resetGame);

                                                                                    boxes.forEach((box) => {
                                                                                        box.addEventListener("click", () => {
                                                                                                console.log("clicked");
                                                                                                        if(turnX === true) {
                                                                                                                    box.innerText = "X";
                                                                                                                                turnX = false;
                                                                                                                                        } else {
                                                                                                                                                    box.innerText = "O";
                                                                                                                                                                turnX = true;
                                                                                                                                                                        }
                                                                                                                                                                                box.disabled = true;
                                                                                                                                                                                        count++;
                                                                                                                                                                                                setTimeout(checkWinner, 500);
                                                                                                                                                                                                    });
                                                                                                                                                                                                    });


                                                                                                                                                                                                    const checkWinner = () => {
                                                                                                                                                                                                        for(pattern of winPatterns) {
                                                                                                                                                                                                                let pos1val = boxes[pattern[0]].innerText;
                                                                                                                                                                                                                        let pos2val = boxes[pattern[1]].innerText;
                                                                                                                                                                                                                                let pos3val = boxes[pattern[2]].innerText;

                                                                                                                                                                                                                                        if(pos1val != "" && pos2val != "" && pos3val != "") {
                                                                                                                                                                                                                                                    if(pos1val === pos2val && pos2val === pos3val) {
                                                                                                                                                                                                                                                                    alert(`Congratulations!!\n${pos1val} is Winner`);
                                                                                                                                                                                                                                                                                    disableBtn();
                                                                                                                                                                                                                                                                                                    resetGame();
                                                                                                                                                                                                                                                                                                                    break;
                                                                                                                                                                                                                                                                                                                                } else if (count == 9 && pos1val !== pos2val && pos2val !== pos3val){
                                                                                                                                                                                                                                                                                                                                                alert("Draw!!!");
                                                                                                                                                                                                                                                                                                                                                                disableBtn();
                                                                                                                                                                                                                                                                                                                                                                                resetGame();
                                                                                                                                                                                                                                                                                                                                                                                                break;
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                                        };