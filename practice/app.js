// function makeColor (r,g,b ) {
//     const color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         return `rgb(${r}, ${g}, ${b}))`
//     }

// }



function Color(r,g,b) {
    const o = {}
    this.r = r
    this.g= g
    this.b = b
    

}

Color.prototype.rgb = function() {
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function () {
    const {r, g, b} = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function(a=1.0) {
    const {r, g, b} = this
    return `rgba(${r},${g},${b}, ${a} )`

}

const color = new Color(240,33,115)
const color2 = new Color(24,33,45)