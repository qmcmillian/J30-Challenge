// const checkBoxes =  document.querySelectorAll('.inbox input[type="checkbox"]');
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = null;

function handleCheck(e) {
  // check if they have shift key held down
  // AND check to see if they are checking the box
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single check box
    checkBoxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check in between')
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

