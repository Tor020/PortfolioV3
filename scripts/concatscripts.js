window.onload =function(){
  
  //creates element
  var newElement = document.createElement('span');
  newElement.textContent='fucking stupid';
  console.log(newElement);

  var replaceElement = document.createElement('span');
  replaceElement.textContent = 'what'
  replaceElement.id = 'what'
  
  
  var foo = document.getElementById('landing-Fade-Container');
  // foo.appendChild(newElement);
  // foo.insertBefore(newElement, foo.firstElementChild);
  // foo.removeChild(newElement);
  foo.insertBefore(newElement, foo.firstElementChild);
  foo.replaceChild(replaceElement, newElement)

var parentcont = document.getElementById('landing-txt-container');

console.log(parentcont.childNodes);
}

 