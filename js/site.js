//driver function used for display and passing values.
function convertItKm() {

    //get the user-entered value
  let kmValue = parseFloat(document.getElementById("InputValue").value);
    //Validation:
    if (isNaN(kmValue) ) {
    alert("Please enter a number");
    
  } else {
    //call function coverting km value to miles
    let milesValue = convertToKm(kmValue);
    
    //displays results fixed to 2 dec places
    document.getElementById("results").innerHTML = `${kmValue} km = ${milesValue.toFixed(2)} miles`;
  }
  
  //performs equation Km * 0.6214 = miles 
function convertToKm(KmValue) {
  let milesValue = 0;
  milesValue = kmValue * 0.6214;
   return milesValue;

  }
}
function convertItC() {
  
  let celValue = parseFloat(document.getElementById("InputValue2").value);
  if (isNaN(celValue) ) {
    alert("Please enter a number");
    
  } else {
    //call function converting C value to farenheit
    let farValue = convertToC(celValue);
    
    //display results fixed to 2 dec places
    document.getElementById("results2").innerHTML = `${celValue} degrees Celsius = ${farValue.toFixed(2)} degrees Fahenheit.`;
  }

  //performs equation (Cel * 1.8) + 32 = Farenheit 
  function convertToC(celValue) {
  let farValue = 0;
  farValue = (celValue * 1.8) + 32;
   return farValue;
  }
}
 
function convertItGram() {
  let gramValue = parseFloat(document.getElementById("InputValue3").value);
   if (isNaN(gramValue) ) {
           alert("Please enter a number");
     
       } else {
             //call function converting the gram value to ounces
             let ounceValue = convertToGram(gramValue);
       
//        displays results fixed to 2 dec places
       document.getElementById("results3").innerHTML = `${gramValue} grams = ${ounceValue.toFixed(2)} ounces.`;
       
      }
//       //performs equation ounce = gramValue / 28.35; 
     function convertToGram(gramValue) {
       let ounceValue = 0;
       ounceValue = gramValue / 28.35;
        return ounceValue;
     
       }
    }
  


