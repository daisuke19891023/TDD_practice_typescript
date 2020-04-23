import { Money } from '../src/money';
import {Expression} from './expression'
import { Bank } from "./bank";
export class Sum implements Expression{
  augend:Money
  addend:Money
  constructor(augend:Money, addend:Money){
    this.augend = augend
    this.addend = addend

  }
  reduce(bank:Bank, to:string):Money{
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}