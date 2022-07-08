class Sprite {
    constructor(x, y, image, color, name) {
        this.pos = createVector(x, y)
        this.image = image;
        this.color = color
        this.name = name // max = 12
    }

    update(x, y) {
            this.pos.x = x;
            this.pos.y = y;
    }


    show(vertices) {
        let mask = createGraphics(100,100);
        mask.fill(255)
        mask.beginShape()
        for (let v of vertices) {
            mask.vertex(v.x - this.pos.x + 100 / 2, v.y - this.pos.y + 100 / 2);
        }
        mask.endShape()
       
        let circ = createGraphics(100,100)
        let circImg = createImage(100,100)
        circ.fill(this.color)
        circ.stroke("grey")
        circ.circle(50, 50, 50)
        circ.textSize(15)
        circ.text(this.name, 100-textWidth(this.name)/2, 15)
        circImg.copy(circ, 0, 0, 100, 100, 0, 0, 100, 100)
        circImg.mask(mask)
        image(circImg, this.pos.x - 100 / 2, this.pos.y - 100 / 2)
    }

}