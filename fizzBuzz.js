function Printer(divId) {
  var lineCount = 1; 
  
  this.printLine = function() {
    var m = lineCount + ": ";
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }
    
    var n = document.createElement("pre"),
        t = document.createTextNode(m);
   
    n.appendChild(t);
    document.getElementById(divId).appendChild(n);
   
    lineCount++;    
  }
}
var fizzBuzzPrinter = new Printer('fizzbuzz'),
    fizzBuzzerPrinter = new Printer('fizzbuzzer');

var fzPrint = fizzBuzzPrinter.printLine,
    frPrint = fizzBuzzerPrinter.printLine;



var getNum = prompt("Enter a number < 100")

function fizzbuzz(max) {
	
	for(var i = 1; i <= max; i++) {
	  if(i % 5 == 0 && i % 3 == 0) {
        fzPrint("FIZZBUZZ");
     }else if (i % 3 == 0) {
        fzPrint("Fizz");
     }else if(i % 5 == 0) {
        fzPrint("Buzz" );
     }else {
        fzPrint(i);
    }
  }  
}

fizzbuzz(getNum);


