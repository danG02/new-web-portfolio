const triggerFlip = document.querySelector('.Card')
const box2 = document.querySelector('#box2')


triggerFlip.addEventListener('click', function() {
  triggerFlip.classList.toggle('flipped')
})

box2.addEventListener('click', function() {
  box2.classList.toggle('flipped')
})


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//closes navbar after 5s if user doesnt hover over X
setTimeout(function() { closeNav(); }, 5000);