const APP = {
  init(){
    APP.addListeners();
  },
  addListeners(){
    // let form = document.sampleForm;
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let cell = document.getElementById("cell"); 
    let digit = document.getElementById("regcode"); 
    fullname.addEventListener("change", APP.testName);
    fullname.addEventListener("invalid", APP.fail);
    email.addEventListener("change", APP.testEmail);
    email.addEventListener("invalid", APP.fail);
    pass.addEventListener("change", APP.checkPasswordRequirements);
    pass.addEventListener("invalid", APP.fail)
    cell.addEventListener("input", APP.formatPhone);
    cell.addEventListener("invalid", APP.fail);
    digit.addEventListener("change", APP.digitCode);
    digit.addEventListener("invalid", APP.fail);
    // form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
  },
  testName(ev) {
    let fullname = ev.target;
    fullname.setCustomValidity("");
    let currently = fullname.checkValidity();
    if (currently) {
        let name = /^(jane|john)$/i
     if (name.test(fullname.value) === false) {
        fullname.setCustomValidity("Must be Jane or John.");
        fullname.reportValidity();
     }
     if (fullname.value.match(/(jane|john)/i)) {
        let spanName = fullname.parentElement.querySelector(".errMessage");
        spanName.textContent = "Full Name is Valid.";
        spanName.style.color = 'green'
        document.getElementById("fullname").style.borderColor = 'green'
     }
    }
  },
  testEmail(ev) {
    let email = ev.target;
    email.setCustomValidity("");
    let currently = email.checkValidity();
    if (currently) {
      let emReg = new RegExp("@gmail.com$", "i");
      if (emReg.test(email.value) === false) {
        email.setCustomValidity("NOT a gmail address.");
        email.reportValidity();
      }
      if (email.value.match(/gmail.com$/)) {
        let spanEmail = email.parentElement.querySelector(".errMessage");
            spanEmail.textContent = "Email is valid.";
            spanEmail.style.color = 'green'
            document.getElementById("email").style.borderColor = 'green'
      }
    }
  },
  checkPasswordRequirements(ev){
    let password = ev.target
    password.setCustomValidity("");
    let currently = password.checkValidity();
    let upperCase = document.getElementById('upper')
    let lowerCase = document.getElementById('lower')
    let digit = document.getElementById('num')
    let specialChar = document.getElementById('invalid')
    let minLength = document.getElementById('len')
    if (currently) {
      const lower = new RegExp('(?=.*[a-z])');
      const upper = new RegExp('(?=.*[A-Z])');
      const number = new RegExp('(?=.*[0-9])');
      const special = new RegExp('(?=.*[!@#\$%\^&\*])');
      const length = new RegExp('(?=.{10,})')
      if(lower.test(password.value) === false){
        password.setCustomValidity("Min one lower character")
        password.reportValidity();
        lowerCase.style.color = 'red'
      }else{
        lowerCase.style.color = 'green'
      }
      if(upper.test(password.value) === false){
       password.setCustomValidity("Min one upper character")
       password.reportValidity();
       upperCase.style.color = 'red'
      }else{
       upperCase.style.color = 'green'
      }
      if(number.test(password.value) === false){
        password.setCustomValidity("Min one number character")
        password.reportValidity();
        digit.style.color = 'red'
      }else{
        digit.style.color = 'green'
      }
      if(special.test(password.value) === false){
        password.setCustomValidity("Min one special character")
        password.reportValidity();
        specialChar.style.color = 'red'
      }else{
        specialChar.style.color = 'green'
      }
      if(length.test(password.value) === false){
        password.setCustomValidity("Min 10 character")
        password.reportValidity();
        minLength.style.color = 'red'
      }else{
        minLength.style.color = 'green'
      }
      if (password.value.match(length)) {
        document.getElementById("pass").style.borderColor = 'green'
      }
    }
  },
  formatPhone(ev){
   let cell = ev.target;
   cell.setCustomValidity("");
   let currently = fullname.checkValidity();
   if (currently) {
    let cellNumber = /99559[0-9]/;
    if (cellNumber.test(cell.value) === false) {
        cell.setCustomValidity("The number must start with 99559")
        cell.reportValidity();
    }
    if (cell.value.length == 12) {
        let spanCell = cell.parentElement.querySelector(".errMessage");
        spanCell.textContent = "Cellphone is valid."
        spanCell.style.color = "green"
        cell.reportValidity();
        document.getElementById("cell").style.borderColor = 'green'
    }
   }
  },
  fail(ev) {
    let field = ev.target;
    switch (field.id) {
      case "fullname":
        let spanName = field.parentElement.querySelector(".errMessage");
        spanName.textContent = "Full name is required";
        spanName.style.color = 'red'
        document.getElementById("fullname").style.borderColor = 'red'
        break;
        case "email":
            let spanEmail = field.parentElement.querySelector(".errMessage");
            spanEmail.textContent = "Email is required";
            spanEmail.style.color = 'red'
            document.getElementById("email").style.borderColor = 'red'
            break;
            case "cell":
            let num = field.parentElement.querySelector(".errMessage");
            num.textContent = "Cellphone is required";
            num.style.color = 'red'
            document.getElementById("cell").style.borderColor = 'red'
            break;
            case "pass":
              document.getElementById("pass").style.borderColor = 'red'
              break;
            }        
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
const eye = document.getElementById('psw')
eye.onclick = function(){
  if (pass.type === 'password') {
    pass.setAttribute('type', 'text')
    eye.classList.add('hide')
  }else{
    pass.setAttribute('type', 'password')
    eye.classList.remove('hide')
  }
}
//რაღაცეები ვერ გავიგე და გავიჭედე და კითხვები მაქ )))