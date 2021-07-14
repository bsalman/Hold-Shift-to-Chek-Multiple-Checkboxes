const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
 // Check if they had the shift key down
 // AND check that they are checking it
let inBetween = false;
if(e.shiftKey===true && this.checked ){
    checkboxes.forEach(element => {
        if(element===this || element === lastChecked){
            inBetween=!inBetween
            console.log("this one checked",element)
        }
        if (inBetween) {
            element.checked=true
    }
    });
}
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));