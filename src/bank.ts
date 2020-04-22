import { Money } from '../src/money';
import {Expression} from './expression'
import { Sum } from './sum';
export class Bank{
    reduce(source:Expression, to:string):Money{
        const sum = source as Sum
        return sum.reduce(to)
    }
}