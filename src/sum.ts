import { Money } from '../src/money';
import {Expression} from './expression'
import { Bank } from "./bank";
export class Sum implements Expression{
  augend:Expression
  addend:Expression
  constructor(augend:Expression, addend:Expression){
    this.augend = augend
    this.addend = addend

  }
  reduce(bank:Bank, to:string):Money{
    const amount = this.augend.reduce(bank, to).getAmount() + this.addend.reduce(bank, to).getAmount()
    return new Money(amount, to)
  }
  plus(addend:Expression):Expression{
    return new Sum(this, addend)
  }
  times(multiplier:number):Expression{
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
}
}