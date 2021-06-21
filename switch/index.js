var number = 15;
/*
if (number === 1) {
  console.log("broj je jedan");
} else if (number === 2) {
  console.log("broj je dva");
} else if (number === 3) {
  console.log("broj je tri");
} else if (number === 4) {
  console.log("broj je cetiri");
} else if (number === 5) {
  console.log("broj je pet");
} else {
  console.log("broj je manji od 1 ili veci od 5");
}
*/
switch (number) {
  case 1:
    console.log("broj je jedan");
    break;
  case 2:
    console.log("broj je dva");
    break;
  case 3:
    console.log("broj je tri");
    break;
  case 4:
    console.log("broj je cetiri");
    break;
  case 5:
    console.log("broj je pet");
    break;

  default:
    console.log("broj je manji od 1 ili veci od 5");
    break;
}
