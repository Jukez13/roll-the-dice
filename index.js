function roll() {
    var rand1 = Math.floor(Math.random() * 6) + 1;
    var randimg = "./images/dice" + rand1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randimg);

    var rand2 = Math.floor(Math.random() * 6) + 1;
    var randimg2 = "./images/dice" + rand2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randimg2);

    if (rand1 > rand2) {
        document.getElementsByTagName("h1")[0].innerText = "🚩PLAYER 1 WON";
    }
    else if (rand1 === rand2) {
        document.getElementsByTagName("h1")[0].innerText = "DRAW! ROLL - AGAIN";
    }
    else {
        document.getElementsByTagName("h1")[0].innerText = "PLAYER 2 WON🚩";
    }
}