import { Money } from '../src/money';
import {Expression} from './expression'
export class Sum implements Expression{
  augend:Money
  addend:Money
  constructor(augend:Money, addend:Money){
    this.augend = augend
    this.addend = addend

  }
  reduce(to:string):Money{
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}