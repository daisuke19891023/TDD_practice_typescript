export class Money{
    protected amount:number
    protected currencyName:string
    constructor(amount:number, currencyName:string){
            this.amount = amount
            this.currencyName = currencyName
    }
    times(multiplier:number):Money{
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
    public static dollar(amount:number):Dollar{
        return new Dollar(amount,"USD")
    }
    public static franc(amount:number):Franc{
        return new Franc(amount,"CHF")
    }
    currency():string{
        return this.currencyName
    }
}

export class Franc extends Money {

    constructor(amount:number, currencyName:string){
        super(amount,currencyName)
    }

}

export class Dollar extends Money{
    constructor(amount:number, currencyName:string){
        super(amount,currencyName)
    }
}
