class CarrinhoOfertas {
  public quantidade: number = 1
      constructor(
          public id: number,
          public titulo: string,
          public descricao: string,
          public valor: number,
          public imagem: object
      ) {}
}

export {CarrinhoOfertas}
