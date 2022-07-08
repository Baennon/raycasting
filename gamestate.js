class Gamestate {
    static current = null
    constructor() {}
    draw() {}
    enter() {}
    mouseClicked() {}
    mouseMoved() {}
    keyPressed() {}
    keyReleased() {}
    static draw() {
        Gamestate.current.draw()
    }
    static mouseClicked() {
        Gamestate.current.mouseClicked()
    }
    static mouseMoved() {
        Gamestate.current.mouseMoved()
    }
    static keyPressed() {
        Gamestate.current.keyPressed()
    }
    static keyReleased() {
        Gamestate.current.keyReleased()
    }
    static switch(state, ...args) {
        Gamestate.current = state
        Gamestate.current.enter(args)
    }
}