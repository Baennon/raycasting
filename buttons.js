class imageButton {
    constructor(img, x, y, alpha, alphaHover, hasBorder, border, hoverSound, acceptSound) {
        this.img = img
        this.pos = createVector(x, y)
        this.hasBorder = hasBorder
        this.alpha = alpha
        this.alphaHover = alphaHover
        this.border = border
        this.hoverSound = hoverSound
        this.acceptSound = acceptSound
    }
    draw() {
        push()
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        if (!this.hasBorder) {
            if (!this.hover) {
                tint(255, 255, 255, this.alpha)
                image(this.img, x - this.img.width / 2, y - this.img.height / 2)
                cursor()
            } else {
                tint(255, 255, 255, this.alphaHover)
                cursor(HAND)
                image(this.img, x - this.img.width / 2, y - this.img.height / 2)
            }
        }
        pop()
    }
    mouseClicked(state) {
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        let xmin = x - this.img.width / 2
        let xmax = x+ this.img.width / 2
        let ymin = y - this.img.height / 2
        let ymax = y + this.img.height / 2
        if (mouseX <= xmax && mouseX >= xmin && mouseY <= ymax && mouseY >= ymin) {
            if(this.acceptSound) this.hoverSound.play()
            this.click(state)
        }
    }
    mouseMoved() {
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        let xmin = x - this.img.width / 2
        let xmax = x + this.img.width / 2
        let ymin = y - this.img.height / 2
        let ymax = y + this.img.height / 2
        if (mouseX <= xmax && mouseX >= xmin && mouseY <= ymax && mouseY >= ymin) {
            if(!this.hover && this.hoverSound) this.hoverSound.play()
            this.hover = true
        } else {
            this.hover = false
        }
    }
}

class textButton {
    constructor(text, x, y, alpha, alphaHover, r, g, b, fontSize, hasBorder, border, hoverSound) {
        this.text = text
        this.pos = createVector(x, y)
        this.hasBorder = hasBorder
        this.alpha = alpha
        this.r = r
        this.g = g
        this.b = b
        this.fontSize = fontSize
        this.alphaHover = alphaHover
        this.border = border
        this.hoverSound = hoverSound
    }
    draw() {
        push()
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        if (!this.hasBorder) {
            if (!this.hover) {
                noStroke()
                fill(this.r, this.g, this.b, this.alpha)
                textSize(this.fontSize)
                text(this.text, x - textWidth(this.text) / 2, y + textSize()/4)
            } else {
                noStroke()
                fill(this.r, this.g, this.b, this.alphaHover)
                textSize(this.fontSize)
                cursor(HAND)
                text(this.text, x - textWidth(this.text) / 2, y + textSize()/4)
            }
        }
        pop()
    }
    mouseClicked(state) {
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        textSize(this.fontSize)
        let xmin = x - textWidth(this.text) / 2
        let xmax = x + textWidth(this.text) / 2
        let ymin = y - textSize()/2
        let ymax = y + textSize()/2
        if (mouseX <= xmax && mouseX >= xmin && mouseY <= ymax && mouseY >= ymin) {
            this.click(state)
        }
    }
    mouseMoved() {
        let x = (this.pos.x =="center") ? width/2 : this.pos.x
        let y = (this.pos.y =="center") ? height/2 : this.pos.y
        textSize(this.fontSize)
        let xmin = x - textWidth(this.text) / 2
        let xmax = x + textWidth(this.text) / 2
        let ymin = y - textSize()/2
        let ymax = y + textSize()/2
        if (mouseX <= xmax && mouseX >= xmin && mouseY <= ymax && mouseY >= ymin) {
            if(!this.hover && this.hoverSound) this.hoverSound.play()
            this.hover = true
        } else {
            this.hover = false
        }
    }
}