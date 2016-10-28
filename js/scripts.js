function hasPunctuation(punctuationString) {
  var unpunctuated = punctuationString.replace(/\W/g,"");
  return unpunctuated.toLowerCase();
}
function gridLayout(stringToGrid){// Make grid size to store cryptogram in
  var rowLen;
  var columnLen;
  var boxSqrt = Math.sqrt(stringToGrid.length);//sqrt string length
  if ((stringToGrid.length % boxSqrt) != 0){//is col len a int, if not make so
    rowLen = (Math.round(boxSqrt));
    columnLen = Math.ceil(boxSqrt);
  }else{
    rowLen = boxSqrt;
    columnLen = boxSqrt;
    }
  var stringArray= [rowLen, columnLen];
  return stringArray;
}//end stringToGrid

var parseString = function(toParse,gridSizeArray){
  console.log(toParse);
  var theOldString = toParse.split("");
  console.log(theOldString);
  var segSize = Math.round(Math.sqrt(toParse.length));
  var theCrypto = [];
  for (var index = 0; index <= gridSizeArray[0]; index++){
    for(var theLooper = 0; theLooper <= gridSizeArray[1]; theLooper++){
      var inserter = toParse.substr(theLooper*segSize, ((theLooper*(segSize*2))));
      theCrypto[index,theLooper]= inserter;
    }
  }
console.log(theCrypto);
}

$(document).ready(function() {
  $("form#encrypt").submit(function(event){
     event.preventDefault();

    var cryptoInput = $("#crypto").val();
    var removePunctuation = hasPunctuation(cryptoInput);
    var makeGrid = gridLayout(removePunctuation);
    var finalEncrypted = parseString(removePunctuation, makeGrid)
    //$("#output").show();
    $("#result").text(finalEncrypted);
    });
});
