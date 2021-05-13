import { Rounding, _100, BigintIsh } from '../../constants'
import { Fraction } from './fraction'

const _100_PERCENT = new Fraction(_100)

export class Percent extends Fraction {
  public toSignificant(significantDigits: number = 5, format?: object, rounding?: Rounding): string {
    return super.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding)
  }

  public toFixed(decimalPlaces: number = 2, format?: object, rounding?: Rounding): string {
    return super.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding)
  }

  public add(other: Percent | BigintIsh): Percent {
    const result = super.add(other);
    return new Percent(result.numerator, result.denominator);
  }

  public subtract(other: Percent | BigintIsh): Percent {
    const result = super.subtract(other);
    return new Percent(result.numerator, result.denominator);
  }

  public multiply(other: Percent | BigintIsh): Percent {
    const result = super.multiply(other);
    return new Percent(result.numerator, result.denominator);
  }

  public divide(other: Percent | BigintIsh): Percent {
    const result = super.divide(other);
    return new Percent(result.numerator, result.denominator);
  }
}
