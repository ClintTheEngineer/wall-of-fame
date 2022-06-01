           /* Player Audio */

const lebronAudio = new Audio('audio/LeBron.mp3');
const jordanAudio = new Audio('audio/MJ.mp3');
const kareemAudio = new Audio('audio/KAJ.mp3');
const timAudio = new Audio('audio/TD_GOAT.mp3');
const magicAudio = new Audio('audio/magic.mp3');
const chrisAudio = new Audio('audio/cp3.mp3');
const larryAudio = new Audio('audio/larry.mp3');
const billAudio = new Audio('audio/bill.mp3');
const wiltAudio = new Audio('audio/wilt.mp3');

     /* Upside Hoops div */
const banner = document.getElementById('banner');
const banner2 = document.getElementById('banner-2');


      /*  Player facts   */

const lebronArticle = document.getElementById('lebron-player-facts');
const jordanArticle = document.getElementById('jordan-player-facts');
const kareemArticle = document.getElementById('kareem-player-facts');
const timArticle = document.getElementById('tim-player-facts');
const magicArticle = document.getElementById('magic-player-facts');
const chrisArticle = document.getElementById('chris-player-facts');
const larryArticle = document.getElementById('larry-player-facts');
const billArticle = document.getElementById('bill-player-facts');
const wiltArticle = document.getElementById('wilt-player-facts');


/*    Player card toggle controls  */
const toggleLebron = document.getElementById('lebron');
const toggleJordan = document.getElementById('michael');
const toggleKareem = document.getElementById('kareem');
const toggleTim = document.getElementById('tim');
const toggleMagic = document.getElementById('magic');
const toggleChris = document.getElementById('chris');
const toggleLarry = document.getElementById('larry');
const toggleBill = document.getElementById('bill');
const toggleWilt = document.getElementById('wilt');

toggleLebron.onclick = function() {
    if (lebronArticle.style.display !== 'none') {
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        lebronArticle.style.display = 'block';
        jordanArticle.style.display = 'none'
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        lebronAudio.play();
    }
};

toggleJordan.onclick = function() {
    if (jordanArticle.style.display !== 'none') {
        jordanArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        jordanArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        jordanAudio.play();
    }
}

toggleKareem.onclick = function() {
    if (kareemArticle.style.display !== 'none') {
        kareemArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        kareemArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        kareemAudio.play();
    }
}

toggleTim.onclick = function() {
    if (timArticle.style.display !== 'none') {
        timArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        timArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        timAudio.play();
    }
}

toggleMagic.onclick = function() {
    if (magicArticle.style.display !== 'none') {
        magicArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        magicArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        magicAudio.play();
    }
}

toggleChris.onclick = function() {
    if (chrisArticle.style.display !== 'none') {
        chrisArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        chrisArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        chrisAudio.play();
    }
}

toggleLarry.onclick = function() {
    if (larryArticle.style.display !== 'none') {
        larryArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        larryArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        larryAudio.play();
    }
}

toggleBill.onclick = function() {
    if (billArticle.style.display !== 'none') {
        billArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        billArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        billAudio.play();
    }
}

toggleWilt.onclick = function() {
    if (wiltArticle.style.display !== 'none') {
        wiltArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
    } else {
        wiltArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltAudio.play();
    }
}






