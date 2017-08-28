window.onload =function(){
 

    const cards = document.querySelectorAll("footer", 'a');
    cards.forEach(cards => cards.addEventListener('click', cardflip))
    
}




function cardflip(){

    var front = this.parentNode.parentNode.parentNode.children[0];
    var back = this.parentNode.parentNode.parentNode.children[1];
    front.classList.toggle('card-hidden');
    back.classList.toggle('card-hidden');
    
}



















