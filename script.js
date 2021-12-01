function FahrenConvert() {
  let fahr = Number(prompt("Enter your value"))
  let result1=((fahr-32)*.5566 + " °C");
  document.getElementById("fahren").innerHTML = result1;
  }

function CelsConvert() {
  let cels = Number(prompt("Enter Any Value"))
  let result=((cels*1.8)+32 + " °F");
  document.getElementById("celsius").innerHTML = result;
  }


