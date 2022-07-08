class splashState extends Gamestate {
    draw() {
        clear()
        Tween.update(deltaTime)
        noStroke()
        textSize(100)
        fill(255, 255, 255, this.titleAlpha[0])
        tint(255,255,255, this.titleAlpha[0])
        image(this.logo, width/2-this.logo.width/2, height/2-2*this.logo.height/3)
        text("Event Horizon", width/2-textWidth("Event Horizon")/2, height/2+this.logo.height/3)
    }
    enter() {
        this.skipped = false
        this.titleAlpha = [0]
        this.logo = loadImage("images/logo.png")
        this.mainMenu = new mainMenuState()
        setTimeout(() => {
            if(this.skipped) return
            this.i1 = Tween.during(500, this.titleAlpha, 255)
            setTimeout(() => {
                // if(this.skipped) return
                // this.i2 = Tween.during(1000, this.titleAlpha, 0)
                // setTimeout(() => {
                    if(this.skipped) return
                    this.titleAlpha = [255]
                    Gamestate.switch(this.mainMenu)
                // }, 1000);
            }, 4000);
        }, 1);
    }
    mouseClicked() {
        this.skipped = true
        if(this.i1 !== undefined) Tween.remove(this.i1)
        if(this.i2 !== undefined) Tween.remove(this.i2)
        Gamestate.switch(this.mainMenu)
    }
}