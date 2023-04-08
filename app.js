/* Player Audio */
const audioFiles = [
"LeBron", "MJ", "KAJ", "TD_GOAT", "magic", "cp3", "larry", "bill", "wilt"
].map(name => new Audio(`audio/${name}.mp3`));
const [lebronAudio, jordanAudio, kareemAudio, timAudio, magicAudio, chrisAudio, larryAudio, billAudio, wiltAudio] = audioFiles;

/* Upside Hoops div */
const [banner, banner2] = ["banner", "banner-2"].map(id => document.getElementById(id));

/* Player facts */
const [
lebronArticle, jordanArticle, kareemArticle, timArticle, magicArticle,
chrisArticle, larryArticle, billArticle, wiltArticle
] = [
"lebron-player-facts", "jordan-player-facts", "kareem-player-facts",
"tim-player-facts", "magic-player-facts", "chris-player-facts",
"larry-player-facts", "bill-player-facts", "wilt-player-facts"
].map(id => document.getElementById(id));

/* Player card toggle controls */
const [toggleLebron, toggleJordan, toggleKareem, toggleTim, toggleMagic, toggleChris, toggleLarry, toggleBill, toggleWilt] = [
"lebron", "michael", "kareem", "tim", "magic", "chris", "larry", "bill", "wilt"
].map(id => document.getElementById(id));

const hideAllPlayerFacts = () => {
[lebronArticle, jordanArticle, kareemArticle, timArticle, magicArticle,
chrisArticle, larryArticle, billArticle, wiltArticle].forEach(
article => article.style.display = 'none'
);
[banner, banner2].forEach(b => b.style.display = 'none');
};

toggleLebron.onclick = () => {
if (lebronArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
lebronArticle.style.display = 'block';
lebronAudio.play();
}
};

toggleJordan.onclick = () => {
if (jordanArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
jordanArticle.style.display = 'block';
jordanAudio.play();
}
};

toggleKareem.onclick = () => {
if (kareemArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
kareemArticle.style.display = 'block';
kareemAudio.play();
}
};

toggleTim.onclick = () => {
if (timArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
timArticle.style.display = 'block';
timAudio.play();
}
};

toggleMagic.onclick = () => {
if (magicArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
magicArticle.style.display = 'block';
magicAudio.play();
}
};

toggleChris.onclick = () => {
if (chrisArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
chrisArticle.style.display = 'block';
chrisAudio.play();
}
};

toggleLarry.onclick = () => {
if (larryArticle.style.display !== 'none') {
hideAllPlayerFacts();
} else {
larryArticle.style.display = 'block';
larryAudio.play();
}
};

toggleBill.onclick = () => {
    if (billArticle.style.display  !== 'none'){
        hideAllPlayerFacts();
    } else {
        billArticle.style.display = 'block';
        billAudio.play();
    }
} 

toggleWilt.onclick = () => {
    if (wiltArticle.style.display  !== 'none'){
        hideAllPlayerFacts();
    } else {
        wiltArticle.style.display = 'block';
        wiltAudio.play();
    }
} 