console.log('Main js loaded')

//varibles

let clicks = 0;

//end

function add(){
 clicks++;
 document.getElementById("clickcount").innerHTML = 'Clicks: ' + clicks;
}

function onClick(){
    document.getElementById(clickcount).style.classname= "shake";
}

const centre = document.getElementById('centreTarget');

centre.addEventListener('click', () => {
  centre.classList.add('clicked');

  setTimeout(() => {
    centre.classList.remove('clicked');
  }, 600); 
});

//add if functions so when count reaches 10 there is a Ui flash 
//add saving scores 
