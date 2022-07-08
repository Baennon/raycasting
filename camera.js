class Camera {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        self.w = w;
        self.h = h
    }
    attach() {
        push()
        translate(width/2, height/2)
        translate(-self.x, -self.y)
    }
    dettach() {
       pop()
    }
    move(x, y) {
        self.x = x
        self.y = y
    }
}