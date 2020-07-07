function ageInDays() {
 var birthYear = prompt('What Year Were U Born?')
 var ageInDayss = (2020 - birthYear) * 1;
 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('U R ' + ageInDayss + ' years old');
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}