"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function quickSort(arr) {
    if (arr.length === 1)
        return arr;
    var pivot = arr[0];
    var rightArr = [];
    var leftArr = [];
    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
    }
    if (leftArr.length > 0 && rightArr.length > 0) {
        return __spreadArray(__spreadArray(__spreadArray([], quickSort(leftArr), true), [pivot], false), quickSort(rightArr), true);
    }
    else if (leftArr.length > 0) {
        return __spreadArray(__spreadArray([], quickSort(leftArr), true), [pivot], false);
    }
    else {
        return __spreadArray([pivot], quickSort(rightArr), true);
    }
}
var array = [7, 9, 2, 6, 8, 5, 8];
console.log(quickSort(array));
