export class Product {
  name!: string;
  price!: number;
  description!: string;
}
// 変数の後に！をつけることで、デフォルト値を設定しなくてもエラーが出なくなる
// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
