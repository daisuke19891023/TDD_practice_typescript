import { Dollar } from "./dollar"

export abstract class Money{
    protected amount:number | null = null
    abstract times(multiplier:number):Money
    constructor(amount?:number){
        if(amount != null){
            this.amount = amount
        }
    }
    public getAmount():number{
        if(this.amount != null){
            return this.amount
        }else{
            return 0
        }
    }
    public equal(money:Money):boolean{
        return this.amount === money.getAmount() && this.getClass() === money.getClass()
    }

    public getClass():string{
        return this.constructor.name
    }

    public static dollar(amount:number):Dollar{
        return new Dollar(amount)
    }
}