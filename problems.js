// // // function inchToFeet(inch){
// // //     var feet= inch / 12;
// // //     return feet;
// // // }
// // // var result=inchToFeet(156);
// // // console.log(result);


// // // function woodCalculator(cubit){
// // //     var feet=cubit/.75;
// // //     return feet;
// // // }
// // // var table=woodCalculator(3*5);
// // // console.log(table);
// // // var chair=woodCalculator(1*14);
// // // var chair=parseInt(chair);
// // // console.log(chair);
// // // var bad=woodCalculator(5*12);
// // // console.log(bad);
// // // var total=table+chair+bad;
// // // console.log(total);

// // // //tinyFriend
// // // function tinyFriend(numbers){
// // //     var min=numbers[0];
// // //     for(var i=0; i<numbers.length; i++){
// // //         var element=numbers[i];
// // //         if(element>min){
// // //             min=element;

// // //         }
// // //     }return min;
// // // }
// // // var numbers=[23,12,43,54,56];
// // // var result=tinyFriend(numbers);
// // // console.log(result)
// // // //
// // // function brickCalculator(num){
// // //    var brick=0;
// // //    if(num<=10){
// // //        brick=num*15*1000;
// // //    }
// // //    else if(num<=20){
// // //        var firstPart=10*15*1000;
// // //        var remining=num-10;
// // //        var secondPart=remining*12*1000;
// // //        brick=firstPart+secondPart;

// // //    }
// // //    else{
// // //     var firstPart=10*15*1000;
// // //     var secondPart=10*12*1000;
// // //     var remining=num-20;
// // //     var thirdPart=remining*10*1000;
// // //     brick=firstPart+secondPart+thirdPart;}
// // //     return brick;

// // // }
// // // var result=brickCalculator(40);
// // // console.log(result);

// // // ///
// // // function largestNumber(numbers){
// // //     var largest=numbers[0];
// // //     for(var i=0; i<numbers.length; i++){
// // //         var element=numbers[i]
// // //         if(element>largest){
// // //             largest=element;
            
// // //         }
// // //     }return largest;
// // // }
// // // var numbers=[23,354,645,87,343];
// // // var result=largestNumber(numbers);
// // // console.log(result);

// // // //*recursive factorial*/
// // // function recursiveFactorial(num){
    
// // //         if(num==0){
// // //             return 1;
// // //         }
// // //         else{
// // //             return num*recursiveFactorial(num-1);
// // //         }
// // //     }
// // // var result=recursiveFactorial(5);
// // // console.log(result);

// // // //
// // // function animal(depth){
// // //     var animal=0;
// // //     if(depth<=10){
// // //         var animal=depth*50;
// // //     }
// // //     else if(depth<=20){
// // //         var firstAnimal=10*50;
// // //         var remining=depth-10;
// // //         var secondAnimal=remining*100;

// // //     }
// // //     else if(depth<=30){
// // //         var firstAnimal=10*50;
// // //         secondAnimal=10*100;
// // //         var remining=depth-20;
// // //         var thirdAnimal=remining*150;
    
// // //     }
// // //     else{ var firstAnimal=10*50;
// // //         secondAnimal=10*100;
// // //         var thirdAnimal=10*150;
// // //         var animal=firstAnimal+secondAnimal+thirdAnimal;

// // //     }return animal;
// // // }
// // // var result=animal(45);
// // // console.log(result);

// // // //
// // // function brickCalculator(building){
// // //     var brick=0;
// // //     if(building<=10){
// // //         brick=building*15*1000;
// // //     }
// // //     else if(building<=20){
// // //         var firstPart=10*15*1000;
// // //         var remining=building-10;
// // //         var secondPart=remining*12*1000;
// // //         brick=firstPart+secondPart;
// // //     }
// // //     else{
// // //         var firstPart=10*15*1000;
// // //          var secondPart=10*12*1000;
// // //         var remining=building-20;
// // //         var thirdPart=remining*10*1000;
// // //         var brick=firstPart+secondPart+thirdPart;
// // //     }return brick;
// // // }
// // // var result=brickCalculator(3);
// // // console.log(result);

// // // //
// // // function fibonacci(num){
// // //     var fibo=[0,1];
// // //     for(var i=2; i<num.length; i++){
// // //         var fibo[i]=fibo[i-1]+fibo[i-2];

// // //     }

// // // }
// // //modeul 19
// // var numbers=[23,434,56,122,12,65,78];
// // for (let i = 0; i < numbers.length; i++) {
// //     const num = numbers[i];
// //     if (num % 2 ==0) {console.log(num, ':this is even number');
        
// //     }
// //     else { console.log(num*2, ':this is odd number');}
    
// // }
// // var friendsAge=[12,23,45,23,21,22];
// // for (let i = 0; i < friendsAge.length; i++) {
// //     const age = friendsAge[i];
// //     if(age %2 == 0){
// //         console.log(age, ':this is even age');
// //     }
// //     else{ console.log(age, ':this is odd age');}
    
// // }
// // function allNumber(numbers){
// //     for (let i = 0; i < numbers.length; i++) {
// //         const num = numbers[i];
// //         if(num % 2 == 0){
// //            return num;
// //         }
// //         else{
// //             console.log(num*2, ':this is odd Number');
            
// //         }
        
// //     } 
// // }
// // var result=allNumber(10);
// // console.log('this', result);
// // // allNumber('ths', 5);
// // // var numbers=[122,43,23,132,5,65,32];
// // // // allNumber(numbers);
// // // var allAges=[12,43,32,6,43,2,12];
// // // // allNumber(allAges);

// // function evenifyAll(num){
   
// //         if(num % 2 == 0){
// //             return num;
// //         }
// //         else {
// //             return num*2;
// //         }
        
// //     }

// // function evenify(numbers) {
    
// // for (let i = 0; i < numbers.length; i++) {
// //     const num = numbers[i];
// //     evenifyAll(num);
// // }
// // }
// // var result=evenifyAll(11);
// // console.log(result);

// // var numbers=[12,23,43,12,53,66];
// // // evenifyAll(numbers);
// // var allAges=[12,34,656,87,8];
// // evenifyAll(allAges);
// //*final revesion of function*/

// function allNumber(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if(num % 2 == 0){
//             return num;
//         }
//         else{
//             return num*2;
//         }
    
        
//     }
    
// }
// var nums=[123,23,34,23,123,3];
// var result=allNumber(nums);
// console.log(result);

// var ages=[43,432,6,567,8,7];
// var result=allNumber(ages);
// console.log(result);
// // console.log(friends);
// //
// function explainCallBack(name, age, task) {
//     console.log('hello i am', name);
//     console.log('your age', age);
//     task();
    
// }
// function washHand(){
//     console.log('wash your  hand');
// }
// function callMe(){
//     console.log('call me sharif');
// }
// function talkMe(){
//     console.log('this is me .if you know me you can talk with  me');
// }
// explainCallBack('shima khatun', 18, washHand);
// explainCallBack('rahat ullah',15,callMe);
// explainCallBack('shariful islam', 20, talkMe)
//
function addNumbers(num1, num2){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        sum +=number;
        
        
    }
    function logInfo(massage){
        console.log(massage)
    }
    logInfo('this is a massage form we developer');
    function another(next){
        console.log(next);}
    another('this is next one massage from web developers');

    
    
    return sum;
}

var result=addNumbers(3,8,34,23,34,3,5,23,34,56,66);
console.log(result);