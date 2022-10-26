class ShoppingCartModel {
  public amount: number = 1
      constructor(
          public id: number,
          public title: string,
          public description: string,
          public value: number,
          public image: string
      ) {}
}
export {ShoppingCartModel}
