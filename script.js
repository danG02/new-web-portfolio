const bioBox = document.querySelector('#container')
const triggerFlip = document.querySelector('#about')
const pro = document.querySelector('#projects')

//document.getElementById("about").addEventListener("click", function() {
//    alert("Hello World!")
//}); // This is a test on how eventListerners work on ID in HTML


triggerFlip.addEventListener('click', function() {
    bioBox.classList.toggle('flipped')
})




//this makes the container flip once -_-
/*
triggerFlip.addEventListener("click", function() {
    document.getElementById('container').style.transform = "rotateY(180deg)"
})

const flip = (bioBox) => {
    bioBox.target.style.transform = "rotateY(180deg)"
}
triggerFlip.addEventListener('click', flip, true)

document.getElementById('about').addEventListener('click', function() {
    document.getElementById('container').style.transform = "rotateY(180deg)"
})

*/


//element.addEventListener("click", function(){ alert("Hello World!"); });
//document.getElementById(id).style.property = new style

//$('.card').click(function(){
//    $(this).toggleClass('flipped');
//});
//('about').on('click', function () {
//    ('container').toggleClass('flipped');
//  });

/*
This is how to click and flip every time
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
*/

