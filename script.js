 //begining of code
 function calcsalary(){
    var hoursWorked = (document.getElementById('hoursworked').value);
    //if the number of hours is greater than 4, you'd multiply by rate given summed up with extra hours worked for tips.
    if (hoursWorked > 4){
        document.getElementById('total').textContent = (hoursWorked* 1000) + ((hoursWorked - 4) *200);
  } else {
        document.getElementById('total').textContent = (hoursWorked* 1000);
    }

}

var submitButton = document.getElementById('submit');
submitButton.onclick = function() {
 return calcsalary();

}
