var Point = /** @class */ (function () {
    //private x: number;
    //private y: number;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Point.prototype.distance = function (another) {
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value cannot be less than 0");
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var another = new Point();
point.x = 10;
point.draw();
