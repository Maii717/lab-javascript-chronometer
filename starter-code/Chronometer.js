function Cronometer ()
{
this.minutes=0;
this.seconds=0;
}

Cronometer.prototype.startClick = function() {
  this.start1();
  this.changeButtonLeft();
  this.changeButtonRight();
};





var Chronometer;

Cronometer.prototype.start1 = function() {
  var thisCronometer = this;

  Chronometer= setInterval(function(){

   thisCronometer.seconds = thisCronometer.seconds +1;
   if(thisCronometer.seconds >= 60){
     thisCronometer.seconds = 0;
     thisCronometer.minutes += 1;
   }

   if(thisCronometer.minutes < 10) {
     document.getElementById("minDec").innerHTML = 0;
     document.getElementById("minCen").innerHTML = thisCronometer.minutes;
   }
   else
   {
     document.getElementById("minCen").innerHTML = thisCronometer.minutes.toString().split('')[0];
     document.getElementById("minCen").innerHTML = thisCronometer.minutes.toString().split('')[1];
   }

   if(thisCronometer.seconds < 10) {
     document.getElementById("secDec").innerHTML = 0;
     document.getElementById("secCen").innerHTML = thisCronometer.seconds;
   } else {
     document.getElementById("secDec").innerHTML = thisCronometer.seconds.toString().split('')[0];
     document.getElementById("secCen").innerHTML = thisCronometer.seconds.toString().split('')[1];
   }
 },1000);
 };


Cronometer.prototype.stopClick = function() {
  clearInterval(Chronometer);
  this.changeButtonLeft();
  this.changeButtonRight();
};


Cronometer.prototype.changeButtonLeft = function() {
  if(document.getElementById("btnLeft").className == "btn start") {
    document.getElementById("btnLeft").className = "btn stop";
    document.getElementById("btnLeft").innerHTML = "STOP";

  } else {
    document.getElementById("btnLeft").innerHTML = "START";
    document.getElementById("btnLeft").className ="btn start";
  }
};

Cronometer.prototype.changeButtonRight = function() {
  if(document.getElementById("btnRight").className == "btn reset") {
    document.getElementById("btnRight").className = "btn split";
    document.getElementById("btnRight").innerHTML = "SPLIT";
  } else {
    document.getElementById("btnRight").innerHTML = "RESET";
    document.getElementById("btnRight").className ="btn reset";
  }
};

Cronometer.prototype.splitTime = function() {
  var newItem = document.createElement("li");
  newItem.innerHTML =  this.currentTime();
  document.getElementById("split").appendChild(newItem);

};

Cronometer.prototype.currentTime = function() {
  return ((this.minutes < 10) ? '0' + this.minutes : this.minutes) + ":" +
     ((this.seconds < 10) ? '0' + this.seconds : this.seconds);
};

Cronometer.prototype.resetTime = function() {
  minDec.innerHTML = 0;
  minCen.innerHTML = 0;
  secDec.innerHTML = 0;
  secCen.innerHTML = 0;

  while(document.getElementById("split").firstChild) {
    document.getElementById("split").removeChild(  document.getElementById("split").firstChild);
  }

  this.minutes = 0;
  this.seconds = 0;
};




/*var chronometer;

function resettime()
{
  clearInterval(chronometer);
  startTime ();
}


function startTime ()

   {

       contadorSecCen =0;

       contadorSecDec =0;

       contadorMinSec =0;

       contadorMinDec =0;


       ms = document.getElementById("secCen");

       s = document.getElementById("secDec");

       mm = document.getElementById("minCen");

       m = document.getElementById("minDec");



       chronometer = setInterval(
           function (){



               if(contadorSecCen==10)

               {

                   contadorSecCen=0;
                   contadorSecDec++;

                   s.innerHTML = contadorSecDec;



                   if(contadorSecDec==5)

                   {

                       contadorSecDec=-1;

                   }
                     if (contadorSecDec== 0) {

                       contadorMinSec ++ ;

                     mm.innerHTML = contadorMinSec;

                   }

                   if (contadorMinSec == 9) {

                     contadorMinSec= -1;
                 }

                   if ((contadorMinSec==0) && (contadorSecDec == 0))
                   {
                     contadorMinDec ++ ;
                     m.innerHTML = contadorMinDec;
                   }


               }



               ms.innerHTML = contadorSecCen;

               contadorSecCen++;



           },1000);
         }

*/
