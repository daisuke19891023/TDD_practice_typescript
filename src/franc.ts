import { Money } from "./money"

    export class Franc extends Money {

        constructor(amount:number){
            super(amount)
        }
        times(multiplier:number):Franc{
            return new Franc(this.amount * multiplier)

        }
        equal(franc:Money):boolean{
            return this.amount === franc.getAmount()
        }
    }