QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot. There are many different versions of quickSort that pick pivot in different ways. 

Always pick the first element as a pivot. (implemented at this code )
Always pick the last element as a pivot
Pick a random element as a pivot.
Pick median as the pivot

the code write with typescript

we crate our function in thw first line.
in the second line we dont know the length of the array so if there is only one single number in the array there is no need to divided array so we returned to the original array.

in line 4-5-6 we choose our pivot number to be the first element of the array and create our left and right array;

for sorting the element in the array we need a loop so we choose the for loop whic is start with second element of the array and end with the last element of the array there is no need to start with first element of array because we choose it to be pivot number. there is no need to compare pivot number with pivot number.

in line 9 if the number inthe index of i is smaller than pivot number we push that number to the left array if its bigger than pivot number we push it to the right array.

after all first iteration we all number may be bigger than pivot or smaller than pivot or maybe some of them bigger some of them smaller than pivot number. so if some of them are bigger and some of them are smaller then pivot number we use if statement for all of this scenarios in line 12 to 20;




consider we have this array [7,9,2,6,8,5,8]
our pivot will be 7  
and left array which is smaller then pivot will be 2,6,5
and right array which is bigger then pivot will be 9,8,8

now we have two array and pivot number. pivot number will be in the middle of this arrays so now our array is leftArr[2,6,5] 7 rightArr [9,8,8]

for now our pivot number is 2 for left array and for right array is 9
After that we have have four arrays whic are [] 2 [6,5] 7 [8, 8] 9 []
and it goes on like this up to sorting all element.





as you can se we dublicate function many times and in the typescript so for solving this poroblem we use export {} method. 