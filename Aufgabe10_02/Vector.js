"use strict";
var StrandCanvas;
(function (StrandCanvas) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    StrandCanvas.Vector = Vector;
})(StrandCanvas || (StrandCanvas = {}));
//# sourceMappingURL=Vector.js.map