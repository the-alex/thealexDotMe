function genRandHobby() {
    var myHobbies = ["Photographer", "Amateur Designer", "Musician", "Nerd", "Maker", "Tinkerer"];
    var rando = Math.floor(Math.random() * myHobbies.length)
    var datSpan = document.getElementById("hobby");
    datSpan.innerHTML = myHobbies[rando];
}


genRandHobby();