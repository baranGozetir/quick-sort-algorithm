function quickSort(arr: number[]): number[]{
    if(arr.length ===1) return arr;
    
    let pivot: number = arr[0];
    let rightArr: number[] = [];
    let leftArr: number[] = [];

    for(let i = 1; i<arr.length; i++){
        arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i])
    }

    if(leftArr.length>0 && rightArr.length>0){
        return [...quickSort(leftArr), pivot , ...quickSort(rightArr)]

    }else if(leftArr.length>0){
        return [...quickSort(leftArr), pivot]

    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

let array: number[] = [7,9,2,6,8,5,8];

console.log(quickSort(array))


export {}