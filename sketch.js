let myHero;
let gamestate =1;
let bangers;
let icon;
let leftPic;
let collage;
let noPage;
let link;

function preload(){
  myHero = loadImage('./images/myHero.webp');
  bangers = loadFont('./assets/Bangers-Regular.ttf');
  icon = loadImage('./images/icon.jpg');
  leftPic = loadImage('./images/leftPic.webp');
  collage = loadImage('./images/collage.jpg');
  noPage = loadImage('./images/noPage.jpg');

}

function setup() {
  createCanvas(1000,600, WEBGL);
  button1 = createButton('NO!');
  button2 = createButton('YES!');
  button1.hide();
  button2.hide();

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
    button1.position(600,400);
    button1.size(50,40);

    button2.show();
    button2.position(500,400);
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
    link = createA('https://rkodit2.github.io/MyFanpage/','Click me to learn more About My Hero Academia','_blank');
    link.position(600,500);



    let time = millis();
    rotateX(time/1000);
    rotateZ(time/1234);
    image(myHero,100,100,600,400);


  } else if(gamestate===4){
    background(255,165,0);
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

function goToLink(){
  window.open('https://google.com');
}

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
