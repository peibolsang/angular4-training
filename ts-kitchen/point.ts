
export class Point{
    //private x: number;
    //private y: number;
    
    constructor(private _x?: number, private _y?: number){
    }
    
    draw() {
        console.log('X: '+this._x + ', Y: ' + this._y);
    }

    distance(another: Point){

    }

    get x(){
        return this.x;
    }

    set x(value){
        if (value<0) throw new Error("Value cannot be less than 0");
        this.x = value
    }
}