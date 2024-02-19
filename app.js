const searchBtn = document.getElementById('searchBtn');
const inputWord = document.getElementById('search');
// const items = document.querySelectorAll('.card');
const back = document.querySelector('.list');
const items = [
    'Treasure',
    'Agatha',
    'Christopher',
    'Ahijah'
]

searchBtn.addEventListener('click', function() {
if (inputWord.value === '') {
    alert('You never searched for anything!!')
} else {
    alert('you searched for '+inputWord.value+'.')
    inputWord.value = '';
}
})



function section() {
    const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const musicBtn = document.getElementById('music');
const removeBtn = document.getElementById('remove');
const player = document.querySelector('.player');


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

}

section();