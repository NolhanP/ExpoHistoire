console.log("This code must work fine !");

//Image PreLoader

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "css/img/play.png",
    "css/img/pause.png",
    "css/img/speaker.png",
    "css/img/porajmos1.jpg",
    "css/img/Camp Badges.jpg",
    "css/img/deportation.jpg",
    "css/img/Badges.png",
    "css/img/porajmos2.jpg",

    "css/audio/Part1.mp3",
    "css/audio/Part2.mp3",
    "css/audio/Part3.mp3",
    "css/audio/Part4.mp3"
)


//Audio
var isAudioPlaying = false;
// buttonId, audioId, textId
var lastTrack = [null, null, "text1"];

function play(id) {
    var el = document.getElementById(id);

    if(isAudioPlaying == false){
        if(id != lastTrack[1] || lastTrack[1] == null){
            el.play();
            lastTrack[1] = id;
            document.getElementById(lastTrack[1]).currentTime = 0;
            textBack();

        } else {
            el.play();
            lastTrack[1] = id;
        }
    } else {
    el.pause();
    document.getElementById("imgSpace").style.height = '180px';
    document.getElementById("imgSpace").style.opacity = '0';
    document.getElementById("imgSpace").style.backgroundImage = 'none';

    }
    isAudioPlaying = !isAudioPlaying;
  }

//Button Changer

function playButton(id) {
    var el = document.getElementById(id);
    lastTrack[0] = id;
    if(isAudioPlaying == true){
        el.style.backgroundImage = "url('css/img/pause.png')";
        el.style.backgroundPositionX = "47%";
        switch (id){
            case "aud1":
                hideButton("box2", "box3", "box4", true);
                textChange("text1");
                imageChange("url('css/img/deportation.jpg')", '100% 82%', '50%', '0', '300px');

                break;
            case "aud2":
                hideButton('box1', 'box3', 'box4', true);
                textChange("text2");
                imageChange("url('css/img/porajmos1.jpg')", '100% 82%', '50%', '0', '300px');

                break;
            case "aud3":
                hideButton('box1', 'box2', 'box4', true);
                textChange("text3");
                imageChange("url('css/img/Badges.png')", '80% 100%', '50%', '50%', '400px');
                break;
            case "aud4":
                hideButton('box1', 'box2', 'box3', true);
                textChange("text4");
                imageChange("url('css/img/porajmos2.jpg')", '100% 78%', '50%', '0', '300px');
                break;
        }
    }else{
        el.style.backgroundImage = "url('css/img/play.png')";
        el.style.backgroundPositionX = "53%";
        document.getElementById("box1").style.display = 'flex';
        document.getElementById("box2").style.display = 'flex';
        document.getElementById("box3").style.display = 'flex';
        document.getElementById("box4").style.display = 'flex';
    }
}



document.onkeydown = checkKey;

function checkKey(e) {
    
    e = e || window.event;
    var el = document.getElementsByClassName("audio");

    if (e.keyCode == '38' && el[0].volume != 1) {
        console.log("up");
        for (var i=0; i < el.length; i++) {
            el[i].volume += 0.1;
          }
    }
    else if (e.keyCode == '40' && el[0].volume > 0) {
        console.log("down");
        for (var i=0; i < el.length; i++) {
            el[i].volume -= 0.1;
          }
    }
}




//------- Alerte Code déguelasse !-------/

function imageChange(imagePath, imageSize, imageX, imageY, boxHeight){
    var el = document.getElementById("imgSpace");
    el.style.backgroundImage = imagePath;
    el.style.backgroundSize = imageSize;
    el.style.backgroundPositionX = imageX;
    el.style.backgroundPositionY = imageY;
    el.style.opacity = 	'100';
    el.style.height = boxHeight;

}


function textChange(text){
    var el = document.getElementById(text);
    el.style.backgroundColor = '#3a3a3a';
    el.style.border = '10px solid #3a3a3a';
    el.style.color = '#fff';  
    lastTrack[2] = text;
}

function textBack(){
    var el = document.getElementById(lastTrack[2]);
    el.style.backgroundColor = '#fafafa';
    el.style.border = '10px solid #fafafa';
    el.style.color = '#000';  
}



function hideButton(btn1, btn2, btn3, hide){
    var el1 = document.getElementById(btn1);
    var el2 = document.getElementById(btn2);
    var el3 = document.getElementById(btn3);

    if(hide == true){
        displayEl('none');
    } else {
        displayEl('flex');
    }

    function displayEl(state){
        el1.style.display = state; 
        el2.style.display = state;
        el3.style.display = state;
    }
}


/*
el1.disabled = true;
el1.disabled = true;
el1.disabled = true;
el1.style.animationName = 'rightSlide';
el2.style.animationName = 'rightSlide';
el3.style.animationName = 'rightSlide';
el1.style.animationDuration = '1s';
el2.style.animationDuration = '1s';
el3.style.animationDuration = '1s';
setTimeout(hideEl, 1000);
*/

/*
https://military.wikia.org/wiki/Nazi_concentration_camp_badges
http://resistanceheroines.blogspot.com/2015/09/concentration-camp-badges.html
Wikipedia
*/