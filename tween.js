class Tween{
    static tween = []
    static during(time, property, end) {
        let l = Tween.tween.push({start: property[0], prop:property, way: (end-property),end:end, time:time, elapsed:0})
        return l-1
    }
    static remove(idx) {
        Tween.tween = Tween.tween.filter((v,i) => {if(i != idx) return v})
    }
    static update(dt) {
        for (const t of Tween.tween) {
            let percent = t.elapsed/t.time
            t.prop[0] = t.start + t.way*percent
            t.elapsed+= dt
        }
        Tween.tween = Tween.tween.filter((t) => {if(t.elapsed <= t.time) {
            return t
        } else {
            t.prop[0] = t.end
        }
        })
    }
}