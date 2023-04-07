
let slides = document.querySelectorAll('.slide');

slides.forEach( (s, i)=>{
  s.id = i;
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 37 || event.keyCode == 39) {
    event.preventDefault();
    let hash = location.href.split('#').pop();
    let currentID = 0;
    if( !isNaN(hash) ){
      currentID = parseInt(hash); 
    }

    if( event.keyCode == 37 ){
      if( currentID > 0){
        currentID--;
      }      
    }else{
      if( currentID < slides.length-1 ){
        currentID++;
      }      
    }    
    console.log(currentID);
    location.href = "#" + currentID;     
  }
});


const seasons = ["The east wind begins to melt the ice", "Songbirds in mountain villages", "Fish emerge from the broken ice", "Rain and moist soil", "Mist starts to linger", "Plants begin to sprout", "Insects come out from their winter cages", "Peach blossoms appear", "Green caterpillars become white butterflies", "Sparrows begin to set up their nests", "Cherry blossoms appear", "Thunder can be heard in the distance", "Swallows arrive from the south", "Geese fly north", "Rainbows appear after rain", "Reeds begin to sprout", "Frost is over, rice seedlings grow", "Peonies bloom", "Frogs begin singing", "Earthworms surface from the earth", "Bamboo shoots grow", "Silkworms start eating mulberry leaves", "Safflowers in full bloom", "Wheat ripens for autumn harvest", "Praying mantises are born", "Rotten grass becomes fireflies", "Plums turn yellow and ripen", "The summer herb withers", "Irises bloom", "Cow-dipper plant sprouts", "Warm breezes", "Lotus flowers begin to open", "Young hawks learn to fly", "Paulownia flowers bud for the next year", "Damp soil, humid air", "Heavy rains sometimes fall", "Cool breezes", "Evening cicadas sing", "Deep fog descends", "Cotton flowers bloom", "Heat finally subsides", "Rice grows", "Fallen dew on grass glows white", "Wagtails sing", "Swallows return to the south", "Thunder stops ringing", "Insects go underground and fill holes", "Farmers drain water from the fields", "Geese fly south", "Chrysanthemum flowers bloom", "Crickets chirp near doors", "Frost begins", "Gentle and sporadic light rain", "Maple and ivy turn yellow", "Camellias bloom", "Earth begins to freeze", "Daffodils bloom", "Rainbows disappear", "The north wind blows leaves off trees", "Mandarins begin to yellow", "The skies close for winter", "Bears hibernate in their dens", "Salmon swim upstream together", "The summer herb sprouts", "Big deer shed their antlers", "Wheat sprouts under snow", "Parsley flourishes", "Frozen springs start to thaw", "Male pheasants begin crying", "Butterbur sprouts bud", "Ice thickens on the streams", "Chickens start laying eggs"]
//add 72 stars
let starcontainer = document.getElementById('stars');
let stars = '';
let socialcontainer = document.getElementById('social');
let socialimgs = ''
for(let i=1; i<73; i++){
  wght = 100 + (600 - (Math.abs(i-36)/36 * 600));
  stars+= `<div class="star pentameter" style="
  --wght: ${wght}">*</div>`

  socialimgs+= `<div class="socialimg pentameter" style="
  --wght: ${wght}">${seasons[i-1]}</div>`
}
starcontainer.innerHTML = stars;
socialcontainer.innerHTML = socialimgs;