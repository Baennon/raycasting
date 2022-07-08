function sortAngle(a, b) {
	if (a.angle < b.angle) return 1
	if (a.angle > b.angle) return -1
	return 0
}

class Player {
	constructor(image,color) {
		this.pos = createVector(200, 200)
		this.rays = []
		this.image = image
		this.color = color
		this.speed = 10

	}
	
	look(walls, sprites) {
		let endpoints = []
		for (const w of walls) {
			endpoints.push(w.a);
			endpoints.push(w.b);
		}
		endpoints = endpoints.reduce((unique, o) => {
			if (!unique.some(obj => obj.x === o.x && obj.y === o.y)) {
				unique.push(o);
			}
			return unique;
		}, []);
		this.rays = []
		for (const pt of endpoints) {
			let base = createVector(width, 0)
			let diff = createVector(pt.x - this.pos.x, pt.y - this.pos.y)
			let angle = 0;
			angle = base.angleBetween(diff)
			this.rays.push(new Ray(this.pos, angle - 0.001))
			this.rays.push(new Ray(this.pos, angle))
			this.rays.push(new Ray(this.pos, angle + 0.001))
		}
		this.rays = this.rays.sort(sortAngle)
		let points = []
		for (const r of this.rays) {
			let shortest = Infinity
			let currentPoint = null
			let currentWall = null
			for (const w of walls) {
				let inter = r.cast(w)
				if (inter[0]) {
					let d = p5.Vector.dist(this.pos, inter[0])
					if (d < shortest) {
						shortest = d
						currentPoint = inter[0]
						currentWall = w
					}
				}
			}
			if (currentPoint) points.push({ pt: currentPoint, angle: r.angle, wall: currentWall })
		}

		let vertices = []

		noStroke()
		fill(255, 204, 0, 15)
		beginShape()
		for (const p of points) {
			vertices.push(createVector(p.pt.x, p.pt.y))
			vertex(p.pt.x, p.pt.y)
		}
		endShape()
		stroke(255)
		fill(255)
		
		for (let s of sprites) {
			s.show(vertices)
		}
	}

	collide(cx, cy, walls) {
		let rx = cx - 50/ 2
		let ry = cy - 50 / 2
		let rw = 50
		let rh = 50
		let hasCollided = false

		for (const w of walls) {
			let x1 = w.a.x
			let y1 = w.a.y
			let x2 = w.b.x
			let y2 = w.b.y
			if (collideLineRect(x1, y1, x2, y2, rx, ry, rw, rh)) hasCollided = true
		}
		return hasCollided
	}

	show() {
		stroke("grey")
		fill(this.color)
		circle(this.pos.x, this.pos.y, 50)
		//image(this.image, this.pos.x - this.image.width / 2, this.pos.y - this.image.height / 2)
	}
}