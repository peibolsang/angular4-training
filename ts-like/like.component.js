"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_count, _active) {
        this._count = _count;
        this._active = _active;
    }
    LikeComponent.prototype.onClick = function () {
        if (this._active)
            this.unlike();
        else
            this.like();
    };
    LikeComponent.prototype.like = function () {
        this._count++;
        this._active = true;
    };
    LikeComponent.prototype.unlike = function () {
        this._count--;
        this._active = false;
    };
    Object.defineProperty(LikeComponent.prototype, "count", {
        get: function () { return this._count; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "active", {
        get: function () { return this._active; },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
