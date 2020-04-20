function evenify(num){
    var result;
    if(num%2 ==0){
        return num;
    }
    else{
       return num*2; 
    }  
}

var result = evenify(13);
console.log('result',result);

function evenify_all(nums){
    var even_array=[]
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num); 
        even_array.push(result); 
    }
    return even_array;
}

var nums =[5,12,89,45,18,8];
var nums_even = evenify_all(nums);
console.log(nums_even);



