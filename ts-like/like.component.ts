
export class LikeComponent{
    
   constructor(private _count?: number, private  _active?:boolean){}
    
   onClick(){
       if (this._active) this.unlike()
       else this.like();
    }

    like(){
        this._count++;
        this._active = true;
    }

    unlike(){
        this._count--;
        this._active = false;
    }

    get count(){ 
        return this._count;
    }
    
    get active(){ 
        return this._active;
    }
}