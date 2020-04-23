import { Money } from '../src/money';
import {Expression} from './expression'
import { Sum } from './sum';
import { Pair } from './pair';
export class Bank{
    public rates = new Map<number, number>()
    reduce(source:Expression, to:string):Money{
        return source.reduce(this, to)
    }
    addRate(from:string, to:string, rate:number):void{
        this.rates.set(new Pair(from, to).hashCode(), rate)
    }
    rate(from:string, to:string):number{
        if(from === to) return 1
        const ans = this.rates.get(new Pair(from, to).hashCode())
        if ( ans != undefined){
            return ans
        }else{
            return 0
        }
    }
}