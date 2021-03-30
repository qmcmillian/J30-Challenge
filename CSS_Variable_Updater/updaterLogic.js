// makes node list of all inputs within the conrol class
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // accessed by adding a data attribute to the input html element  || '' is a fallback
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// listens to any change events on the inputs and calls handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));