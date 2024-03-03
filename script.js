var slider = document.getElementById("edad");
var output = document.getElementById("ed");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

