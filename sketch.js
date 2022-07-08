function preload() {
  soundFormats("mp3", "wav")
  mainMenuMusic = loadSound("music/mainMenu.mp3")
  pickSound = loadSound("music/pick.wav")
  acceptSound = loadSound("music/accept.wav")

  musicImg = loadImage("images/music.png")
  noMusicImg = loadImage("images/noMusic.png")
  gearImg = loadImage("images/gear.png")
}

function windowResized() {
  resizeCanvas(windowWidth-31, windowHeight-32);
}

function setup() {

  createCanvas(windowWidth-31, windowHeight-32)
  // width = 2000
  // height = 1000

  splash = new splashState()
  Gamestate.switch(splash)
}



function draw() {
  Gamestate.draw()
}

function mouseClicked() {
  Gamestate.mouseClicked()
}

function mouseMoved() {
  Gamestate.mouseMoved()
}

function keyPressed() {
  Gamestate.keyPressed()
}

function keyReleased() {
  Gamestate.keyReleased()
}