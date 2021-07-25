function validate()
{
  //get inputs
  name = document.getElementById("txtName").value;
  email = document.getElementById("txtEmail").value;
  phone = document.getElementById("txtPhone").value;

  //create an empty error message
  errors = "";

  //check name - It simply needs to exist
  if (name == "")
    errors += "please supply a name \n";

  //check email
  emailRE = /^.+@.+\..{2,4}$/;
  if (email.match(emailRE))
  {
    //console.log("email match");
    //do nothing
  } else
  {
    //console.log("email not a match");
    errors += "please check email address \n"
  }

  //check phone number
  phoneRE = /^\(\d{3}\) * \d{3}-\d{4}$/;
  if (phone.match(phoneRE))
  {
    //console.log("phone matches");
    //do nothing
  } else
  {
    //console.log("phone problem");
    errors += "please check phone #\n";
  }

  //check for errors
  if (errors == "")
  {
    alert("now processing data");
    //process the form
  } else
  {
    alert(errors);
  }
}