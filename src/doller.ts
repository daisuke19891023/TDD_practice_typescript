export class Doller{
    public amount:number
    constructor(public _amount:number){
        this.amount = _amount

    }
    times(multiplier:number):Doller{
        return new Doller(this.amount * multiplier)

    }


}