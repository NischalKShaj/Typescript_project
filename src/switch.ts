let days = (weekDay: number): void => {
  switch (weekDay) {
    case 1:
      console.log("sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid Entry!!!!");
  }
};
let weekDay:number = 1;
let result = days(weekDay);


