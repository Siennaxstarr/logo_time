class SVG {
    constructor() {
        this.shape = ""
        this.text = ""
    }
    render() {
        return `<svg height="210" width="500">
        ${this.shape} ${this.text}
      </svg>`
    }
    settext(message, color) {
        this.text = `<text x="0" y="15" fill="${color}">${message}</text>`
    }
    setshape(shape) {
        this.shape = shape
    }
}
module.exports = SVG