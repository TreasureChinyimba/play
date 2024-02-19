const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const musicBtn = document.getElementById('music');
const removeBtn = document.getElementById('remove');
const player = document.querySelector('h3');

const sectionOne = document.querySelector('.sectionOne');
const sectionTwo = document.querySelector('.sectionTwo');

btnOne.addEventListener('click', function(e){
   sectionTwo.style = 'display: block;';
   sectionOne.style = 'display: none;';
    
});

btnTwo.addEventListener('click', function(e){
    sectionTwo.style = 'display: none;';
    sectionOne.style = 'display: block;';
     
 });

 musicBtn.addEventListener('click', function(e){
    player.style = 'display: block;';
     
 });

 removeBtn.addEventListener('click', function(e){
    player.style = 'display: none;';
     
 });