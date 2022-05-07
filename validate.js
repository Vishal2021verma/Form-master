function setErr(id, er) {
    var elemet = document.getElementById(id);
    elemet.innerText = er;
  }
  //this function check length of the names field onchange event
    function namevaidate(id,invalidId) {
    var nameInput = document.getElementById(id);
    var nameInputData = nameInput.value;
    if (nameInput.value.length < 3) {
      setErr(invalidId, "!Length of name is too short");
    } else if (nameInputData.length > 60) {
      setErr(invalidId, "!Length of name is too long");
    } else {
      setErr(invalidId,"");
    }
  }
  // this function check the min length length of the numbers field
  function numberField(id, maxlength,invalidId ){
    var numberInput = document.getElementById(id);
    var numberInputData = numberInput.value;
    if(numberInputData.length < maxlength){
      setErr(invalidId, "Incorrect Pincode");
    }
    else{
      setErr(invalidId,'');
    }

  } 
