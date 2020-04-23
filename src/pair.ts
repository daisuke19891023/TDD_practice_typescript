export class Pair{
    public from:string
    public to:string
    constructor(from:string,to:string){
        this.from = from
        this.to = to
    }
    public equals(object:Object):boolean{
        const pair = object as Pair
        return this.from === pair.from && this.to === pair.to
    }
    public hashCode():number{
        return 0
    }
}