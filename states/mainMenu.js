class mainMenuState extends Gamestate {
    draw() {
        clear()
        Tween.update(deltaTime)
        noStroke()
        textSize(100)
        fill(255,255,255,this.titleAlpha[0])
     
        text("Besides Us", width/2-textWidth("Besides Us")/2, height/4)
        textSize(15)
        text("For demonstration purposes only,", 0, 20)
        for (const s of this.stars) {
            s.x += s.size/2 -1
            if(s.x > width) {
                s.x = 0
                s.y = random(0, height)
                s.size = random(4,7)
            }
            ellipse(s.x, s.y, s.size)
        }
        cursor()
        this.musicBtn.alpha = this.menuAlpha[0]
        this.playBtn.alpha = this.menuAlpha[0]
        this.optBtn.alpha = this.menuAlpha[0]
        this.musicBtn.alphaHover = this.titleAlpha[0]
        this.playBtn.alphaHover = this.titleAlpha[0]
        this.optBtn.alphaHover = this.titleAlpha[0]
        this.musicBtn.draw()
        this.playBtn.draw()
        this.optBtn.draw()
    }
    mouseMoved() {
        this.musicBtn.mouseMoved()
        this.playBtn.mouseMoved()
        this.optBtn.mouseMoved()
    }
    mouseClicked() {
        this.musicBtn.mouseClicked(this)
        this.playBtn.mouseClicked(this)
        this.optBtn.mouseClicked(this)
    }
    enter() {
        this.titleAlpha = [0]
        this.menuAlpha = [0]
        Tween.during(500, this.titleAlpha, 255)
        Tween.during(500, this.menuAlpha, 175)
        this.stars = []
        
        this.musicBtn = new imageButton(musicImg, 64, height-64, 175, 255, false)
        this.musicBtn.click = function() {
            let volume = mainMenuMusic.getVolume()
            if(volume == 1) {
                mainMenuMusic.setVolume(0)
                this.img = noMusicImg
            } else {
                mainMenuMusic.setVolume(1)
                this.img = musicImg
            }
        
        }


        this.playBtn = new textButton("Play", "center", height/4+200,175,255,255,255,255,75,false,null,pickSound, acceptSound)
        this.playBtn.click = function(s) {
            cursor()
            Tween.during(500, s.menuAlpha, 0)
            Tween.during(500, s.titleAlpha, 0)
            mainMenuMusic.stop()
            setTimeout(() => {
                let play = new playState()
                Gamestate.switch(play)
            }, 500);
            
        }
        this.optBtn = new textButton("Options", "center", height/4+400,175,255,255,255,255,75,false,null,pickSound, acceptSound)
        
        

        mainMenuMusic.play()
        mainMenuMusic.setLoop(true)
    
        for (let i = 0; i < 50; i++) {
            let x = random(0, width)
            let y = random(0, height)
            let size = random(4,7)
            this.stars.push({x:x,y:y,size:size})            
        }
        mainMenuMusic.play()
    }
}