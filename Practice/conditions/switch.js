// traffic signal light program. 
/* algo key 
1.stop (red)
2.Go (green)
3.Go Slow (yello) */
let trfficSignal="yellow"
 switch(trfficSignal){
    case "red":
    console.log("Stop")
    break;

    case "green":
        console.log("Go")
        break;
    case "yellow":
    console.log("Go Slow");
    break;
 }

let light="";
switch (light) {
  case "one":
    console.log("Fan On");
    break;
  case "two":
    console.log("Washing Machine On");
    break;
  case "three":
    console.log("TV On");
    break;
default:
    console.log("Anythink is Off")
}