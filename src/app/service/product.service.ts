import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// SpringbootのRest APIと通信をする

// providedIn: 'root'がないと表示されない
@Injectable({ providedIn: 'root' })
export class ProductService {

  private itemsUrl = '/products/items';  // Web APIのURL
  // CALLBACK = 'JSON_CALLBACK'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

  /* サーバーから商品データを取得する */
  // Observable<Item[]>
  getItems(): Observable<any> { 
    return this.http.get(this.itemsUrl)
    // return this.http.get<Item[]>(this.itemsUrl)
    //   .pipe(
    //     tap(items => console.log('fetched items')),
    //     catchError(this.handleError<Item[]>('getItems', []))
    //   );
  }

  /** IDによりヒーローを取得する。idが見つからない場合は`undefined`を返す。 */
  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // {0|1} 要素の配列を返す
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }

  /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
  findById(id: number): Observable<any> {
    const url = `${this.itemsUrl}/${id}`;
    debugger
    return this.http.get(url)
    // .pipe(
    //   tap(_ => console.log(`fetched item id=${id}`)),
    //   catchError(this.handleError<any>(`getItem id=${id}`))
    // );
  }

  /* 検索語を含むヒーローを取得する */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // 検索語がない場合、空のヒーロー配列を返す
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

  //////// Save methods //////////

  /** POST: サーバーに新しいヒーローを登録する */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  /** DELETE: サーバーからヒーローを削除 */
  // deleteHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;

  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  /** PUT: サーバー上でヒーローを更新 */
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      // this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  /** HeroServiceのメッセージをMessageServiceを使って記録 */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}