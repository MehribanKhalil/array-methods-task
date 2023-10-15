//-------------- TASK 1  Bir ölçülü massivin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapın. ------------------

/* bu taskı 2 üsul ilə yaza bilərik. 
1ci üsul yeni dəyişən təyin etmək (əlverşli üsul)
2ci üsul sort metodu ilə (daha az əlverşli üsul) */


// const nums=[1,4,8,10,34]

// let maxNum = 0
// let minNum = 9
// let sum = 0

// for (let i = 0; i < nums.length; i++) {
   
//     if (nums[i] > maxNum) {
//         maxNum = nums[i]
//     }
    
//     if (nums[i]<minNum){
//         minNum = nums[i]
//     }
//     sum += nums[i] 
// }

// let totalSum =sum-maxNum-minNum

// console.log(` ${maxNum} is max value , ${minNum} is min value and ${totalSum} is totalsum `)



//bu halda
// Time Complexity: O(n)
// Space Complexity: O(1)


// 2CI USUL

// const arr=[1,4,8,10,34]

// const newArr=arr.sort((a,b)=>a-b)
// let min=newArr[0]
// let max=newArr[newArr.length-1]
// let total=0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]!==min && arr[i]!==max) {
//         total += arr[i]
//     }    
// }
// console.log(total)

//sort usulu ucun 
// Time Complexity: O(n log n)
// Space Complexity: O(1)


//-------------- TASK 2  Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan proqram tərtib edin. ------------------

// 1ci üsul
// const repeatedNums = [1,8,90,1,6,4,2,1,3,1,6,1,12,1]

// let countOfRepeated = repeatedNums.filter((num)=> num === 1)
// console.log(countOfRepeated.length)


// 2ci üsul

// let count = 0
// repeatedNums.forEach(num => {
//     if (num === 1) {
//         count++
//     }
// });

// console.log(count)



//-------------- TASK 3  Bir ölçülü massivin birinci elementi ilə maksimum elementi arasındakı elementlərin cəmini tapan proqram tərtib edin. ------------------

// const numbers=[1,3,2,9,2,4,3,2,6]

// let biggestNum = 0
// let numbersSum = 0
// let index = 0

// for (let i = 0; i < numbers.length; i++) {
   
//     if (numbers[i] > biggestNum) {
//         biggestNum = numbers[i]
//         index = i
//     }
// }

/* slice baslangic ve son deyer qebul edir ve 
 arrayin elementlerini kopyalayib yeni array yaradir. baslangic deyerimin indexi 1 olaraq qeyd eledim ve son deyerim ise max elementin indexine beraber elemek ucun max elementin indexini tapdim */

// const numbers2=numbers.slice(1 , index) 

// for (let j = 0; j < numbers2.length; j++) {   
//     numbersSum += numbers2[j]
// }
// console.log(numbersSum)





//-------------- TASK 4  Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin. ------------------

// const nums=[1,4,8,10,21]

// let maxNum=0
// let minNum=9

// for (let i = 0; i < nums.length; i++) {
   
//     if (nums[i] > maxNum) {
//         maxNum = nums[i]
//     }
    
//     if (nums[i]<minNum){
//         minNum = nums[i]
//     }

// }

// let edediOrta=(maxNum+minNum) / 2

// console.log(`${maxNum} və ${minNum} ədədlərinin ədədiortası : ${edediOrta}`)
