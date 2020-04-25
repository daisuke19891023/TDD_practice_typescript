import {Expression} from './expression'
import {Sum} from './sum'
import { Bank } from './bank'
export class Money implements Expression{
    protected amount:number
    protected currencyName:string
    constructor(amount:number, currencyName:string){
            this.amount = amount
            this.currencyName = currencyName
    }
    times(multiplier:number):Expression{
        return new Money(this.amount * multiplier,this.currency())
    }
    public getAmount():number{
        return this.amount
    }
    public equal(money:Money):boolean{
        return this.amount === money.getAmount() && this.currency() === money.currency()
    }

    public getClass():string{
        return this.constructor.name
    }
    public static dollar(amount:number):Money{
        return new Money(amount,"USD")
    }
    public static franc(amount:number):Money{
        return new Money(amount,"CHF")
    }
    currency():string{
        return this.currencyName
    }
    plus(addEnd:Expression):Expression{
        return new Sum(this, addEnd)
    }
    reduce(bank:Bank , to:string){
        const rate = bank.rate(this.currencyName, to)
        return new Money(this.amount / rate, to)
    }
}

