let priceToId = [9, 10, 11, 12, 14, 15, 17, 73, 74, 75, 78, 80, 0, 3, 4, 5, 6, 7, 8, 16, 
    22, 81, 1, 2, 13, 18, 21, 23, 28, 34, 35, 37, 41, 42, 51, 38, 46, 
    20, 24, 29, 30, 48, 60, 72, 77, 44, 45, 47, 49, 53, 55, 57, 58, 59, 64, 65, 
    19, 56, 76, 79, 36, 39, 26, 31, 40, 43, 50, 52, 54, 67, 27, 33, 25, 
    61, 82, 83, 85, 32, 68, 70, 62, 63, 66, 69, 71, 84];
let priceList = [5, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 11, 12, 12, 13, 13, 13, 13, 
    14, 14, 14, 14, 14, 14, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 
    20, 20, 20, 20, 21, 21, 22, 22, 22, 22, 22, 22, 22, 23, 26, 26, 31, 36, 36, 36, 36, 39, 39, 39, 
    49, 49, 49, 49, 58, 69];
let priceListIndex = [], priceListEndIndex = [];

priceListIndex[5] = 0;
priceListIndex[7] = 1;
priceListIndex[8] = 7;
priceListIndex[9] = 12;
priceListIndex[10] = 20;
priceListIndex[11] = 22;
priceListIndex[12] = 23;
priceListIndex[13] = 25;
priceListIndex[14] = 29;
priceListIndex[15] = 35;
priceListIndex[16] = 37;
priceListIndex[18] = 45;
priceListIndex[20] = 56;
priceListIndex[21] = 60;
priceListIndex[22] = 62;
priceListIndex[23] = 69;
priceListIndex[26] = 70;
priceListIndex[31] = 72;
priceListIndex[36] = 73;
priceListIndex[39] = 77;
priceListIndex[49] = 80;
priceListIndex[58] = 84;
priceListIndex[69] = 85;

priceListEndIndex[5] = 0;
priceListEndIndex[7] = 6;
priceListEndIndex[8] = 11;
priceListEndIndex[9] = 19;
priceListEndIndex[10] = 21;
priceListEndIndex[11] = 22;
priceListEndIndex[12] = 24;
priceListEndIndex[13] = 28;
priceListEndIndex[14] = 34;
priceListEndIndex[15] = 36;
priceListEndIndex[16] = 44;
priceListEndIndex[18] = 55;
priceListEndIndex[20] = 59;
priceListEndIndex[21] = 61;
priceListEndIndex[22] = 68;
priceListEndIndex[23] = 69;
priceListEndIndex[26] = 71;
priceListEndIndex[31] = 72;
priceListEndIndex[36] = 76;
priceListEndIndex[39] = 79;
priceListEndIndex[49] = 83;
priceListEndIndex[58] = 84;
priceListEndIndex[69] = 85;