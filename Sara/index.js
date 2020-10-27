// Write down pseudo-code on pen and paper for the following patterns:
/*
#### 1.
| Input  | Output |
| :----: | :----: |
|  2, 5  |   5    |
| 0, 100 |  100   |
| 52, 35 |   52   |
*/
let x = 2 ;
let y = 5;

if(x > y){
    console.log(x) ;
}else{
    console.log(y) ;
} // ==> 5

/*
| Input  | Output |
| :----: | :----: |
|  5, 5  |  true  |
| 40, 40 |  true  |
| 50, 51 | false  |
*/
let luckyNumber = 5 ;
let prizeNumber = 5 ;

if(luckyNumber === prizeNumber) {
    console.log('true')
}else{
    console.log('false')
} // true 

/*
|  Input   | Output |
| :------: | :----: |
| 110, 100 |  true  |
| 150, 100 |  true  |
| 50, 100  | false  |
*/

let pocketMoney = 110 ;
let ticket = 100 ;

if(pocketMoney > ticket) {
    console.log('true') ;
}else{
    console.log('false') ;
} // true 
 