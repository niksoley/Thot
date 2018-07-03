var radios = document.getElementsByName('layout');
var subject = document.getElementsByName('subject');

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    subject.value = radios[i].value)
  // only one radio can be logically checked, don't check the rest
  break;
}
}