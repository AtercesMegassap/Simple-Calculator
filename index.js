const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/Calculate', (req, res) => {
  //Receiving inputs through requests.
  const { number1, number2, operator } = req.body

  //Validating if the input numbers have the correct type.
  if(typeof number1 === "number" && typeof number2 === "number") {
    let result;
    
    //Validating the operator type to perform the correct operation, and checking if it is valid.
    if(operator === "/") result = number1/number2;
    else if(operator === "*") result = number1*number2;
    else if(operator === "-") result = number1 - number2;
    else if(operator === "+") result = number1 + number2;
    else return res.send("Please enter a valid operator.");

    return res.send("The result of the operation is: "+result);
  }
  else{
    return res.send("Please enter numbers, not strings.");
  }


});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});