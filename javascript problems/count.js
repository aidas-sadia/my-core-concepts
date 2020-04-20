//var speech = "I am a good person. I don't snore at night."
//console.log(speech.length); = 42
//console.log(speech[2]); = a

/**for(var i=0; i<speech.length; i++){

    var char=speech[i];
    console.log(char);
}*/
/**var count =0 ;
for(var i=0; i<speech.length; i++){
     var char=speech[i];
     if(char == " "){
         count++;
     }
}*/
  console.log(count);

  var speech = "I am a  good person. I   don't snore at night."
  var count =0 ;
for(var i=0; i<speech.length; i++){
     var char=speech[i];
     if(char == " " &&  speech[i-1] != " "){
         count++;
     }
}
  console.log(count);























