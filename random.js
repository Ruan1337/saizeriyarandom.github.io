let dishTypeIndex = [0, 5, 9, 11, 18, 31, 40, 52, 56, 59, 61, 72, 80, 86];
let dishNumber, dishCopies, dishNumberIndex, resultString, totalExpense, totalPrice = 16, totalCopies = 1;
let whetherDishSelected = [];
// 86 dishes, total 1672

function init() {
    dishNumber = 0;
    dishCopies = 0;
    totalExpense = 0;
    dishNumberIndex = [];
    resultString = "";
}

function randomDish(dishType) {
    init();
    let dishIndex;
    document.querySelector('#title').innerHTML = "";
    if (dishType == 0) {
        dishIndex = Math.floor(Math.random() * 86);
    } else {
        dishIndex = dishTypeIndex[dishType - 1] + Math.floor(Math.random() * (dishTypeIndex[dishType] - dishTypeIndex[dishType - 1]));
    }
    dishNumberIndex[dishNumber] = dishIndex;
    dishNumber = 1;
    display();
}

function setPrice() {
    let price = Number(document.querySelector('#price').value);
    if (isNaN(price) || price < 5 || price > 1500 || price % 1) {
        totalPrice = 16;
        document.querySelector('#price').value = 16;
        return false;
    }
    totalPrice = price;
}

function setCopies() {
    let copies = Number(document.querySelector('#copies').value);
    if (isNaN(copies) || copies < 1 || copies > 80 || copies % 1) {
        totalCopies = 16;
        document.querySelector('#copies').value = 16;
        return false;
    }
    totalCopies = copies;
}

function randomDishOnPrice() {
    let dishIndex;
    init();
    if (totalPrice < 5) {
        resultString = "这么点钱能吃什么啊...";
        document.querySelector('#title').innerHTML = resultString;
    } else if (totalPrice == 6) {
        resultString = "6块钱吃烤饼得了...<br>你点了1份菜<br>1286 原味烤饼 5元<br>总共消费5元";
        document.querySelector('#title').innerHTML = resultString;
    } else {
        if (totalPrice == 5) {
            dishNumberIndex[0] = 9;
            dishNumber = 1;
        } else if (totalPrice == 6) {
        } else if (totalPrice >= 7 && totalPrice <= 11) {
            dishIndex = priceListIndex[totalPrice] + Math.floor(Math.random() * (priceListEndIndex[totalPrice] - priceListIndex[totalPrice] + 1));
            dishNumberIndex[0] = priceToId[dishIndex];
            dishNumber = 1;
        } else {
            let dishSelected = [];
            do {
                remainAmount = totalPrice;
                resultString = "";
                dishNumber = 0;
                for (let i = 0; i < 86; i++) {
                    whetherDishSelected[i] = 0;
                }
                do {
                    if (remainAmount == 5) {
                        if (whetherDishSelected[9] == 0) {
                            dishSelected[dishNumber] = 9;
                            dishNumber ++;
                            remainAmount = 0;
                        } else {
                            break;
                        }
                    } else if (totalPrice == 6) {
                    } else if (remainAmount >= 7 && remainAmount <= 11) {
                        let dishStillRemain = 0;
                        for (let i = priceListIndex[remainAmount]; i < (priceListEndIndex[remainAmount] + 1); i++) {
                            if (whetherDishSelected[priceToId[i]] == 0) {
                                dishStillRemain = 1;
                                break;
                            }
                        }
                        if (dishStillRemain != 0) {
                            let dishStart = priceListIndex[remainAmount], dishLength = priceListEndIndex[remainAmount] - priceListIndex[remainAmount] + 1;
                            do {
                                dishSelected[dishNumber] = priceToId[dishStart + Math.floor(Math.random() * dishLength)];
                            } while (whetherDishSelected[dishSelected[dishNumber]] != 0);
                            remainAmount -= Number(menuString[dishSelected[dishNumber]][2]);
                            dishNumber ++;
                        } else {
                            break;
                        }
                    } else {
                        let dishStillRemain = 0, dishLength, tempRemainAmount = remainAmount;
                        if (tempRemainAmount > 69) {
                            tempRemainAmount = 69;
                        } else {
                            while (isNaN(priceListEndIndex[tempRemainAmount])) {
                                tempRemainAmount --;
                            }
                        }
                        dishLength = priceListEndIndex[tempRemainAmount];
                        for (let i = 0; i < dishLength; i++) {
                            if (whetherDishSelected[priceToId[i]] == 0) {
                                dishStillRemain = 1;
                                break;
                            }
                        }
                        if (dishStillRemain != 0) {
                            do {
                                dishSelected[dishNumber] = priceToId[Math.floor(Math.random() * dishLength)];
                            } while (whetherDishSelected[dishSelected[dishNumber]] != 0);
                            remainAmount -= Number(menuString[dishSelected[dishNumber]][2]);
                            whetherDishSelected[dishSelected[dishNumber]] = 1;
                            dishNumber ++;
                        } else {
                            break;
                        }
                    }
                } while (remainAmount > 6);
            } while (remainAmount != 0);
            for (let j = 0; j < dishNumber; j++) {
                dishNumberIndex[j] = dishSelected[j];
            }
        }
        display();
    }
}

function randomDishDuplicate() {
    let dishIndex;
    init();
    if (totalPrice < 5) {
        resultString = "这么点钱能吃什么啊...";
        document.querySelector('#title').innerHTML = resultString;
    } else if (totalPrice == 6) {
        resultString = "6块钱吃烤饼得了...<br>你点了1份菜<br>1286 原味烤饼 5元<br>总共消费5元";
        document.querySelector('#title').innerHTML = resultString;
    } else {
        if (totalPrice == 5) {
            dishNumberIndex[0] = 9;
            whetherDishSelected[9] ++;
            dishNumber = 1;
            dishCopies = 1;
        } else if (totalPrice == 6) {
        } else if (totalPrice >= 7 && totalPrice <= 9) {
            dishIndex = priceListIndex[totalPrice] + Math.floor(Math.random() * (priceListEndIndex[totalPrice] - priceListIndex[totalPrice] + 1));
            dishNumberIndex[0] = priceToId[dishIndex];
            whetherDishSelected[priceToId[dishIndex]] ++;
            dishNumber = 1;
            dishCopies = 1;
        } else {
            let dishSelected = [];
            do {
                remainAmount = totalPrice;
                resultString = "";
                dishNumber = 0;
                dishCopies = 0;
                for (let i = 0; i < 86; i++) {
                    whetherDishSelected[i] = 0;
                }
                do {
                    if (remainAmount == 5) {
                            dishSelected[dishNumber] = 9;
                            whetherDishSelected[9] ++;
                            dishNumber ++;
                            dishCopies ++;
                            remainAmount = 0;
                    } else if (totalPrice == 6) {
                    } else if (remainAmount >= 7 && remainAmount <= 9) {
                        let dishStart = priceListIndex[remainAmount], dishLength = priceListEndIndex[remainAmount] - priceListIndex[remainAmount] + 1;
                        dishSelected[dishNumber] = priceToId[dishStart + Math.floor(Math.random() * dishLength)];
                        whetherDishSelected[dishSelected[dishNumber]] ++;
                        remainAmount -= Number(menuString[dishSelected[dishNumber]][2]);
                        dishCopies ++;
                        if (whetherDishSelected[dishSelected[dishNumber]] == 1) {
                            dishNumber ++;
                        }
                    } else {
                        let dishLength, tempRemainAmount = remainAmount;
                        while (isNaN(priceListEndIndex[tempRemainAmount])) {
                            tempRemainAmount --; 
                        }
                        dishLength = priceListEndIndex[tempRemainAmount];
                        dishSelected[dishNumber] = priceToId[Math.floor(Math.random() * dishLength)];
                        whetherDishSelected[dishSelected[dishNumber]] ++;
                        remainAmount -= Number(menuString[dishSelected[dishNumber]][2]);
                        dishCopies ++;
                        if (whetherDishSelected[dishSelected[dishNumber]] == 1) {
                            dishNumber ++;
                        }
                    }
                } while (remainAmount > 6);
            } while (remainAmount != 0);
            for (let j = 0; j < dishNumber; j++) {
                dishNumberIndex[j] = dishSelected[j];
            }
        }
        displayDuplicate();
    }
}

function randomDishOnCopies() {
    init();
    for (let i = 0; i < 86; i++) {
        whetherDishSelected[i] = 0;
    }
    do {
        do {
            dishNumberIndex[dishNumber] = priceToId[Math.floor(Math.random() * 86)];
        } while (whetherDishSelected[dishNumberIndex[dishNumber]] != 0);
        whetherDishSelected[dishNumberIndex[dishNumber]] = 1;
        dishNumber ++;
    } while (dishNumber != totalCopies);
    display();
}

function randomCopiesDuplicate() {
    init();
    for (let i = 0; i < 86; i++) {
        whetherDishSelected[i] = 0;
    }
    do {
        dishNumberIndex[dishNumber] = priceToId[Math.floor(Math.random() * 86)];
        whetherDishSelected[dishNumberIndex[dishNumber]] ++;
        dishCopies ++;
        if (whetherDishSelected[dishNumberIndex[dishNumber]] == 1) {
            dishNumber ++;
        }
    } while (dishCopies != totalCopies);
    displayDuplicate();
}

function display() {
    resultString += ("你点了" + dishNumber + "份菜<br>");
    for (let j = 0; j < dishNumber; j++) {
        for (let i = 0; i < 3; i++) {
            resultString += (menuString[dishNumberIndex[j]][i] + " ");
        }
        resultString = resultString.substr(0, (resultString.length - 1));
        resultString += "元<br>";
        totalExpense += Number(menuString[dishNumberIndex[j]][2]);
    }
    resultString += "总共消费" + totalExpense + "元";
    document.querySelector('#title').innerHTML = resultString;
}

function displayDuplicate() {
    resultString += ("你点了" + dishNumber + "种, 共计" + dishCopies + "份菜<br>");
    for (let j = 0; j < dishNumber; j++) {
        for (let i = 0; i < 3; i++) {
            resultString += (menuString[dishNumberIndex[j]][i] + " ");
        }
        resultString = resultString.substr(0, (resultString.length - 1));
        if (whetherDishSelected[dishNumberIndex[j]] > 1) {
            resultString += "元 x" + whetherDishSelected[dishNumberIndex[j]] + "<br>";
        } else {
            resultString += "元<br>";
        }
        totalExpense += Number(menuString[dishNumberIndex[j]][2]) * whetherDishSelected[dishNumberIndex[j]];
    }
    resultString += "总共消费" + totalExpense + "元";
    document.querySelector('#title').innerHTML = resultString;
}

init();