    export class Franc {
        private amaunt:number
        constructor(public _amount:number){
            this.amaunt = _amount
        }
        times(multiplier:number):Franc{
            return new Franc(this.amaunt * multiplier)

        }
        equal(franc:Franc):boolean{
            return this.amaunt === franc.amaunt
        }
    }