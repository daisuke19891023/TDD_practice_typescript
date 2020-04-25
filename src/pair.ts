import { Md5 } from 'ts-md5/dist/md5'
export class Pair{
    private from:string
    private to:string
    constructor(from:string,to:string){
        this.from = from
        this.to = to
    }
    public equals(object:Object):boolean{
        const pair = object as Pair
        return this.from === pair.from && this.to === pair.to
    }
    public hashCode():string | Int32Array{
        return Md5.hashStr(this.from + this.to)
    }
}