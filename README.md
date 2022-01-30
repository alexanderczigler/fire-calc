# FIRE

This is a simple FIRE calculator i made as a cli tool. (FIRE = Financial Independence, Retire Early.)

## Assumptions and known issues

- The calculator is currently locked to SEK and Swedish number formatting
- It uses the rather pessimistic 4 % rule
- There is no way to simulate scenarios with different market yields (only the 4 %-rule)
- There is no way to add a side income (i.e. Coasting FIRE)

## Running

```shell
npm ci
npm start
```

Now that it's running you will see the output every time you change your numbers.

## How it works

The data used is all inside `default.json`. You will see some sample data in there already, simply modify the contents to fit your life.

Set `investments.total` to the sum of money you have invested right now.
Set `investments.monthly` to the sum of money you invest each month.

Add your basic costs to `costs.survival`. These should cover all the things you *need* to just get by - like food, rent, basic clothing, insurances and medical costs.

Next, your other costs to `costs.quality`. These are the things you *want* in your life, like a subscription to a meditation app.
