export class Money{
    protected amount:number
    constructor(amount:number){
        this.amount = amount
    }
    public getAmount():number{
        return this.amount
    }
    public equal(money:Money):boolean{
        return this.amount === money.getAmount()
    }
}