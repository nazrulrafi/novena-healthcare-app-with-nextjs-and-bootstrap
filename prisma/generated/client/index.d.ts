
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model menuitem
 * 
 */
export type menuitem = $Result.DefaultSelection<Prisma.$menuitemPayload>
/**
 * Model page
 * 
 */
export type page = $Result.DefaultSelection<Prisma.$pagePayload>
/**
 * Model pagemeta
 * 
 */
export type pagemeta = $Result.DefaultSelection<Prisma.$pagemetaPayload>
/**
 * Model sitemeta
 * 
 */
export type sitemeta = $Result.DefaultSelection<Prisma.$sitemetaPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  SUBSCRIBER: 'SUBSCRIBER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Menuitems
 * const menuitems = await prisma.menuitem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Menuitems
   * const menuitems = await prisma.menuitem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.menuitem`: Exposes CRUD operations for the **menuitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menuitems
    * const menuitems = await prisma.menuitem.findMany()
    * ```
    */
  get menuitem(): Prisma.menuitemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.pageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagemeta`: Exposes CRUD operations for the **pagemeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagemetas
    * const pagemetas = await prisma.pagemeta.findMany()
    * ```
    */
  get pagemeta(): Prisma.pagemetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sitemeta`: Exposes CRUD operations for the **sitemeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sitemetas
    * const sitemetas = await prisma.sitemeta.findMany()
    * ```
    */
  get sitemeta(): Prisma.sitemetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    menuitem: 'menuitem',
    page: 'page',
    pagemeta: 'pagemeta',
    sitemeta: 'sitemeta',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "menuitem" | "page" | "pagemeta" | "sitemeta" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      menuitem: {
        payload: Prisma.$menuitemPayload<ExtArgs>
        fields: Prisma.menuitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          findFirst: {
            args: Prisma.menuitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          findMany: {
            args: Prisma.menuitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>[]
          }
          create: {
            args: Prisma.menuitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          createMany: {
            args: Prisma.menuitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.menuitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          update: {
            args: Prisma.menuitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          deleteMany: {
            args: Prisma.menuitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.menuitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuitemPayload>
          }
          aggregate: {
            args: Prisma.MenuitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuitem>
          }
          groupBy: {
            args: Prisma.menuitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuitemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuitemCountAggregateOutputType> | number
          }
        }
      }
      page: {
        payload: Prisma.$pagePayload<ExtArgs>
        fields: Prisma.pageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          findFirst: {
            args: Prisma.pageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          findMany: {
            args: Prisma.pageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>[]
          }
          create: {
            args: Prisma.pageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          createMany: {
            args: Prisma.pageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          update: {
            args: Prisma.pageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          deleteMany: {
            args: Prisma.pageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.pageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.pageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      pagemeta: {
        payload: Prisma.$pagemetaPayload<ExtArgs>
        fields: Prisma.pagemetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagemetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagemetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          findFirst: {
            args: Prisma.pagemetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagemetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          findMany: {
            args: Prisma.pagemetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>[]
          }
          create: {
            args: Prisma.pagemetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          createMany: {
            args: Prisma.pagemetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagemetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          update: {
            args: Prisma.pagemetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          deleteMany: {
            args: Prisma.pagemetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagemetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagemetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagemetaPayload>
          }
          aggregate: {
            args: Prisma.PagemetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagemeta>
          }
          groupBy: {
            args: Prisma.pagemetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagemetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagemetaCountArgs<ExtArgs>
            result: $Utils.Optional<PagemetaCountAggregateOutputType> | number
          }
        }
      }
      sitemeta: {
        payload: Prisma.$sitemetaPayload<ExtArgs>
        fields: Prisma.sitemetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sitemetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sitemetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          findFirst: {
            args: Prisma.sitemetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sitemetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          findMany: {
            args: Prisma.sitemetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>[]
          }
          create: {
            args: Prisma.sitemetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          createMany: {
            args: Prisma.sitemetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sitemetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          update: {
            args: Prisma.sitemetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          deleteMany: {
            args: Prisma.sitemetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sitemetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sitemetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sitemetaPayload>
          }
          aggregate: {
            args: Prisma.SitemetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSitemeta>
          }
          groupBy: {
            args: Prisma.sitemetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SitemetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.sitemetaCountArgs<ExtArgs>
            result: $Utils.Optional<SitemetaCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    menuitem?: menuitemOmit
    page?: pageOmit
    pagemeta?: pagemetaOmit
    sitemeta?: sitemetaOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    pagemeta: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagemeta?: boolean | PageCountOutputTypeCountPagemetaArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountPagemetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagemetaWhereInput
  }


  /**
   * Count Type SitemetaCountOutputType
   */

  export type SitemetaCountOutputType = {
    menuitem: number
  }

  export type SitemetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuitem?: boolean | SitemetaCountOutputTypeCountMenuitemArgs
  }

  // Custom InputTypes
  /**
   * SitemetaCountOutputType without action
   */
  export type SitemetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SitemetaCountOutputType
     */
    select?: SitemetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SitemetaCountOutputType without action
   */
  export type SitemetaCountOutputTypeCountMenuitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuitemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model menuitem
   */

  export type AggregateMenuitem = {
    _count: MenuitemCountAggregateOutputType | null
    _avg: MenuitemAvgAggregateOutputType | null
    _sum: MenuitemSumAggregateOutputType | null
    _min: MenuitemMinAggregateOutputType | null
    _max: MenuitemMaxAggregateOutputType | null
  }

  export type MenuitemAvgAggregateOutputType = {
    id: number | null
    order: number | null
    siteMetaId: number | null
  }

  export type MenuitemSumAggregateOutputType = {
    id: number | null
    order: number | null
    siteMetaId: number | null
  }

  export type MenuitemMinAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    order: number | null
    siteMetaId: number | null
  }

  export type MenuitemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    link: string | null
    order: number | null
    siteMetaId: number | null
  }

  export type MenuitemCountAggregateOutputType = {
    id: number
    name: number
    link: number
    order: number
    siteMetaId: number
    _all: number
  }


  export type MenuitemAvgAggregateInputType = {
    id?: true
    order?: true
    siteMetaId?: true
  }

  export type MenuitemSumAggregateInputType = {
    id?: true
    order?: true
    siteMetaId?: true
  }

  export type MenuitemMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    order?: true
    siteMetaId?: true
  }

  export type MenuitemMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    order?: true
    siteMetaId?: true
  }

  export type MenuitemCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    order?: true
    siteMetaId?: true
    _all?: true
  }

  export type MenuitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuitem to aggregate.
     */
    where?: menuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemOrderByWithRelationInput | menuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menuitems
    **/
    _count?: true | MenuitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuitemMaxAggregateInputType
  }

  export type GetMenuitemAggregateType<T extends MenuitemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuitem[P]>
      : GetScalarType<T[P], AggregateMenuitem[P]>
  }




  export type menuitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuitemWhereInput
    orderBy?: menuitemOrderByWithAggregationInput | menuitemOrderByWithAggregationInput[]
    by: MenuitemScalarFieldEnum[] | MenuitemScalarFieldEnum
    having?: menuitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuitemCountAggregateInputType | true
    _avg?: MenuitemAvgAggregateInputType
    _sum?: MenuitemSumAggregateInputType
    _min?: MenuitemMinAggregateInputType
    _max?: MenuitemMaxAggregateInputType
  }

  export type MenuitemGroupByOutputType = {
    id: number
    name: string
    link: string
    order: number
    siteMetaId: number
    _count: MenuitemCountAggregateOutputType | null
    _avg: MenuitemAvgAggregateOutputType | null
    _sum: MenuitemSumAggregateOutputType | null
    _min: MenuitemMinAggregateOutputType | null
    _max: MenuitemMaxAggregateOutputType | null
  }

  type GetMenuitemGroupByPayload<T extends menuitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuitemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuitemGroupByOutputType[P]>
        }
      >
    >


  export type menuitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    order?: boolean
    siteMetaId?: boolean
    sitemeta?: boolean | sitemetaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuitem"]>



  export type menuitemSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    order?: boolean
    siteMetaId?: boolean
  }

  export type menuitemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "order" | "siteMetaId", ExtArgs["result"]["menuitem"]>
  export type menuitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sitemeta?: boolean | sitemetaDefaultArgs<ExtArgs>
  }

  export type $menuitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menuitem"
    objects: {
      sitemeta: Prisma.$sitemetaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      link: string
      order: number
      siteMetaId: number
    }, ExtArgs["result"]["menuitem"]>
    composites: {}
  }

  type menuitemGetPayload<S extends boolean | null | undefined | menuitemDefaultArgs> = $Result.GetResult<Prisma.$menuitemPayload, S>

  type menuitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuitemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuitemCountAggregateInputType | true
    }

  export interface menuitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menuitem'], meta: { name: 'menuitem' } }
    /**
     * Find zero or one Menuitem that matches the filter.
     * @param {menuitemFindUniqueArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuitemFindUniqueArgs>(args: SelectSubset<T, menuitemFindUniqueArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menuitem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuitemFindUniqueOrThrowArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuitemFindUniqueOrThrowArgs>(args: SelectSubset<T, menuitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menuitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemFindFirstArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuitemFindFirstArgs>(args?: SelectSubset<T, menuitemFindFirstArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menuitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemFindFirstOrThrowArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuitemFindFirstOrThrowArgs>(args?: SelectSubset<T, menuitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menuitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menuitems
     * const menuitems = await prisma.menuitem.findMany()
     * 
     * // Get first 10 Menuitems
     * const menuitems = await prisma.menuitem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuitemWithIdOnly = await prisma.menuitem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuitemFindManyArgs>(args?: SelectSubset<T, menuitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menuitem.
     * @param {menuitemCreateArgs} args - Arguments to create a Menuitem.
     * @example
     * // Create one Menuitem
     * const Menuitem = await prisma.menuitem.create({
     *   data: {
     *     // ... data to create a Menuitem
     *   }
     * })
     * 
     */
    create<T extends menuitemCreateArgs>(args: SelectSubset<T, menuitemCreateArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menuitems.
     * @param {menuitemCreateManyArgs} args - Arguments to create many Menuitems.
     * @example
     * // Create many Menuitems
     * const menuitem = await prisma.menuitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuitemCreateManyArgs>(args?: SelectSubset<T, menuitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menuitem.
     * @param {menuitemDeleteArgs} args - Arguments to delete one Menuitem.
     * @example
     * // Delete one Menuitem
     * const Menuitem = await prisma.menuitem.delete({
     *   where: {
     *     // ... filter to delete one Menuitem
     *   }
     * })
     * 
     */
    delete<T extends menuitemDeleteArgs>(args: SelectSubset<T, menuitemDeleteArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menuitem.
     * @param {menuitemUpdateArgs} args - Arguments to update one Menuitem.
     * @example
     * // Update one Menuitem
     * const menuitem = await prisma.menuitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuitemUpdateArgs>(args: SelectSubset<T, menuitemUpdateArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menuitems.
     * @param {menuitemDeleteManyArgs} args - Arguments to filter Menuitems to delete.
     * @example
     * // Delete a few Menuitems
     * const { count } = await prisma.menuitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuitemDeleteManyArgs>(args?: SelectSubset<T, menuitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menuitems
     * const menuitem = await prisma.menuitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuitemUpdateManyArgs>(args: SelectSubset<T, menuitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menuitem.
     * @param {menuitemUpsertArgs} args - Arguments to update or create a Menuitem.
     * @example
     * // Update or create a Menuitem
     * const menuitem = await prisma.menuitem.upsert({
     *   create: {
     *     // ... data to create a Menuitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menuitem we want to update
     *   }
     * })
     */
    upsert<T extends menuitemUpsertArgs>(args: SelectSubset<T, menuitemUpsertArgs<ExtArgs>>): Prisma__menuitemClient<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemCountArgs} args - Arguments to filter Menuitems to count.
     * @example
     * // Count the number of Menuitems
     * const count = await prisma.menuitem.count({
     *   where: {
     *     // ... the filter for the Menuitems we want to count
     *   }
     * })
    **/
    count<T extends menuitemCountArgs>(
      args?: Subset<T, menuitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menuitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuitemAggregateArgs>(args: Subset<T, MenuitemAggregateArgs>): Prisma.PrismaPromise<GetMenuitemAggregateType<T>>

    /**
     * Group by Menuitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends menuitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuitemGroupByArgs['orderBy'] }
        : { orderBy?: menuitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, menuitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menuitem model
   */
  readonly fields: menuitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menuitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sitemeta<T extends sitemetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sitemetaDefaultArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the menuitem model
   */
  interface menuitemFieldRefs {
    readonly id: FieldRef<"menuitem", 'Int'>
    readonly name: FieldRef<"menuitem", 'String'>
    readonly link: FieldRef<"menuitem", 'String'>
    readonly order: FieldRef<"menuitem", 'Int'>
    readonly siteMetaId: FieldRef<"menuitem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * menuitem findUnique
   */
  export type menuitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter, which menuitem to fetch.
     */
    where: menuitemWhereUniqueInput
  }

  /**
   * menuitem findUniqueOrThrow
   */
  export type menuitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter, which menuitem to fetch.
     */
    where: menuitemWhereUniqueInput
  }

  /**
   * menuitem findFirst
   */
  export type menuitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter, which menuitem to fetch.
     */
    where?: menuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemOrderByWithRelationInput | menuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuitems.
     */
    cursor?: menuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuitems.
     */
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * menuitem findFirstOrThrow
   */
  export type menuitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter, which menuitem to fetch.
     */
    where?: menuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemOrderByWithRelationInput | menuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menuitems.
     */
    cursor?: menuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menuitems.
     */
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * menuitem findMany
   */
  export type menuitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter, which menuitems to fetch.
     */
    where?: menuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menuitems to fetch.
     */
    orderBy?: menuitemOrderByWithRelationInput | menuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menuitems.
     */
    cursor?: menuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menuitems.
     */
    skip?: number
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * menuitem create
   */
  export type menuitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * The data needed to create a menuitem.
     */
    data: XOR<menuitemCreateInput, menuitemUncheckedCreateInput>
  }

  /**
   * menuitem createMany
   */
  export type menuitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menuitems.
     */
    data: menuitemCreateManyInput | menuitemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menuitem update
   */
  export type menuitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * The data needed to update a menuitem.
     */
    data: XOR<menuitemUpdateInput, menuitemUncheckedUpdateInput>
    /**
     * Choose, which menuitem to update.
     */
    where: menuitemWhereUniqueInput
  }

  /**
   * menuitem updateMany
   */
  export type menuitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menuitems.
     */
    data: XOR<menuitemUpdateManyMutationInput, menuitemUncheckedUpdateManyInput>
    /**
     * Filter which menuitems to update
     */
    where?: menuitemWhereInput
    /**
     * Limit how many menuitems to update.
     */
    limit?: number
  }

  /**
   * menuitem upsert
   */
  export type menuitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * The filter to search for the menuitem to update in case it exists.
     */
    where: menuitemWhereUniqueInput
    /**
     * In case the menuitem found by the `where` argument doesn't exist, create a new menuitem with this data.
     */
    create: XOR<menuitemCreateInput, menuitemUncheckedCreateInput>
    /**
     * In case the menuitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuitemUpdateInput, menuitemUncheckedUpdateInput>
  }

  /**
   * menuitem delete
   */
  export type menuitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    /**
     * Filter which menuitem to delete.
     */
    where: menuitemWhereUniqueInput
  }

  /**
   * menuitem deleteMany
   */
  export type menuitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menuitems to delete
     */
    where?: menuitemWhereInput
    /**
     * Limit how many menuitems to delete.
     */
    limit?: number
  }

  /**
   * menuitem without action
   */
  export type menuitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
  }


  /**
   * Model page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSumAggregateOutputType = {
    id: number | null
  }

  export type PageMinAggregateOutputType = {
    id: number | null
    metaKey: string | null
    title: string | null
    subTitle: string | null
    image: string | null
  }

  export type PageMaxAggregateOutputType = {
    id: number | null
    metaKey: string | null
    title: string | null
    subTitle: string | null
    image: string | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    metaKey: number
    title: number
    subTitle: number
    image: number
    _all: number
  }


  export type PageAvgAggregateInputType = {
    id?: true
  }

  export type PageSumAggregateInputType = {
    id?: true
  }

  export type PageMinAggregateInputType = {
    id?: true
    metaKey?: true
    title?: true
    subTitle?: true
    image?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    metaKey?: true
    title?: true
    subTitle?: true
    image?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    metaKey?: true
    title?: true
    subTitle?: true
    image?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which page to aggregate.
     */
    where?: pageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pageOrderByWithRelationInput | pageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type pageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pageWhereInput
    orderBy?: pageOrderByWithAggregationInput | pageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: pageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _avg?: PageAvgAggregateInputType
    _sum?: PageSumAggregateInputType
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: number
    metaKey: string
    title: string
    subTitle: string | null
    image: string | null
    _count: PageCountAggregateOutputType | null
    _avg: PageAvgAggregateOutputType | null
    _sum: PageSumAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends pageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type pageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaKey?: boolean
    title?: boolean
    subTitle?: boolean
    image?: boolean
    pagemeta?: boolean | page$pagemetaArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>



  export type pageSelectScalar = {
    id?: boolean
    metaKey?: boolean
    title?: boolean
    subTitle?: boolean
    image?: boolean
  }

  export type pageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaKey" | "title" | "subTitle" | "image", ExtArgs["result"]["page"]>
  export type pageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagemeta?: boolean | page$pagemetaArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "page"
    objects: {
      pagemeta: Prisma.$pagemetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      metaKey: string
      title: string
      subTitle: string | null
      image: string | null
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type pageGetPayload<S extends boolean | null | undefined | pageDefaultArgs> = $Result.GetResult<Prisma.$pagePayload, S>

  type pageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface pageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['page'], meta: { name: 'page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {pageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pageFindUniqueArgs>(args: SelectSubset<T, pageFindUniqueArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pageFindUniqueOrThrowArgs>(args: SelectSubset<T, pageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pageFindFirstArgs>(args?: SelectSubset<T, pageFindFirstArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pageFindFirstOrThrowArgs>(args?: SelectSubset<T, pageFindFirstOrThrowArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pageFindManyArgs>(args?: SelectSubset<T, pageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {pageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends pageCreateArgs>(args: SelectSubset<T, pageCreateArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {pageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pageCreateManyArgs>(args?: SelectSubset<T, pageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Page.
     * @param {pageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends pageDeleteArgs>(args: SelectSubset<T, pageDeleteArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {pageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pageUpdateArgs>(args: SelectSubset<T, pageUpdateArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {pageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pageDeleteManyArgs>(args?: SelectSubset<T, pageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pageUpdateManyArgs>(args: SelectSubset<T, pageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Page.
     * @param {pageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends pageUpsertArgs>(args: SelectSubset<T, pageUpsertArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends pageCountArgs>(
      args?: Subset<T, pageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pageGroupByArgs['orderBy'] }
        : { orderBy?: pageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the page model
   */
  readonly fields: pageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagemeta<T extends page$pagemetaArgs<ExtArgs> = {}>(args?: Subset<T, page$pagemetaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the page model
   */
  interface pageFieldRefs {
    readonly id: FieldRef<"page", 'Int'>
    readonly metaKey: FieldRef<"page", 'String'>
    readonly title: FieldRef<"page", 'String'>
    readonly subTitle: FieldRef<"page", 'String'>
    readonly image: FieldRef<"page", 'String'>
  }
    

  // Custom InputTypes
  /**
   * page findUnique
   */
  export type pageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter, which page to fetch.
     */
    where: pageWhereUniqueInput
  }

  /**
   * page findUniqueOrThrow
   */
  export type pageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter, which page to fetch.
     */
    where: pageWhereUniqueInput
  }

  /**
   * page findFirst
   */
  export type pageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter, which page to fetch.
     */
    where?: pageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pageOrderByWithRelationInput | pageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pages.
     */
    cursor?: pageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * page findFirstOrThrow
   */
  export type pageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter, which page to fetch.
     */
    where?: pageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pageOrderByWithRelationInput | pageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pages.
     */
    cursor?: pageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * page findMany
   */
  export type pageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter, which pages to fetch.
     */
    where?: pageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pages to fetch.
     */
    orderBy?: pageOrderByWithRelationInput | pageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pages.
     */
    cursor?: pageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * page create
   */
  export type pageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * The data needed to create a page.
     */
    data: XOR<pageCreateInput, pageUncheckedCreateInput>
  }

  /**
   * page createMany
   */
  export type pageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pages.
     */
    data: pageCreateManyInput | pageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * page update
   */
  export type pageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * The data needed to update a page.
     */
    data: XOR<pageUpdateInput, pageUncheckedUpdateInput>
    /**
     * Choose, which page to update.
     */
    where: pageWhereUniqueInput
  }

  /**
   * page updateMany
   */
  export type pageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pages.
     */
    data: XOR<pageUpdateManyMutationInput, pageUncheckedUpdateManyInput>
    /**
     * Filter which pages to update
     */
    where?: pageWhereInput
    /**
     * Limit how many pages to update.
     */
    limit?: number
  }

  /**
   * page upsert
   */
  export type pageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * The filter to search for the page to update in case it exists.
     */
    where: pageWhereUniqueInput
    /**
     * In case the page found by the `where` argument doesn't exist, create a new page with this data.
     */
    create: XOR<pageCreateInput, pageUncheckedCreateInput>
    /**
     * In case the page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pageUpdateInput, pageUncheckedUpdateInput>
  }

  /**
   * page delete
   */
  export type pageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
    /**
     * Filter which page to delete.
     */
    where: pageWhereUniqueInput
  }

  /**
   * page deleteMany
   */
  export type pageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pages to delete
     */
    where?: pageWhereInput
    /**
     * Limit how many pages to delete.
     */
    limit?: number
  }

  /**
   * page.pagemeta
   */
  export type page$pagemetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    where?: pagemetaWhereInput
    orderBy?: pagemetaOrderByWithRelationInput | pagemetaOrderByWithRelationInput[]
    cursor?: pagemetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagemetaScalarFieldEnum | PagemetaScalarFieldEnum[]
  }

  /**
   * page without action
   */
  export type pageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the page
     */
    select?: pageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the page
     */
    omit?: pageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pageInclude<ExtArgs> | null
  }


  /**
   * Model pagemeta
   */

  export type AggregatePagemeta = {
    _count: PagemetaCountAggregateOutputType | null
    _avg: PagemetaAvgAggregateOutputType | null
    _sum: PagemetaSumAggregateOutputType | null
    _min: PagemetaMinAggregateOutputType | null
    _max: PagemetaMaxAggregateOutputType | null
  }

  export type PagemetaAvgAggregateOutputType = {
    id: number | null
    pageId: number | null
  }

  export type PagemetaSumAggregateOutputType = {
    id: number | null
    pageId: number | null
  }

  export type PagemetaMinAggregateOutputType = {
    id: number | null
    metaKey: string | null
    value: string | null
    pageId: number | null
  }

  export type PagemetaMaxAggregateOutputType = {
    id: number | null
    metaKey: string | null
    value: string | null
    pageId: number | null
  }

  export type PagemetaCountAggregateOutputType = {
    id: number
    metaKey: number
    value: number
    pageId: number
    _all: number
  }


  export type PagemetaAvgAggregateInputType = {
    id?: true
    pageId?: true
  }

  export type PagemetaSumAggregateInputType = {
    id?: true
    pageId?: true
  }

  export type PagemetaMinAggregateInputType = {
    id?: true
    metaKey?: true
    value?: true
    pageId?: true
  }

  export type PagemetaMaxAggregateInputType = {
    id?: true
    metaKey?: true
    value?: true
    pageId?: true
  }

  export type PagemetaCountAggregateInputType = {
    id?: true
    metaKey?: true
    value?: true
    pageId?: true
    _all?: true
  }

  export type PagemetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagemeta to aggregate.
     */
    where?: pagemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagemetas to fetch.
     */
    orderBy?: pagemetaOrderByWithRelationInput | pagemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagemetas
    **/
    _count?: true | PagemetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagemetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagemetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagemetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagemetaMaxAggregateInputType
  }

  export type GetPagemetaAggregateType<T extends PagemetaAggregateArgs> = {
        [P in keyof T & keyof AggregatePagemeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagemeta[P]>
      : GetScalarType<T[P], AggregatePagemeta[P]>
  }




  export type pagemetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagemetaWhereInput
    orderBy?: pagemetaOrderByWithAggregationInput | pagemetaOrderByWithAggregationInput[]
    by: PagemetaScalarFieldEnum[] | PagemetaScalarFieldEnum
    having?: pagemetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagemetaCountAggregateInputType | true
    _avg?: PagemetaAvgAggregateInputType
    _sum?: PagemetaSumAggregateInputType
    _min?: PagemetaMinAggregateInputType
    _max?: PagemetaMaxAggregateInputType
  }

  export type PagemetaGroupByOutputType = {
    id: number
    metaKey: string
    value: string
    pageId: number
    _count: PagemetaCountAggregateOutputType | null
    _avg: PagemetaAvgAggregateOutputType | null
    _sum: PagemetaSumAggregateOutputType | null
    _min: PagemetaMinAggregateOutputType | null
    _max: PagemetaMaxAggregateOutputType | null
  }

  type GetPagemetaGroupByPayload<T extends pagemetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagemetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagemetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagemetaGroupByOutputType[P]>
            : GetScalarType<T[P], PagemetaGroupByOutputType[P]>
        }
      >
    >


  export type pagemetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaKey?: boolean
    value?: boolean
    pageId?: boolean
    page?: boolean | pageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagemeta"]>



  export type pagemetaSelectScalar = {
    id?: boolean
    metaKey?: boolean
    value?: boolean
    pageId?: boolean
  }

  export type pagemetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaKey" | "value" | "pageId", ExtArgs["result"]["pagemeta"]>
  export type pagemetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | pageDefaultArgs<ExtArgs>
  }

  export type $pagemetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagemeta"
    objects: {
      page: Prisma.$pagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      metaKey: string
      value: string
      pageId: number
    }, ExtArgs["result"]["pagemeta"]>
    composites: {}
  }

  type pagemetaGetPayload<S extends boolean | null | undefined | pagemetaDefaultArgs> = $Result.GetResult<Prisma.$pagemetaPayload, S>

  type pagemetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagemetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagemetaCountAggregateInputType | true
    }

  export interface pagemetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagemeta'], meta: { name: 'pagemeta' } }
    /**
     * Find zero or one Pagemeta that matches the filter.
     * @param {pagemetaFindUniqueArgs} args - Arguments to find a Pagemeta
     * @example
     * // Get one Pagemeta
     * const pagemeta = await prisma.pagemeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagemetaFindUniqueArgs>(args: SelectSubset<T, pagemetaFindUniqueArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagemeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagemetaFindUniqueOrThrowArgs} args - Arguments to find a Pagemeta
     * @example
     * // Get one Pagemeta
     * const pagemeta = await prisma.pagemeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagemetaFindUniqueOrThrowArgs>(args: SelectSubset<T, pagemetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagemeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaFindFirstArgs} args - Arguments to find a Pagemeta
     * @example
     * // Get one Pagemeta
     * const pagemeta = await prisma.pagemeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagemetaFindFirstArgs>(args?: SelectSubset<T, pagemetaFindFirstArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagemeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaFindFirstOrThrowArgs} args - Arguments to find a Pagemeta
     * @example
     * // Get one Pagemeta
     * const pagemeta = await prisma.pagemeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagemetaFindFirstOrThrowArgs>(args?: SelectSubset<T, pagemetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagemetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagemetas
     * const pagemetas = await prisma.pagemeta.findMany()
     * 
     * // Get first 10 Pagemetas
     * const pagemetas = await prisma.pagemeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagemetaWithIdOnly = await prisma.pagemeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pagemetaFindManyArgs>(args?: SelectSubset<T, pagemetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagemeta.
     * @param {pagemetaCreateArgs} args - Arguments to create a Pagemeta.
     * @example
     * // Create one Pagemeta
     * const Pagemeta = await prisma.pagemeta.create({
     *   data: {
     *     // ... data to create a Pagemeta
     *   }
     * })
     * 
     */
    create<T extends pagemetaCreateArgs>(args: SelectSubset<T, pagemetaCreateArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagemetas.
     * @param {pagemetaCreateManyArgs} args - Arguments to create many Pagemetas.
     * @example
     * // Create many Pagemetas
     * const pagemeta = await prisma.pagemeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagemetaCreateManyArgs>(args?: SelectSubset<T, pagemetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagemeta.
     * @param {pagemetaDeleteArgs} args - Arguments to delete one Pagemeta.
     * @example
     * // Delete one Pagemeta
     * const Pagemeta = await prisma.pagemeta.delete({
     *   where: {
     *     // ... filter to delete one Pagemeta
     *   }
     * })
     * 
     */
    delete<T extends pagemetaDeleteArgs>(args: SelectSubset<T, pagemetaDeleteArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagemeta.
     * @param {pagemetaUpdateArgs} args - Arguments to update one Pagemeta.
     * @example
     * // Update one Pagemeta
     * const pagemeta = await prisma.pagemeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagemetaUpdateArgs>(args: SelectSubset<T, pagemetaUpdateArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagemetas.
     * @param {pagemetaDeleteManyArgs} args - Arguments to filter Pagemetas to delete.
     * @example
     * // Delete a few Pagemetas
     * const { count } = await prisma.pagemeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagemetaDeleteManyArgs>(args?: SelectSubset<T, pagemetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagemetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagemetas
     * const pagemeta = await prisma.pagemeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagemetaUpdateManyArgs>(args: SelectSubset<T, pagemetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagemeta.
     * @param {pagemetaUpsertArgs} args - Arguments to update or create a Pagemeta.
     * @example
     * // Update or create a Pagemeta
     * const pagemeta = await prisma.pagemeta.upsert({
     *   create: {
     *     // ... data to create a Pagemeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagemeta we want to update
     *   }
     * })
     */
    upsert<T extends pagemetaUpsertArgs>(args: SelectSubset<T, pagemetaUpsertArgs<ExtArgs>>): Prisma__pagemetaClient<$Result.GetResult<Prisma.$pagemetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagemetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaCountArgs} args - Arguments to filter Pagemetas to count.
     * @example
     * // Count the number of Pagemetas
     * const count = await prisma.pagemeta.count({
     *   where: {
     *     // ... the filter for the Pagemetas we want to count
     *   }
     * })
    **/
    count<T extends pagemetaCountArgs>(
      args?: Subset<T, pagemetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagemetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagemeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagemetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagemetaAggregateArgs>(args: Subset<T, PagemetaAggregateArgs>): Prisma.PrismaPromise<GetPagemetaAggregateType<T>>

    /**
     * Group by Pagemeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagemetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagemetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagemetaGroupByArgs['orderBy'] }
        : { orderBy?: pagemetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagemetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagemetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagemeta model
   */
  readonly fields: pagemetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagemeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagemetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends pageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pageDefaultArgs<ExtArgs>>): Prisma__pageClient<$Result.GetResult<Prisma.$pagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pagemeta model
   */
  interface pagemetaFieldRefs {
    readonly id: FieldRef<"pagemeta", 'Int'>
    readonly metaKey: FieldRef<"pagemeta", 'String'>
    readonly value: FieldRef<"pagemeta", 'String'>
    readonly pageId: FieldRef<"pagemeta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pagemeta findUnique
   */
  export type pagemetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter, which pagemeta to fetch.
     */
    where: pagemetaWhereUniqueInput
  }

  /**
   * pagemeta findUniqueOrThrow
   */
  export type pagemetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter, which pagemeta to fetch.
     */
    where: pagemetaWhereUniqueInput
  }

  /**
   * pagemeta findFirst
   */
  export type pagemetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter, which pagemeta to fetch.
     */
    where?: pagemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagemetas to fetch.
     */
    orderBy?: pagemetaOrderByWithRelationInput | pagemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagemetas.
     */
    cursor?: pagemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagemetas.
     */
    distinct?: PagemetaScalarFieldEnum | PagemetaScalarFieldEnum[]
  }

  /**
   * pagemeta findFirstOrThrow
   */
  export type pagemetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter, which pagemeta to fetch.
     */
    where?: pagemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagemetas to fetch.
     */
    orderBy?: pagemetaOrderByWithRelationInput | pagemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagemetas.
     */
    cursor?: pagemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagemetas.
     */
    distinct?: PagemetaScalarFieldEnum | PagemetaScalarFieldEnum[]
  }

  /**
   * pagemeta findMany
   */
  export type pagemetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter, which pagemetas to fetch.
     */
    where?: pagemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagemetas to fetch.
     */
    orderBy?: pagemetaOrderByWithRelationInput | pagemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagemetas.
     */
    cursor?: pagemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagemetas.
     */
    skip?: number
    distinct?: PagemetaScalarFieldEnum | PagemetaScalarFieldEnum[]
  }

  /**
   * pagemeta create
   */
  export type pagemetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * The data needed to create a pagemeta.
     */
    data: XOR<pagemetaCreateInput, pagemetaUncheckedCreateInput>
  }

  /**
   * pagemeta createMany
   */
  export type pagemetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagemetas.
     */
    data: pagemetaCreateManyInput | pagemetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagemeta update
   */
  export type pagemetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * The data needed to update a pagemeta.
     */
    data: XOR<pagemetaUpdateInput, pagemetaUncheckedUpdateInput>
    /**
     * Choose, which pagemeta to update.
     */
    where: pagemetaWhereUniqueInput
  }

  /**
   * pagemeta updateMany
   */
  export type pagemetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagemetas.
     */
    data: XOR<pagemetaUpdateManyMutationInput, pagemetaUncheckedUpdateManyInput>
    /**
     * Filter which pagemetas to update
     */
    where?: pagemetaWhereInput
    /**
     * Limit how many pagemetas to update.
     */
    limit?: number
  }

  /**
   * pagemeta upsert
   */
  export type pagemetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * The filter to search for the pagemeta to update in case it exists.
     */
    where: pagemetaWhereUniqueInput
    /**
     * In case the pagemeta found by the `where` argument doesn't exist, create a new pagemeta with this data.
     */
    create: XOR<pagemetaCreateInput, pagemetaUncheckedCreateInput>
    /**
     * In case the pagemeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagemetaUpdateInput, pagemetaUncheckedUpdateInput>
  }

  /**
   * pagemeta delete
   */
  export type pagemetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
    /**
     * Filter which pagemeta to delete.
     */
    where: pagemetaWhereUniqueInput
  }

  /**
   * pagemeta deleteMany
   */
  export type pagemetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagemetas to delete
     */
    where?: pagemetaWhereInput
    /**
     * Limit how many pagemetas to delete.
     */
    limit?: number
  }

  /**
   * pagemeta without action
   */
  export type pagemetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagemeta
     */
    select?: pagemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagemeta
     */
    omit?: pagemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagemetaInclude<ExtArgs> | null
  }


  /**
   * Model sitemeta
   */

  export type AggregateSitemeta = {
    _count: SitemetaCountAggregateOutputType | null
    _avg: SitemetaAvgAggregateOutputType | null
    _sum: SitemetaSumAggregateOutputType | null
    _min: SitemetaMinAggregateOutputType | null
    _max: SitemetaMaxAggregateOutputType | null
  }

  export type SitemetaAvgAggregateOutputType = {
    id: number | null
  }

  export type SitemetaSumAggregateOutputType = {
    id: number | null
  }

  export type SitemetaMinAggregateOutputType = {
    id: number | null
    title: string | null
    meta_key: string | null
  }

  export type SitemetaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    meta_key: string | null
  }

  export type SitemetaCountAggregateOutputType = {
    id: number
    title: number
    meta_key: number
    _all: number
  }


  export type SitemetaAvgAggregateInputType = {
    id?: true
  }

  export type SitemetaSumAggregateInputType = {
    id?: true
  }

  export type SitemetaMinAggregateInputType = {
    id?: true
    title?: true
    meta_key?: true
  }

  export type SitemetaMaxAggregateInputType = {
    id?: true
    title?: true
    meta_key?: true
  }

  export type SitemetaCountAggregateInputType = {
    id?: true
    title?: true
    meta_key?: true
    _all?: true
  }

  export type SitemetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sitemeta to aggregate.
     */
    where?: sitemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitemetas to fetch.
     */
    orderBy?: sitemetaOrderByWithRelationInput | sitemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sitemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sitemetas
    **/
    _count?: true | SitemetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SitemetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SitemetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SitemetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SitemetaMaxAggregateInputType
  }

  export type GetSitemetaAggregateType<T extends SitemetaAggregateArgs> = {
        [P in keyof T & keyof AggregateSitemeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSitemeta[P]>
      : GetScalarType<T[P], AggregateSitemeta[P]>
  }




  export type sitemetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sitemetaWhereInput
    orderBy?: sitemetaOrderByWithAggregationInput | sitemetaOrderByWithAggregationInput[]
    by: SitemetaScalarFieldEnum[] | SitemetaScalarFieldEnum
    having?: sitemetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SitemetaCountAggregateInputType | true
    _avg?: SitemetaAvgAggregateInputType
    _sum?: SitemetaSumAggregateInputType
    _min?: SitemetaMinAggregateInputType
    _max?: SitemetaMaxAggregateInputType
  }

  export type SitemetaGroupByOutputType = {
    id: number
    title: string
    meta_key: string
    _count: SitemetaCountAggregateOutputType | null
    _avg: SitemetaAvgAggregateOutputType | null
    _sum: SitemetaSumAggregateOutputType | null
    _min: SitemetaMinAggregateOutputType | null
    _max: SitemetaMaxAggregateOutputType | null
  }

  type GetSitemetaGroupByPayload<T extends sitemetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SitemetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SitemetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SitemetaGroupByOutputType[P]>
            : GetScalarType<T[P], SitemetaGroupByOutputType[P]>
        }
      >
    >


  export type sitemetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    meta_key?: boolean
    menuitem?: boolean | sitemeta$menuitemArgs<ExtArgs>
    _count?: boolean | SitemetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sitemeta"]>



  export type sitemetaSelectScalar = {
    id?: boolean
    title?: boolean
    meta_key?: boolean
  }

  export type sitemetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "meta_key", ExtArgs["result"]["sitemeta"]>
  export type sitemetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuitem?: boolean | sitemeta$menuitemArgs<ExtArgs>
    _count?: boolean | SitemetaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sitemetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sitemeta"
    objects: {
      menuitem: Prisma.$menuitemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      meta_key: string
    }, ExtArgs["result"]["sitemeta"]>
    composites: {}
  }

  type sitemetaGetPayload<S extends boolean | null | undefined | sitemetaDefaultArgs> = $Result.GetResult<Prisma.$sitemetaPayload, S>

  type sitemetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sitemetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SitemetaCountAggregateInputType | true
    }

  export interface sitemetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sitemeta'], meta: { name: 'sitemeta' } }
    /**
     * Find zero or one Sitemeta that matches the filter.
     * @param {sitemetaFindUniqueArgs} args - Arguments to find a Sitemeta
     * @example
     * // Get one Sitemeta
     * const sitemeta = await prisma.sitemeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sitemetaFindUniqueArgs>(args: SelectSubset<T, sitemetaFindUniqueArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sitemeta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sitemetaFindUniqueOrThrowArgs} args - Arguments to find a Sitemeta
     * @example
     * // Get one Sitemeta
     * const sitemeta = await prisma.sitemeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sitemetaFindUniqueOrThrowArgs>(args: SelectSubset<T, sitemetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sitemeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaFindFirstArgs} args - Arguments to find a Sitemeta
     * @example
     * // Get one Sitemeta
     * const sitemeta = await prisma.sitemeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sitemetaFindFirstArgs>(args?: SelectSubset<T, sitemetaFindFirstArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sitemeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaFindFirstOrThrowArgs} args - Arguments to find a Sitemeta
     * @example
     * // Get one Sitemeta
     * const sitemeta = await prisma.sitemeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sitemetaFindFirstOrThrowArgs>(args?: SelectSubset<T, sitemetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sitemetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sitemetas
     * const sitemetas = await prisma.sitemeta.findMany()
     * 
     * // Get first 10 Sitemetas
     * const sitemetas = await prisma.sitemeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sitemetaWithIdOnly = await prisma.sitemeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sitemetaFindManyArgs>(args?: SelectSubset<T, sitemetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sitemeta.
     * @param {sitemetaCreateArgs} args - Arguments to create a Sitemeta.
     * @example
     * // Create one Sitemeta
     * const Sitemeta = await prisma.sitemeta.create({
     *   data: {
     *     // ... data to create a Sitemeta
     *   }
     * })
     * 
     */
    create<T extends sitemetaCreateArgs>(args: SelectSubset<T, sitemetaCreateArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sitemetas.
     * @param {sitemetaCreateManyArgs} args - Arguments to create many Sitemetas.
     * @example
     * // Create many Sitemetas
     * const sitemeta = await prisma.sitemeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sitemetaCreateManyArgs>(args?: SelectSubset<T, sitemetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sitemeta.
     * @param {sitemetaDeleteArgs} args - Arguments to delete one Sitemeta.
     * @example
     * // Delete one Sitemeta
     * const Sitemeta = await prisma.sitemeta.delete({
     *   where: {
     *     // ... filter to delete one Sitemeta
     *   }
     * })
     * 
     */
    delete<T extends sitemetaDeleteArgs>(args: SelectSubset<T, sitemetaDeleteArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sitemeta.
     * @param {sitemetaUpdateArgs} args - Arguments to update one Sitemeta.
     * @example
     * // Update one Sitemeta
     * const sitemeta = await prisma.sitemeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sitemetaUpdateArgs>(args: SelectSubset<T, sitemetaUpdateArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sitemetas.
     * @param {sitemetaDeleteManyArgs} args - Arguments to filter Sitemetas to delete.
     * @example
     * // Delete a few Sitemetas
     * const { count } = await prisma.sitemeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sitemetaDeleteManyArgs>(args?: SelectSubset<T, sitemetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sitemetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sitemetas
     * const sitemeta = await prisma.sitemeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sitemetaUpdateManyArgs>(args: SelectSubset<T, sitemetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sitemeta.
     * @param {sitemetaUpsertArgs} args - Arguments to update or create a Sitemeta.
     * @example
     * // Update or create a Sitemeta
     * const sitemeta = await prisma.sitemeta.upsert({
     *   create: {
     *     // ... data to create a Sitemeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sitemeta we want to update
     *   }
     * })
     */
    upsert<T extends sitemetaUpsertArgs>(args: SelectSubset<T, sitemetaUpsertArgs<ExtArgs>>): Prisma__sitemetaClient<$Result.GetResult<Prisma.$sitemetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sitemetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaCountArgs} args - Arguments to filter Sitemetas to count.
     * @example
     * // Count the number of Sitemetas
     * const count = await prisma.sitemeta.count({
     *   where: {
     *     // ... the filter for the Sitemetas we want to count
     *   }
     * })
    **/
    count<T extends sitemetaCountArgs>(
      args?: Subset<T, sitemetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SitemetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sitemeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SitemetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SitemetaAggregateArgs>(args: Subset<T, SitemetaAggregateArgs>): Prisma.PrismaPromise<GetSitemetaAggregateType<T>>

    /**
     * Group by Sitemeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sitemetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sitemetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sitemetaGroupByArgs['orderBy'] }
        : { orderBy?: sitemetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sitemetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSitemetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sitemeta model
   */
  readonly fields: sitemetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sitemeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sitemetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuitem<T extends sitemeta$menuitemArgs<ExtArgs> = {}>(args?: Subset<T, sitemeta$menuitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuitemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sitemeta model
   */
  interface sitemetaFieldRefs {
    readonly id: FieldRef<"sitemeta", 'Int'>
    readonly title: FieldRef<"sitemeta", 'String'>
    readonly meta_key: FieldRef<"sitemeta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sitemeta findUnique
   */
  export type sitemetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter, which sitemeta to fetch.
     */
    where: sitemetaWhereUniqueInput
  }

  /**
   * sitemeta findUniqueOrThrow
   */
  export type sitemetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter, which sitemeta to fetch.
     */
    where: sitemetaWhereUniqueInput
  }

  /**
   * sitemeta findFirst
   */
  export type sitemetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter, which sitemeta to fetch.
     */
    where?: sitemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitemetas to fetch.
     */
    orderBy?: sitemetaOrderByWithRelationInput | sitemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sitemetas.
     */
    cursor?: sitemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sitemetas.
     */
    distinct?: SitemetaScalarFieldEnum | SitemetaScalarFieldEnum[]
  }

  /**
   * sitemeta findFirstOrThrow
   */
  export type sitemetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter, which sitemeta to fetch.
     */
    where?: sitemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitemetas to fetch.
     */
    orderBy?: sitemetaOrderByWithRelationInput | sitemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sitemetas.
     */
    cursor?: sitemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitemetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sitemetas.
     */
    distinct?: SitemetaScalarFieldEnum | SitemetaScalarFieldEnum[]
  }

  /**
   * sitemeta findMany
   */
  export type sitemetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter, which sitemetas to fetch.
     */
    where?: sitemetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sitemetas to fetch.
     */
    orderBy?: sitemetaOrderByWithRelationInput | sitemetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sitemetas.
     */
    cursor?: sitemetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sitemetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sitemetas.
     */
    skip?: number
    distinct?: SitemetaScalarFieldEnum | SitemetaScalarFieldEnum[]
  }

  /**
   * sitemeta create
   */
  export type sitemetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * The data needed to create a sitemeta.
     */
    data: XOR<sitemetaCreateInput, sitemetaUncheckedCreateInput>
  }

  /**
   * sitemeta createMany
   */
  export type sitemetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sitemetas.
     */
    data: sitemetaCreateManyInput | sitemetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sitemeta update
   */
  export type sitemetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * The data needed to update a sitemeta.
     */
    data: XOR<sitemetaUpdateInput, sitemetaUncheckedUpdateInput>
    /**
     * Choose, which sitemeta to update.
     */
    where: sitemetaWhereUniqueInput
  }

  /**
   * sitemeta updateMany
   */
  export type sitemetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sitemetas.
     */
    data: XOR<sitemetaUpdateManyMutationInput, sitemetaUncheckedUpdateManyInput>
    /**
     * Filter which sitemetas to update
     */
    where?: sitemetaWhereInput
    /**
     * Limit how many sitemetas to update.
     */
    limit?: number
  }

  /**
   * sitemeta upsert
   */
  export type sitemetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * The filter to search for the sitemeta to update in case it exists.
     */
    where: sitemetaWhereUniqueInput
    /**
     * In case the sitemeta found by the `where` argument doesn't exist, create a new sitemeta with this data.
     */
    create: XOR<sitemetaCreateInput, sitemetaUncheckedCreateInput>
    /**
     * In case the sitemeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sitemetaUpdateInput, sitemetaUncheckedUpdateInput>
  }

  /**
   * sitemeta delete
   */
  export type sitemetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
    /**
     * Filter which sitemeta to delete.
     */
    where: sitemetaWhereUniqueInput
  }

  /**
   * sitemeta deleteMany
   */
  export type sitemetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sitemetas to delete
     */
    where?: sitemetaWhereInput
    /**
     * Limit how many sitemetas to delete.
     */
    limit?: number
  }

  /**
   * sitemeta.menuitem
   */
  export type sitemeta$menuitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menuitem
     */
    select?: menuitemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menuitem
     */
    omit?: menuitemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuitemInclude<ExtArgs> | null
    where?: menuitemWhereInput
    orderBy?: menuitemOrderByWithRelationInput | menuitemOrderByWithRelationInput[]
    cursor?: menuitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * sitemeta without action
   */
  export type sitemetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sitemeta
     */
    select?: sitemetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sitemeta
     */
    omit?: sitemetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sitemetaInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    fName: string | null
    lName: string | null
    password: string | null
    otp: string | null
    role: $Enums.user_role | null
    created: Date | null
    update: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fName: string | null
    lName: string | null
    password: string | null
    otp: string | null
    role: $Enums.user_role | null
    created: Date | null
    update: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fName: number
    lName: number
    password: number
    otp: number
    role: number
    created: number
    update: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fName?: true
    lName?: true
    password?: true
    otp?: true
    role?: true
    created?: true
    update?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fName?: true
    lName?: true
    password?: true
    otp?: true
    role?: true
    created?: true
    update?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fName?: true
    lName?: true
    password?: true
    otp?: true
    role?: true
    created?: true
    update?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    fName: string
    lName: string
    password: string
    otp: string
    role: $Enums.user_role
    created: Date
    update: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fName?: boolean
    lName?: boolean
    password?: boolean
    otp?: boolean
    role?: boolean
    created?: boolean
    update?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    fName?: boolean
    lName?: boolean
    password?: boolean
    otp?: boolean
    role?: boolean
    created?: boolean
    update?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fName" | "lName" | "password" | "otp" | "role" | "created" | "update", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fName: string
      lName: string
      password: string
      otp: string
      role: $Enums.user_role
      created: Date
      update: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly fName: FieldRef<"user", 'String'>
    readonly lName: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly otp: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
    readonly created: FieldRef<"user", 'DateTime'>
    readonly update: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MenuitemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    order: 'order',
    siteMetaId: 'siteMetaId'
  };

  export type MenuitemScalarFieldEnum = (typeof MenuitemScalarFieldEnum)[keyof typeof MenuitemScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    metaKey: 'metaKey',
    title: 'title',
    subTitle: 'subTitle',
    image: 'image'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const PagemetaScalarFieldEnum: {
    id: 'id',
    metaKey: 'metaKey',
    value: 'value',
    pageId: 'pageId'
  };

  export type PagemetaScalarFieldEnum = (typeof PagemetaScalarFieldEnum)[keyof typeof PagemetaScalarFieldEnum]


  export const SitemetaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    meta_key: 'meta_key'
  };

  export type SitemetaScalarFieldEnum = (typeof SitemetaScalarFieldEnum)[keyof typeof SitemetaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fName: 'fName',
    lName: 'lName',
    password: 'password',
    otp: 'otp',
    role: 'role',
    created: 'created',
    update: 'update'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const menuitemOrderByRelevanceFieldEnum: {
    name: 'name',
    link: 'link'
  };

  export type menuitemOrderByRelevanceFieldEnum = (typeof menuitemOrderByRelevanceFieldEnum)[keyof typeof menuitemOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const pageOrderByRelevanceFieldEnum: {
    metaKey: 'metaKey',
    title: 'title',
    subTitle: 'subTitle',
    image: 'image'
  };

  export type pageOrderByRelevanceFieldEnum = (typeof pageOrderByRelevanceFieldEnum)[keyof typeof pageOrderByRelevanceFieldEnum]


  export const pagemetaOrderByRelevanceFieldEnum: {
    metaKey: 'metaKey',
    value: 'value'
  };

  export type pagemetaOrderByRelevanceFieldEnum = (typeof pagemetaOrderByRelevanceFieldEnum)[keyof typeof pagemetaOrderByRelevanceFieldEnum]


  export const sitemetaOrderByRelevanceFieldEnum: {
    title: 'title',
    meta_key: 'meta_key'
  };

  export type sitemetaOrderByRelevanceFieldEnum = (typeof sitemetaOrderByRelevanceFieldEnum)[keyof typeof sitemetaOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    email: 'email',
    fName: 'fName',
    lName: 'lName',
    password: 'password',
    otp: 'otp'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type menuitemWhereInput = {
    AND?: menuitemWhereInput | menuitemWhereInput[]
    OR?: menuitemWhereInput[]
    NOT?: menuitemWhereInput | menuitemWhereInput[]
    id?: IntFilter<"menuitem"> | number
    name?: StringFilter<"menuitem"> | string
    link?: StringFilter<"menuitem"> | string
    order?: IntFilter<"menuitem"> | number
    siteMetaId?: IntFilter<"menuitem"> | number
    sitemeta?: XOR<SitemetaScalarRelationFilter, sitemetaWhereInput>
  }

  export type menuitemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
    sitemeta?: sitemetaOrderByWithRelationInput
    _relevance?: menuitemOrderByRelevanceInput
  }

  export type menuitemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menuitemWhereInput | menuitemWhereInput[]
    OR?: menuitemWhereInput[]
    NOT?: menuitemWhereInput | menuitemWhereInput[]
    name?: StringFilter<"menuitem"> | string
    link?: StringFilter<"menuitem"> | string
    order?: IntFilter<"menuitem"> | number
    siteMetaId?: IntFilter<"menuitem"> | number
    sitemeta?: XOR<SitemetaScalarRelationFilter, sitemetaWhereInput>
  }, "id">

  export type menuitemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
    _count?: menuitemCountOrderByAggregateInput
    _avg?: menuitemAvgOrderByAggregateInput
    _max?: menuitemMaxOrderByAggregateInput
    _min?: menuitemMinOrderByAggregateInput
    _sum?: menuitemSumOrderByAggregateInput
  }

  export type menuitemScalarWhereWithAggregatesInput = {
    AND?: menuitemScalarWhereWithAggregatesInput | menuitemScalarWhereWithAggregatesInput[]
    OR?: menuitemScalarWhereWithAggregatesInput[]
    NOT?: menuitemScalarWhereWithAggregatesInput | menuitemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menuitem"> | number
    name?: StringWithAggregatesFilter<"menuitem"> | string
    link?: StringWithAggregatesFilter<"menuitem"> | string
    order?: IntWithAggregatesFilter<"menuitem"> | number
    siteMetaId?: IntWithAggregatesFilter<"menuitem"> | number
  }

  export type pageWhereInput = {
    AND?: pageWhereInput | pageWhereInput[]
    OR?: pageWhereInput[]
    NOT?: pageWhereInput | pageWhereInput[]
    id?: IntFilter<"page"> | number
    metaKey?: StringFilter<"page"> | string
    title?: StringFilter<"page"> | string
    subTitle?: StringNullableFilter<"page"> | string | null
    image?: StringNullableFilter<"page"> | string | null
    pagemeta?: PagemetaListRelationFilter
  }

  export type pageOrderByWithRelationInput = {
    id?: SortOrder
    metaKey?: SortOrder
    title?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    pagemeta?: pagemetaOrderByRelationAggregateInput
    _relevance?: pageOrderByRelevanceInput
  }

  export type pageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pageWhereInput | pageWhereInput[]
    OR?: pageWhereInput[]
    NOT?: pageWhereInput | pageWhereInput[]
    metaKey?: StringFilter<"page"> | string
    title?: StringFilter<"page"> | string
    subTitle?: StringNullableFilter<"page"> | string | null
    image?: StringNullableFilter<"page"> | string | null
    pagemeta?: PagemetaListRelationFilter
  }, "id">

  export type pageOrderByWithAggregationInput = {
    id?: SortOrder
    metaKey?: SortOrder
    title?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: pageCountOrderByAggregateInput
    _avg?: pageAvgOrderByAggregateInput
    _max?: pageMaxOrderByAggregateInput
    _min?: pageMinOrderByAggregateInput
    _sum?: pageSumOrderByAggregateInput
  }

  export type pageScalarWhereWithAggregatesInput = {
    AND?: pageScalarWhereWithAggregatesInput | pageScalarWhereWithAggregatesInput[]
    OR?: pageScalarWhereWithAggregatesInput[]
    NOT?: pageScalarWhereWithAggregatesInput | pageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"page"> | number
    metaKey?: StringWithAggregatesFilter<"page"> | string
    title?: StringWithAggregatesFilter<"page"> | string
    subTitle?: StringNullableWithAggregatesFilter<"page"> | string | null
    image?: StringNullableWithAggregatesFilter<"page"> | string | null
  }

  export type pagemetaWhereInput = {
    AND?: pagemetaWhereInput | pagemetaWhereInput[]
    OR?: pagemetaWhereInput[]
    NOT?: pagemetaWhereInput | pagemetaWhereInput[]
    id?: IntFilter<"pagemeta"> | number
    metaKey?: StringFilter<"pagemeta"> | string
    value?: StringFilter<"pagemeta"> | string
    pageId?: IntFilter<"pagemeta"> | number
    page?: XOR<PageScalarRelationFilter, pageWhereInput>
  }

  export type pagemetaOrderByWithRelationInput = {
    id?: SortOrder
    metaKey?: SortOrder
    value?: SortOrder
    pageId?: SortOrder
    page?: pageOrderByWithRelationInput
    _relevance?: pagemetaOrderByRelevanceInput
  }

  export type pagemetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    metaKey_pageId?: pagemetaMetaKeyPageIdCompoundUniqueInput
    AND?: pagemetaWhereInput | pagemetaWhereInput[]
    OR?: pagemetaWhereInput[]
    NOT?: pagemetaWhereInput | pagemetaWhereInput[]
    metaKey?: StringFilter<"pagemeta"> | string
    value?: StringFilter<"pagemeta"> | string
    pageId?: IntFilter<"pagemeta"> | number
    page?: XOR<PageScalarRelationFilter, pageWhereInput>
  }, "id" | "metaKey_pageId">

  export type pagemetaOrderByWithAggregationInput = {
    id?: SortOrder
    metaKey?: SortOrder
    value?: SortOrder
    pageId?: SortOrder
    _count?: pagemetaCountOrderByAggregateInput
    _avg?: pagemetaAvgOrderByAggregateInput
    _max?: pagemetaMaxOrderByAggregateInput
    _min?: pagemetaMinOrderByAggregateInput
    _sum?: pagemetaSumOrderByAggregateInput
  }

  export type pagemetaScalarWhereWithAggregatesInput = {
    AND?: pagemetaScalarWhereWithAggregatesInput | pagemetaScalarWhereWithAggregatesInput[]
    OR?: pagemetaScalarWhereWithAggregatesInput[]
    NOT?: pagemetaScalarWhereWithAggregatesInput | pagemetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pagemeta"> | number
    metaKey?: StringWithAggregatesFilter<"pagemeta"> | string
    value?: StringWithAggregatesFilter<"pagemeta"> | string
    pageId?: IntWithAggregatesFilter<"pagemeta"> | number
  }

  export type sitemetaWhereInput = {
    AND?: sitemetaWhereInput | sitemetaWhereInput[]
    OR?: sitemetaWhereInput[]
    NOT?: sitemetaWhereInput | sitemetaWhereInput[]
    id?: IntFilter<"sitemeta"> | number
    title?: StringFilter<"sitemeta"> | string
    meta_key?: StringFilter<"sitemeta"> | string
    menuitem?: MenuitemListRelationFilter
  }

  export type sitemetaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_key?: SortOrder
    menuitem?: menuitemOrderByRelationAggregateInput
    _relevance?: sitemetaOrderByRelevanceInput
  }

  export type sitemetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    meta_key?: string
    AND?: sitemetaWhereInput | sitemetaWhereInput[]
    OR?: sitemetaWhereInput[]
    NOT?: sitemetaWhereInput | sitemetaWhereInput[]
    title?: StringFilter<"sitemeta"> | string
    menuitem?: MenuitemListRelationFilter
  }, "id" | "meta_key">

  export type sitemetaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    meta_key?: SortOrder
    _count?: sitemetaCountOrderByAggregateInput
    _avg?: sitemetaAvgOrderByAggregateInput
    _max?: sitemetaMaxOrderByAggregateInput
    _min?: sitemetaMinOrderByAggregateInput
    _sum?: sitemetaSumOrderByAggregateInput
  }

  export type sitemetaScalarWhereWithAggregatesInput = {
    AND?: sitemetaScalarWhereWithAggregatesInput | sitemetaScalarWhereWithAggregatesInput[]
    OR?: sitemetaScalarWhereWithAggregatesInput[]
    NOT?: sitemetaScalarWhereWithAggregatesInput | sitemetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sitemeta"> | number
    title?: StringWithAggregatesFilter<"sitemeta"> | string
    meta_key?: StringWithAggregatesFilter<"sitemeta"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    fName?: StringFilter<"user"> | string
    lName?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    otp?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    created?: DateTimeFilter<"user"> | Date | string
    update?: DateTimeFilter<"user"> | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    created?: SortOrder
    update?: SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fName?: StringFilter<"user"> | string
    lName?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    otp?: StringFilter<"user"> | string
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    created?: DateTimeFilter<"user"> | Date | string
    update?: DateTimeFilter<"user"> | Date | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    created?: SortOrder
    update?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    fName?: StringWithAggregatesFilter<"user"> | string
    lName?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    otp?: StringWithAggregatesFilter<"user"> | string
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
    created?: DateTimeWithAggregatesFilter<"user"> | Date | string
    update?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type menuitemCreateInput = {
    name: string
    link: string
    order: number
    sitemeta: sitemetaCreateNestedOneWithoutMenuitemInput
  }

  export type menuitemUncheckedCreateInput = {
    id?: number
    name: string
    link: string
    order: number
    siteMetaId: number
  }

  export type menuitemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sitemeta?: sitemetaUpdateOneRequiredWithoutMenuitemNestedInput
  }

  export type menuitemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    siteMetaId?: IntFieldUpdateOperationsInput | number
  }

  export type menuitemCreateManyInput = {
    id?: number
    name: string
    link: string
    order: number
    siteMetaId: number
  }

  export type menuitemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type menuitemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    siteMetaId?: IntFieldUpdateOperationsInput | number
  }

  export type pageCreateInput = {
    metaKey: string
    title: string
    subTitle?: string | null
    image?: string | null
    pagemeta?: pagemetaCreateNestedManyWithoutPageInput
  }

  export type pageUncheckedCreateInput = {
    id?: number
    metaKey: string
    title: string
    subTitle?: string | null
    image?: string | null
    pagemeta?: pagemetaUncheckedCreateNestedManyWithoutPageInput
  }

  export type pageUpdateInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    pagemeta?: pagemetaUpdateManyWithoutPageNestedInput
  }

  export type pageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    pagemeta?: pagemetaUncheckedUpdateManyWithoutPageNestedInput
  }

  export type pageCreateManyInput = {
    id?: number
    metaKey: string
    title: string
    subTitle?: string | null
    image?: string | null
  }

  export type pageUpdateManyMutationInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagemetaCreateInput = {
    metaKey: string
    value: string
    page: pageCreateNestedOneWithoutPagemetaInput
  }

  export type pagemetaUncheckedCreateInput = {
    id?: number
    metaKey: string
    value: string
    pageId: number
  }

  export type pagemetaUpdateInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    page?: pageUpdateOneRequiredWithoutPagemetaNestedInput
  }

  export type pagemetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    pageId?: IntFieldUpdateOperationsInput | number
  }

  export type pagemetaCreateManyInput = {
    id?: number
    metaKey: string
    value: string
    pageId: number
  }

  export type pagemetaUpdateManyMutationInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type pagemetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    pageId?: IntFieldUpdateOperationsInput | number
  }

  export type sitemetaCreateInput = {
    title: string
    meta_key: string
    menuitem?: menuitemCreateNestedManyWithoutSitemetaInput
  }

  export type sitemetaUncheckedCreateInput = {
    id?: number
    title: string
    meta_key: string
    menuitem?: menuitemUncheckedCreateNestedManyWithoutSitemetaInput
  }

  export type sitemetaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
    menuitem?: menuitemUpdateManyWithoutSitemetaNestedInput
  }

  export type sitemetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
    menuitem?: menuitemUncheckedUpdateManyWithoutSitemetaNestedInput
  }

  export type sitemetaCreateManyInput = {
    id?: number
    title: string
    meta_key: string
  }

  export type sitemetaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
  }

  export type sitemetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    email: string
    fName: string
    lName: string
    password: string
    otp: string
    role?: $Enums.user_role
    created?: Date | string
    update: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    fName: string
    lName: string
    password: string
    otp: string
    role?: $Enums.user_role
    created?: Date | string
    update: Date | string
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    fName: string
    lName: string
    password: string
    otp: string
    role?: $Enums.user_role
    created?: Date | string
    update: Date | string
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fName?: StringFieldUpdateOperationsInput | string
    lName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SitemetaScalarRelationFilter = {
    is?: sitemetaWhereInput
    isNot?: sitemetaWhereInput
  }

  export type menuitemOrderByRelevanceInput = {
    fields: menuitemOrderByRelevanceFieldEnum | menuitemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type menuitemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
  }

  export type menuitemAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
  }

  export type menuitemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
  }

  export type menuitemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
  }

  export type menuitemSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    siteMetaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PagemetaListRelationFilter = {
    every?: pagemetaWhereInput
    some?: pagemetaWhereInput
    none?: pagemetaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pagemetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pageOrderByRelevanceInput = {
    fields: pageOrderByRelevanceFieldEnum | pageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pageCountOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    title?: SortOrder
    subTitle?: SortOrder
    image?: SortOrder
  }

  export type pageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pageMaxOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    title?: SortOrder
    subTitle?: SortOrder
    image?: SortOrder
  }

  export type pageMinOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    title?: SortOrder
    subTitle?: SortOrder
    image?: SortOrder
  }

  export type pageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PageScalarRelationFilter = {
    is?: pageWhereInput
    isNot?: pageWhereInput
  }

  export type pagemetaOrderByRelevanceInput = {
    fields: pagemetaOrderByRelevanceFieldEnum | pagemetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pagemetaMetaKeyPageIdCompoundUniqueInput = {
    metaKey: string
    pageId: number
  }

  export type pagemetaCountOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    value?: SortOrder
    pageId?: SortOrder
  }

  export type pagemetaAvgOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
  }

  export type pagemetaMaxOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    value?: SortOrder
    pageId?: SortOrder
  }

  export type pagemetaMinOrderByAggregateInput = {
    id?: SortOrder
    metaKey?: SortOrder
    value?: SortOrder
    pageId?: SortOrder
  }

  export type pagemetaSumOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
  }

  export type MenuitemListRelationFilter = {
    every?: menuitemWhereInput
    some?: menuitemWhereInput
    none?: menuitemWhereInput
  }

  export type menuitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sitemetaOrderByRelevanceInput = {
    fields: sitemetaOrderByRelevanceFieldEnum | sitemetaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sitemetaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_key?: SortOrder
  }

  export type sitemetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sitemetaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_key?: SortOrder
  }

  export type sitemetaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    meta_key?: SortOrder
  }

  export type sitemetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    created?: SortOrder
    update?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    created?: SortOrder
    update?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fName?: SortOrder
    lName?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    role?: SortOrder
    created?: SortOrder
    update?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sitemetaCreateNestedOneWithoutMenuitemInput = {
    create?: XOR<sitemetaCreateWithoutMenuitemInput, sitemetaUncheckedCreateWithoutMenuitemInput>
    connectOrCreate?: sitemetaCreateOrConnectWithoutMenuitemInput
    connect?: sitemetaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sitemetaUpdateOneRequiredWithoutMenuitemNestedInput = {
    create?: XOR<sitemetaCreateWithoutMenuitemInput, sitemetaUncheckedCreateWithoutMenuitemInput>
    connectOrCreate?: sitemetaCreateOrConnectWithoutMenuitemInput
    upsert?: sitemetaUpsertWithoutMenuitemInput
    connect?: sitemetaWhereUniqueInput
    update?: XOR<XOR<sitemetaUpdateToOneWithWhereWithoutMenuitemInput, sitemetaUpdateWithoutMenuitemInput>, sitemetaUncheckedUpdateWithoutMenuitemInput>
  }

  export type pagemetaCreateNestedManyWithoutPageInput = {
    create?: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput> | pagemetaCreateWithoutPageInput[] | pagemetaUncheckedCreateWithoutPageInput[]
    connectOrCreate?: pagemetaCreateOrConnectWithoutPageInput | pagemetaCreateOrConnectWithoutPageInput[]
    createMany?: pagemetaCreateManyPageInputEnvelope
    connect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
  }

  export type pagemetaUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput> | pagemetaCreateWithoutPageInput[] | pagemetaUncheckedCreateWithoutPageInput[]
    connectOrCreate?: pagemetaCreateOrConnectWithoutPageInput | pagemetaCreateOrConnectWithoutPageInput[]
    createMany?: pagemetaCreateManyPageInputEnvelope
    connect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type pagemetaUpdateManyWithoutPageNestedInput = {
    create?: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput> | pagemetaCreateWithoutPageInput[] | pagemetaUncheckedCreateWithoutPageInput[]
    connectOrCreate?: pagemetaCreateOrConnectWithoutPageInput | pagemetaCreateOrConnectWithoutPageInput[]
    upsert?: pagemetaUpsertWithWhereUniqueWithoutPageInput | pagemetaUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: pagemetaCreateManyPageInputEnvelope
    set?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    disconnect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    delete?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    connect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    update?: pagemetaUpdateWithWhereUniqueWithoutPageInput | pagemetaUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: pagemetaUpdateManyWithWhereWithoutPageInput | pagemetaUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: pagemetaScalarWhereInput | pagemetaScalarWhereInput[]
  }

  export type pagemetaUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput> | pagemetaCreateWithoutPageInput[] | pagemetaUncheckedCreateWithoutPageInput[]
    connectOrCreate?: pagemetaCreateOrConnectWithoutPageInput | pagemetaCreateOrConnectWithoutPageInput[]
    upsert?: pagemetaUpsertWithWhereUniqueWithoutPageInput | pagemetaUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: pagemetaCreateManyPageInputEnvelope
    set?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    disconnect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    delete?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    connect?: pagemetaWhereUniqueInput | pagemetaWhereUniqueInput[]
    update?: pagemetaUpdateWithWhereUniqueWithoutPageInput | pagemetaUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: pagemetaUpdateManyWithWhereWithoutPageInput | pagemetaUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: pagemetaScalarWhereInput | pagemetaScalarWhereInput[]
  }

  export type pageCreateNestedOneWithoutPagemetaInput = {
    create?: XOR<pageCreateWithoutPagemetaInput, pageUncheckedCreateWithoutPagemetaInput>
    connectOrCreate?: pageCreateOrConnectWithoutPagemetaInput
    connect?: pageWhereUniqueInput
  }

  export type pageUpdateOneRequiredWithoutPagemetaNestedInput = {
    create?: XOR<pageCreateWithoutPagemetaInput, pageUncheckedCreateWithoutPagemetaInput>
    connectOrCreate?: pageCreateOrConnectWithoutPagemetaInput
    upsert?: pageUpsertWithoutPagemetaInput
    connect?: pageWhereUniqueInput
    update?: XOR<XOR<pageUpdateToOneWithWhereWithoutPagemetaInput, pageUpdateWithoutPagemetaInput>, pageUncheckedUpdateWithoutPagemetaInput>
  }

  export type menuitemCreateNestedManyWithoutSitemetaInput = {
    create?: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput> | menuitemCreateWithoutSitemetaInput[] | menuitemUncheckedCreateWithoutSitemetaInput[]
    connectOrCreate?: menuitemCreateOrConnectWithoutSitemetaInput | menuitemCreateOrConnectWithoutSitemetaInput[]
    createMany?: menuitemCreateManySitemetaInputEnvelope
    connect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
  }

  export type menuitemUncheckedCreateNestedManyWithoutSitemetaInput = {
    create?: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput> | menuitemCreateWithoutSitemetaInput[] | menuitemUncheckedCreateWithoutSitemetaInput[]
    connectOrCreate?: menuitemCreateOrConnectWithoutSitemetaInput | menuitemCreateOrConnectWithoutSitemetaInput[]
    createMany?: menuitemCreateManySitemetaInputEnvelope
    connect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
  }

  export type menuitemUpdateManyWithoutSitemetaNestedInput = {
    create?: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput> | menuitemCreateWithoutSitemetaInput[] | menuitemUncheckedCreateWithoutSitemetaInput[]
    connectOrCreate?: menuitemCreateOrConnectWithoutSitemetaInput | menuitemCreateOrConnectWithoutSitemetaInput[]
    upsert?: menuitemUpsertWithWhereUniqueWithoutSitemetaInput | menuitemUpsertWithWhereUniqueWithoutSitemetaInput[]
    createMany?: menuitemCreateManySitemetaInputEnvelope
    set?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    disconnect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    delete?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    connect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    update?: menuitemUpdateWithWhereUniqueWithoutSitemetaInput | menuitemUpdateWithWhereUniqueWithoutSitemetaInput[]
    updateMany?: menuitemUpdateManyWithWhereWithoutSitemetaInput | menuitemUpdateManyWithWhereWithoutSitemetaInput[]
    deleteMany?: menuitemScalarWhereInput | menuitemScalarWhereInput[]
  }

  export type menuitemUncheckedUpdateManyWithoutSitemetaNestedInput = {
    create?: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput> | menuitemCreateWithoutSitemetaInput[] | menuitemUncheckedCreateWithoutSitemetaInput[]
    connectOrCreate?: menuitemCreateOrConnectWithoutSitemetaInput | menuitemCreateOrConnectWithoutSitemetaInput[]
    upsert?: menuitemUpsertWithWhereUniqueWithoutSitemetaInput | menuitemUpsertWithWhereUniqueWithoutSitemetaInput[]
    createMany?: menuitemCreateManySitemetaInputEnvelope
    set?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    disconnect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    delete?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    connect?: menuitemWhereUniqueInput | menuitemWhereUniqueInput[]
    update?: menuitemUpdateWithWhereUniqueWithoutSitemetaInput | menuitemUpdateWithWhereUniqueWithoutSitemetaInput[]
    updateMany?: menuitemUpdateManyWithWhereWithoutSitemetaInput | menuitemUpdateManyWithWhereWithoutSitemetaInput[]
    deleteMany?: menuitemScalarWhereInput | menuitemScalarWhereInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type sitemetaCreateWithoutMenuitemInput = {
    title: string
    meta_key: string
  }

  export type sitemetaUncheckedCreateWithoutMenuitemInput = {
    id?: number
    title: string
    meta_key: string
  }

  export type sitemetaCreateOrConnectWithoutMenuitemInput = {
    where: sitemetaWhereUniqueInput
    create: XOR<sitemetaCreateWithoutMenuitemInput, sitemetaUncheckedCreateWithoutMenuitemInput>
  }

  export type sitemetaUpsertWithoutMenuitemInput = {
    update: XOR<sitemetaUpdateWithoutMenuitemInput, sitemetaUncheckedUpdateWithoutMenuitemInput>
    create: XOR<sitemetaCreateWithoutMenuitemInput, sitemetaUncheckedCreateWithoutMenuitemInput>
    where?: sitemetaWhereInput
  }

  export type sitemetaUpdateToOneWithWhereWithoutMenuitemInput = {
    where?: sitemetaWhereInput
    data: XOR<sitemetaUpdateWithoutMenuitemInput, sitemetaUncheckedUpdateWithoutMenuitemInput>
  }

  export type sitemetaUpdateWithoutMenuitemInput = {
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
  }

  export type sitemetaUncheckedUpdateWithoutMenuitemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    meta_key?: StringFieldUpdateOperationsInput | string
  }

  export type pagemetaCreateWithoutPageInput = {
    metaKey: string
    value: string
  }

  export type pagemetaUncheckedCreateWithoutPageInput = {
    id?: number
    metaKey: string
    value: string
  }

  export type pagemetaCreateOrConnectWithoutPageInput = {
    where: pagemetaWhereUniqueInput
    create: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput>
  }

  export type pagemetaCreateManyPageInputEnvelope = {
    data: pagemetaCreateManyPageInput | pagemetaCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type pagemetaUpsertWithWhereUniqueWithoutPageInput = {
    where: pagemetaWhereUniqueInput
    update: XOR<pagemetaUpdateWithoutPageInput, pagemetaUncheckedUpdateWithoutPageInput>
    create: XOR<pagemetaCreateWithoutPageInput, pagemetaUncheckedCreateWithoutPageInput>
  }

  export type pagemetaUpdateWithWhereUniqueWithoutPageInput = {
    where: pagemetaWhereUniqueInput
    data: XOR<pagemetaUpdateWithoutPageInput, pagemetaUncheckedUpdateWithoutPageInput>
  }

  export type pagemetaUpdateManyWithWhereWithoutPageInput = {
    where: pagemetaScalarWhereInput
    data: XOR<pagemetaUpdateManyMutationInput, pagemetaUncheckedUpdateManyWithoutPageInput>
  }

  export type pagemetaScalarWhereInput = {
    AND?: pagemetaScalarWhereInput | pagemetaScalarWhereInput[]
    OR?: pagemetaScalarWhereInput[]
    NOT?: pagemetaScalarWhereInput | pagemetaScalarWhereInput[]
    id?: IntFilter<"pagemeta"> | number
    metaKey?: StringFilter<"pagemeta"> | string
    value?: StringFilter<"pagemeta"> | string
    pageId?: IntFilter<"pagemeta"> | number
  }

  export type pageCreateWithoutPagemetaInput = {
    metaKey: string
    title: string
    subTitle?: string | null
    image?: string | null
  }

  export type pageUncheckedCreateWithoutPagemetaInput = {
    id?: number
    metaKey: string
    title: string
    subTitle?: string | null
    image?: string | null
  }

  export type pageCreateOrConnectWithoutPagemetaInput = {
    where: pageWhereUniqueInput
    create: XOR<pageCreateWithoutPagemetaInput, pageUncheckedCreateWithoutPagemetaInput>
  }

  export type pageUpsertWithoutPagemetaInput = {
    update: XOR<pageUpdateWithoutPagemetaInput, pageUncheckedUpdateWithoutPagemetaInput>
    create: XOR<pageCreateWithoutPagemetaInput, pageUncheckedCreateWithoutPagemetaInput>
    where?: pageWhereInput
  }

  export type pageUpdateToOneWithWhereWithoutPagemetaInput = {
    where?: pageWhereInput
    data: XOR<pageUpdateWithoutPagemetaInput, pageUncheckedUpdateWithoutPagemetaInput>
  }

  export type pageUpdateWithoutPagemetaInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pageUncheckedUpdateWithoutPagemetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menuitemCreateWithoutSitemetaInput = {
    name: string
    link: string
    order: number
  }

  export type menuitemUncheckedCreateWithoutSitemetaInput = {
    id?: number
    name: string
    link: string
    order: number
  }

  export type menuitemCreateOrConnectWithoutSitemetaInput = {
    where: menuitemWhereUniqueInput
    create: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput>
  }

  export type menuitemCreateManySitemetaInputEnvelope = {
    data: menuitemCreateManySitemetaInput | menuitemCreateManySitemetaInput[]
    skipDuplicates?: boolean
  }

  export type menuitemUpsertWithWhereUniqueWithoutSitemetaInput = {
    where: menuitemWhereUniqueInput
    update: XOR<menuitemUpdateWithoutSitemetaInput, menuitemUncheckedUpdateWithoutSitemetaInput>
    create: XOR<menuitemCreateWithoutSitemetaInput, menuitemUncheckedCreateWithoutSitemetaInput>
  }

  export type menuitemUpdateWithWhereUniqueWithoutSitemetaInput = {
    where: menuitemWhereUniqueInput
    data: XOR<menuitemUpdateWithoutSitemetaInput, menuitemUncheckedUpdateWithoutSitemetaInput>
  }

  export type menuitemUpdateManyWithWhereWithoutSitemetaInput = {
    where: menuitemScalarWhereInput
    data: XOR<menuitemUpdateManyMutationInput, menuitemUncheckedUpdateManyWithoutSitemetaInput>
  }

  export type menuitemScalarWhereInput = {
    AND?: menuitemScalarWhereInput | menuitemScalarWhereInput[]
    OR?: menuitemScalarWhereInput[]
    NOT?: menuitemScalarWhereInput | menuitemScalarWhereInput[]
    id?: IntFilter<"menuitem"> | number
    name?: StringFilter<"menuitem"> | string
    link?: StringFilter<"menuitem"> | string
    order?: IntFilter<"menuitem"> | number
    siteMetaId?: IntFilter<"menuitem"> | number
  }

  export type pagemetaCreateManyPageInput = {
    id?: number
    metaKey: string
    value: string
  }

  export type pagemetaUpdateWithoutPageInput = {
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type pagemetaUncheckedUpdateWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type pagemetaUncheckedUpdateManyWithoutPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    metaKey?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type menuitemCreateManySitemetaInput = {
    id?: number
    name: string
    link: string
    order: number
  }

  export type menuitemUpdateWithoutSitemetaInput = {
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type menuitemUncheckedUpdateWithoutSitemetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type menuitemUncheckedUpdateManyWithoutSitemetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}