/**
 * > 6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.
>
>
> `Input: CP = 1500, SP = 2000
> Output: 500 Profit
>
> Input: CP = 3125, SP = 1125
> Output: 2000 Loss`
>
 */

const ProfitOrLoss = (cp, sp) => {
  let diff = sp - cp;

  return diff >= 0 ? `profit ${diff}` : `loss ${-1 * diff}`;
};
console.log(ProfitOrLoss(3125, 1125));
