export class Lab11 {
  testDefaultParameters(para1,para2=100){
    var jsonObject = {
      'first':para1,
      'second':para2
    };
    return jsonObject;
  }

  testTemplateLiterals(firstName, middleName, lastName){
    var string = `${firstName},${middleName},${lastName}`;
    return string;
  }

  testMultilineStrings(){
    var multilineString = `Hi, this is Ellen!
I hope my lab is up to par,
and that you're having a good day.
Bye now!`;
    return multilineString;
  }

  testSortWithArrowFunction(numArray){
    return numArray.sort((a,b) => {return b - a});
  }
}
