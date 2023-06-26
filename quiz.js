 var questions = ['1 + 4 / 2 = ?' , '2 - 8 / 4 = ?','9 * 6 / 3 = ?' , '8 - 10 / 5 = ?', '18 / 6 + 4 = ?'] 
 var count =0;
function myFunction(){
    var person = prompt("Please Enter Your Name", "Harry Potter")
    if(person != null && person != " "){
        document.getElementById("demo").innerHTML = " Hello " + person + "! We wil start the quiz as soon as you hit on start"
        document.getElementById("star").style.display="block"

    }
}
function afunc(){
    document.getElementById("ques").innerHTML= questions[0]
    count=0
    document.getElementById("demo").innerHTML=""
    document.getElementById("skr").innerHTML=""
    document.getElementById("hela").style.display= "none"
}
function bfunc(i){
   var c = i+1
   document.getElementById("ques").innerHTML = questions[c]
   ans()
}
function Next(){
    document.getElementById("result").innerHTML= ""
    var i =0
    var c = questions.length
    for(i; i<c ;i++){
        if(document.getElementById("ques").innerHTML ===  questions[i]){
           bfunc(i);
           break;
        }
    }
}
function score(){
    document.getElementById("skr").innerHTML="Your score is:" + count + " out of 5"
}
function ans(){
    if(document.getElementById("ques").innerHTML === "1 + 4 / 2 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML ="6"
        document.body.appendChild(opt1) 
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML ="3"
        document.body.appendChild(opt2) 
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is Correct"
            setTimeout(Next,1000)
            count++
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"

        }

        var opt3= document.createElement("button")
        opt3.innerHTML ="5"
        document.body.appendChild(opt3) 
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML ="4"
        document.body.appendChild(opt4) 
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }


         
    }

    else if(document.getElementById("ques").innerHTML === "2 - 8 / 4 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML ="0"
        document.body.appendChild(opt1) 
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is correct"
            setTimeout(Next,1000)
            count++
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML ="1"
        document.body.appendChild(opt2) 
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"

        }

        var opt3= document.createElement("button")
        opt3.innerHTML ="2"
        document.body.appendChild(opt3) 
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML ="3"
        document.body.appendChild(opt4) 
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }


         
    }

    else if(document.getElementById("ques").innerHTML === "9 * 6 / 3 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML ="15"
        document.body.appendChild(opt1) 
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML ="27"
        document.body.appendChild(opt2) 
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"

        }

        var opt3= document.createElement("button")
        opt3.innerHTML ="18"
        document.body.appendChild(opt3) 
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is Correct"
            count++
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML ="20"
        document.body.appendChild(opt4) 
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }


         
    }

    else if(document.getElementById("ques").innerHTML === "8 - 10 / 5 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML ="5"
        document.body.appendChild(opt1) 
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML ="6"
        document.body.appendChild(opt2) 
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is Correct"
            setTimeout(Next,1000)
            count++
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"

        }

        var opt3= document.createElement("button")
        opt3.innerHTML ="7"
        document.body.appendChild(opt3) 
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML ="4"
        document.body.appendChild(opt4) 
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }


         
    }

    else if(document.getElementById("ques").innerHTML === "18 / 6 + 4 = ?"){
        var opt1 = document.createElement("button")
        opt1.innerHTML ="8"
        document.body.appendChild(opt1) 
        opt1.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
            
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML ="9"
        document.body.appendChild(opt2) 
        opt2.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"

        }

        var opt3= document.createElement("button")
        opt3.innerHTML ="10"
        document.body.appendChild(opt3) 
        opt3.onclick = function opta(){
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "Your answer is wrong"
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }

        var opt4 = document.createElement("button")
        opt4.innerHTML ="7"
        document.body.appendChild(opt4) 
        opt4.onclick = function opta(){
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Your answer is right"
            count++
            setTimeout(Next,1000)
            opt1.style.display ="none"
            opt2.style.display ="none"
            opt3.style.display ="none"
            opt4.style.display ="none"
        }
     
    }
    else{
        document.getElementById("ques").innerHTML="Ouiz ends here"
        score()
        
    }
}