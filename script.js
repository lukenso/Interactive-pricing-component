const slider = document.getElementById("swap");
const output = document.getElementById("price");
const month = document.getElementById("month");

let button = document.getElementById("button");
let slider_value = 16;

function updateSlider() {
  let value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${value}%, #ECF0FB ${value}%, rgba(236, 240, 251, 1))`;
  output.innerHTML = `$${slider.value},00`;
  slider_value = slider.value;
}

slider.addEventListener('input', updateSlider);

button.addEventListener('change', (event) => {
  if (event.target.checked) {
    month.textContent = "/ year";
    slider.max = "289";
    slider.value = slider_value * 12 * 0.75;
  } else {
    month.textContent = "/ month";
    slider.max = "32";
    slider.value = slider_value / 12 / 0.75;
  }
  output.innerHTML = `$${slider.value},00`;
  updateSlider();
});
