class playState extends Gamestate {
    draw() {
        background(0)
        Tween.update(deltaTime)
        if (!this.p.collide(this.p.pos.x + this.hori * this.p.speed, this.p.pos.y, this.walls)) {
            this.p.pos.x += this.hori * this.p.speed
            this.c.move(this.p.pos.x, this.p.pos.y)
        }
        if (!this.p.collide(this.p.pos.x, this.p.pos.y + this.vert * this.p.speed, this.walls)) {
            this.p.pos.y += this.vert * this.p.speed
            this.c.move(this.p.pos.x, this.p.pos.y)
        }
        this.c.attach()
        this.p.look(this.walls, this.sprites)

        this.p.show()
        
        //p.ray1.sweep(walls);
        for (const w of this.walls) {
            w.show()
        }
        this.c.dettach()
        this.menuBtn.pos.x = width-32
        this.menuBtn.draw()
        this.exitBtn.alpha = this.opacity[0] - 80
        this.closeBtn.alpha = this.opacity[0] - 80
        if(this.opacity[0] > 0) {
            push()
            fill(0,0,0, this.opacity[0])
            strokeWeight(10)
            stroke(255,255,255, this.opacity[0])
            rect(width/4, height/4, width/2, height/2, 50, 50, 50, 50)
            noStroke()
            strokeWeight(1)
            fill(255,255,255, this.opacity[0])
            textSize(75)
            text("Menu", width/2-textWidth("Menu")/2, height/4+textAscent())
            this.closeBtn.draw()
            this.exitBtn.draw()
            
            stroke(255,255,255, this.opacity[0])
            pop()
        }
    }
    mouseMoved() {
        this.menuBtn.mouseMoved()
        this.closeBtn.mouseMoved()
        this.exitBtn.mouseMoved()
    }
    mouseClicked() {
        this.menuBtn.mouseClicked(this)
        this.closeBtn.mouseClicked(this)
        this.exitBtn.mouseClicked(this)
    }
    enter() {
        this.opacity = [0]
        this.p = new Player(loadImage("./images/char.png"), cyan)
        this.walls = []
        this.walls.push(new Boundary(0 + 5, 0 + 5, width/2 - 5, 0 + 5))
        this.walls.push(new Boundary(0 + 5, 0 + 5, 0 + 5, height - 5))
        this.walls.push(new Boundary(width/2 - 5, 0 + 5, width/2 - 5, height - 5))
        this.walls.push(new Boundary(0 + 5, height - 5, width/2 - 5, height - 5))
        this.walls.push(new Boundary(5, 500, 500, 500))
        this.walls.push(new Boundary(5, 510, 500, 510))
        this.walls.push(new Boundary(500, 500, 500, 510))
        this.walls.push(new Boundary(500, 5, 500, 400))
        this.walls.push(new Boundary(510, 5, 510, 400))
        this.walls.push(new Boundary(500, 400, 510, 400))
      
        // walls.push(new Boundary(200, 100, 200, 300))
      
        this.sprites = []
        this.sprites.push(new Sprite(400, 700, loadImage("./images/char.png"), "green", "Player 2"))
        this.sprites.push(new Sprite(100, 200, loadImage("./images/char.png"), "red", "Player 3"))
        this.sprites.push(new Sprite(800, 300, loadImage("./images/char.png"), "white", "Player 4"))
        this.hori = 0
        this.vert = 0
        
        this.c = new Camera(this.p.pos.x, this.p.pos.y)

        this.menu = false

        this.menuBtn = new imageButton(gearImg, width-32, 32, 175,255,false,null)
        this.menuBtn.click = (s) => {
            if(s.menu) {
                Tween.during(300, s.opacity, 0)
                s.menu = false
            } else {
                Tween.during(300, s.opacity, 255)
                s.menu = true
            }
            
        };
        this.closeBtn = new textButton("Close", "center", height/2-textSize()*2, 175, 255, 255, 255, 255, 50, false)
        this.closeBtn.click = (s) => {
            if(s.menu) {
                Tween.during(300, s.opacity, 0)
                s.menu = false
            } else {
                Tween.during(300, s.opacity, 255)
                s.menu = true
            }
        };
        this.exitBtn = new textButton("Exit to title", "center", height/2+textSize()*2, 175, 255, 255, 255, 255, 50, false)
        this.exitBtn.click = (s) => {
            Gamestate.switch(new mainMenuState())
        };
    }
    
    keyPressed() {
        if (keyCode == 81) {
            this.hori = -1
        }
        if (keyCode == 68) {
            this.hori = 1
        }
        if (keyCode == 90) {
            this.vert = -1
        }
        if (keyCode == 83) {
            this.vert = 1
        }
      }
      
    keyReleased() {
        if (keyCode == 81) {
            this.hori = 0
        }
        if (keyCode == 68) {
            this.hori = 0
        }
        if (keyCode == 90) {
            this.vert = 0
        }
        if (keyCode == 83) {
            this.vert = 0
        }
      }
}