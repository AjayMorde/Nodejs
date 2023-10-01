// obj = {

//     'yash': 26,
    
//     'vaibhav': 25,
    
//     'rajesh' : 25,
//     'Ajay':12
    
//     }

//     var c=0;

//     for(let i in obj){
//         let value =obj[i];
//         if(value<18){
//             c++;
//         }
//     }
    
//     if(c==0){
//         console.log(-1)
//     }
//     else{
//         console.log(c)
        
//     }

// var obj = {
//     val: 100
// }

// function fun() {
//     console.log(this.val)
// }

// fun.call(obj);
//------------------------------------------------------------------------------------------------

// var obj = {

//     val: 100
    
//     }
    
//     function fun(){
    
//     console.log(this.val)
    
//     }
    
//   fun.call(obj)

  //----------------------------------------------------------------------------

  var obj = {

    val: 100
    
    }
    
    function fun(a){
    
    console.log(this.val + a)
    
    }
    
    fun.call(obj,3)