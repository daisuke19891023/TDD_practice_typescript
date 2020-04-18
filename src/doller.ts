import { Money } from "./money"

export class Doller extends Money{

    constructor(amount:number){
        super(amount)

    }
    times(multiplier:number):Doller{
        return new Doller(this.amount * multiplier)

    }
}