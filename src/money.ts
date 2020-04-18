export abstract class Money{
    protected amount:number
    constructor(amount:number){
            this.amount = amount
    }
    abstract times(multiplier:number):Money
    public getAmount():number{
        return this.amount
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
    public static franc(amount:number):Franc{
        return new Franc(amount)
    }
}

export class Franc extends Money {

    constructor(amount:number){
        super(amount)
    }
    times(multiplier:number):Money{
        return new Franc(this.amount * multiplier)
    }
}

export class Dollar extends Money{

    constructor(amount:number){
        super(amount)
    }
    times(multiplier:number):Money{
            return new Dollar(this.amount * multiplier)
    }
}
