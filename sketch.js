let myHero;
let gamestate =1;
let bangers;
let icon;
let leftPic;
let collage;
let noPage;
let link;
let canvas;
let canvasX;
let canvasY;
let gif1;
let gif2;
let gif3;
let gif4;
let gif5;
let gif6;
let gif7;
let gif8;
let gif9;
let song;


function preload(){
  myHero = loadImage('./images/myHero.webp');
  bangers = loadFont('./assets/Bangers-Regular.ttf');
  icon = loadImage('./images/icon.jpg');
  leftPic = loadImage('./images/leftPic.webp');
  collage = loadImage('./images/collage.jpg');
  noPage = loadImage('./images/noPage.jpg');
  gif1 = loadImage('./images/gif1.gif');
  gif2 = loadImage('./images/gif2.gif');
  gif3 = loadImage('./images/gif3.gif');
  gif4 = loadImage('./images/gif4.gif');
  gif5 = loadImage('./images/gif5.gif');
  gif6 = loadImage('./images/gif6.gif');
  gif7 = loadImage('./images/gif7.gif');
  gif8 = loadImage('./images/gif8.gif');
  gif9 = loadImage('./images/gif9.gif');
}

function setup() {
  canvas = createCanvas(1000,600, WEBGL);
  canvasX = (windowWidth - width)/2;
  canvasY = (windowHeight - height)/2;
  canvas.position(canvasX,canvasY);
  button1 = createButton('NO!');
  button2 = createButton('YES!');
  button1.hide();
  button2.hide();
  song = loadSound('assets/song.mp3');

  // button3 = createButton('Click Me to Learn More!');
}

function draw(){
  if(gamestate === 1){
    background(255,255,0);
    image(icon,-100,-300,350,400);
    image(leftPic,-300.-200.200,100);
    textFont(bangers);
    textSize(40);
    textAlign(CENTER);
    fill(0);
    textStyle(BOLD);
    // text('Click on the My Hero Academia Icon Above to begin!',20,150);
    text('Click on the My Hero',-300,-150);
    text('Academia Icon to the',-300,-120);
    text('right to begin!',-300,-90);
    let time = millis();
    rotateX(time/1000);
    rotateZ(time/1234);
    image(myHero,100,100,600,400);

  } else if (gamestate === 2){
    background(0,255,0);
    fill(255,255,0);
    textFont(bangers);
    textSize(40);
    textAlign(CENTER);
    textStyle(BOLD);
    text('Have you ever heard of My Hero Academia?',50,50);
    image(collage,-550,-300,900,300);

    fill(255,0,0);
    rect(90,90,70,60);

    fill(255,0,0);
    rect(-10,90,70,60);

    let time = millis();
    rotateX(time/1000);
    rotateZ(time/1234);
    image(myHero,100,100,600,400);

    // button1 = createButton('NO!');
    // button2 = createButton('YES!');
    button1.show();
    button1.position(canvasX+600,canvasY+400);
    button1.size(50,40);

    button2.show();
    button2.position(canvasX+500,canvasY+400);
    button2.size(50,40);

  } else if(gamestate===3){
    background(255,255,0);
    image(noPage,-400,-300,500,400);

    fill(0,255,0);
    rect(-500,-100,70,500);

    fill(0,255,0);
    rect(130,-300,70,200);

    fill(0,255,0);
    rect(230,-300,70,300);

    fill(0,255,0);
    rect(330,-300,70,200);

    fill(0,255,0);
    rect(430,-300,70,300);

    textFont(bangers);
    textSize(40);
    textAlign(CENTER);
    textStyle(BOLD);
    fill(0);
    text('That is okay! Would you be interested to learn more about it?',50,140);

    // buttonThreeSetup();
    // buttonThree();
    link = createA('https://rkodit2.github.io/MyFanpage/','Click me to learn more about My Hero Academia','_blank');
    link.position(600,500);



    let time = millis();
    rotateX(time/1000);
    rotateZ(time/1234);
    image(myHero,100,100,600,400);


  } else if(gamestate===4){
    background(0);

    textFont(bangers);
    textSize(40);
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255,255,255);
    text('Here are some gifs for you to enjoy then!',20,-250);

    image(gif1,-500,-230,300,150);
    image(gif2,-150,-230,300,150);
    image(gif3,200,-230,300,150);

    image(gif4,-500,-50,300,150);
    image(gif5,-150,-50,300,150);
    image(gif6,200,-50,300,150);

    image(gif7,-500,130,300,150);
    image(gif8,-150,130,300,150);
    image(gif9,200,130,300,150);

    let time = millis();
    rotateX(time/1000);
    rotateZ(time/1234);
    image(myHero,100,100,600,400);
  }

}

function mousePressed(){
  if(gamestate === 1){
    gamestate=2;
  button1.mousePressed(buttonOne);
  button2.mousePressed(buttonTwo);
  if(song.isPlaying()){
    song.stop();
  } else{
    song.play();
  }
  // link.mousePressed(goToLink);
  // button3.mousePressed(goToLink);
  }

function buttonOne(){
  removeElements();
  gamestate=3;
}

function buttonTwo(){
  removeElements();
  gamestate=4;
}

// function goToLink(){
//   window.open('https://google.com');
// }

// function buttonThreeSetup{
//   button3 = createButton('Click me to Learn More!');
//   button3.position(100,100);
//   button3.mousePressed(buttonThree);
// }
//
// function buttonThree{
//   window.open('');
// }
}
