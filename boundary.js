class Boundary {
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
    }

    isOnWall(pt) {
        let xmin = min(this.a.x, this.b.x) - 5
        let xmax = max(this.a.x, this.b.x) + 5
        let ymin = min(this.a.y, this.b.y) - 5
        let ymax = max(this.a.y, this.b.y) + 5
        return (pt.x >= xmin && pt.x <= xmax && pt.y >= ymin && pt.y <= ymax)
    }

    show() {
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}