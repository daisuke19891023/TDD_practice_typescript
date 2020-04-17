export class Doller{
    private amount:number
    constructor(public _amount:number){
        this.amount = _amount

    }
    times(multiplier:number):Doller{
        return new Doller(this.amount * multiplier)

    }
    equal(obj:Doller):boolean{
        return this.amount === obj.amount

    }


}