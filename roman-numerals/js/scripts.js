$(function(){
  $("#submit").click(function(){
    var numbers= $("input#number").val();
      //debugger
    var result=convertToRoman(numbers);
    // var vowel = result.split(" ");
    // var vowel =result.includes("a", "e", "i", "o", "u",0)
    //   if (vowel === true) {
    //     // arr.push(words + "way");
    //   }

    // var output=[];
    // output=spec1(vowel);
    // var vowels=output.join("");
    $("#output").text(result);

  });
});
  var convertToRoman=function(numbers){
    if(numbers>3999)
    {
      alert("please enter no. below 3999")
    }
  var decimalValue=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romanValue=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var romanized= "";
  for ( var index = 0; index<=decimalValue.length; index+=1 ) {
    while(decimalValue[index]<=numbers){
      romanized+=romanValue[index];
      numbers-=decimalValue[index];
    }
  }
  return romanized

}
