
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
 * Model author
 * 
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model author_mm_book
 * 
 */
export type author_mm_book = $Result.DefaultSelection<Prisma.$author_mm_bookPayload>
/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model order_table
 * 
 */
export type order_table = $Result.DefaultSelection<Prisma.$order_tablePayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
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
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
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
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author_mm_book`: Exposes CRUD operations for the **author_mm_book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Author_mm_books
    * const author_mm_books = await prisma.author_mm_book.findMany()
    * ```
    */
  get author_mm_book(): Prisma.author_mm_bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_table`: Exposes CRUD operations for the **order_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_tables
    * const order_tables = await prisma.order_table.findMany()
    * ```
    */
  get order_table(): Prisma.order_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    author: 'author',
    author_mm_book: 'author_mm_book',
    book: 'book',
    order_table: 'order_table',
    student: 'student'
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
      modelProps: "author" | "author_mm_book" | "book" | "order_table" | "student"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.authorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      author_mm_book: {
        payload: Prisma.$author_mm_bookPayload<ExtArgs>
        fields: Prisma.author_mm_bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.author_mm_bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.author_mm_bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          findFirst: {
            args: Prisma.author_mm_bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.author_mm_bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          findMany: {
            args: Prisma.author_mm_bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>[]
          }
          create: {
            args: Prisma.author_mm_bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          createMany: {
            args: Prisma.author_mm_bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.author_mm_bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>[]
          }
          delete: {
            args: Prisma.author_mm_bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          update: {
            args: Prisma.author_mm_bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          deleteMany: {
            args: Prisma.author_mm_bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.author_mm_bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.author_mm_bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>[]
          }
          upsert: {
            args: Prisma.author_mm_bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$author_mm_bookPayload>
          }
          aggregate: {
            args: Prisma.Author_mm_bookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor_mm_book>
          }
          groupBy: {
            args: Prisma.author_mm_bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<Author_mm_bookGroupByOutputType>[]
          }
          count: {
            args: Prisma.author_mm_bookCountArgs<ExtArgs>
            result: $Utils.Optional<Author_mm_bookCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      order_table: {
        payload: Prisma.$order_tablePayload<ExtArgs>
        fields: Prisma.order_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          findFirst: {
            args: Prisma.order_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          findMany: {
            args: Prisma.order_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>[]
          }
          create: {
            args: Prisma.order_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          createMany: {
            args: Prisma.order_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>[]
          }
          delete: {
            args: Prisma.order_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          update: {
            args: Prisma.order_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          deleteMany: {
            args: Prisma.order_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>[]
          }
          upsert: {
            args: Prisma.order_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_tablePayload>
          }
          aggregate: {
            args: Prisma.Order_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_table>
          }
          groupBy: {
            args: Prisma.order_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Order_tableCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
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
    author?: authorOmit
    author_mm_book?: author_mm_bookOmit
    book?: bookOmit
    order_table?: order_tableOmit
    student?: studentOmit
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
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    author_mm_book: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_mm_book?: boolean | AuthorCountOutputTypeCountAuthor_mm_bookArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthor_mm_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_mm_bookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    author_mm_book: number
    order_table: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_mm_book?: boolean | BookCountOutputTypeCountAuthor_mm_bookArgs
    order_table?: boolean | BookCountOutputTypeCountOrder_tableArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthor_mm_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_mm_bookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountOrder_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_tableWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    order_table: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_table?: boolean | StudentCountOutputTypeCountOrder_tableArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountOrder_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    surname: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    author_mm_book?: boolean | author$author_mm_bookArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
  }

  export type authorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname", ExtArgs["result"]["author"]>
  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_mm_book?: boolean | author$author_mm_bookArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type authorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      author_mm_book: Prisma.$author_mm_bookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorFindUniqueArgs>(args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs>(args: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorFindFirstArgs>(args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs>(args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorFindManyArgs>(args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends authorCreateArgs>(args: SelectSubset<T, authorCreateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {authorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorCreateManyArgs>(args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorCreateManyAndReturnArgs>(args?: SelectSubset<T, authorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends authorDeleteArgs>(args: SelectSubset<T, authorDeleteArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorUpdateArgs>(args: SelectSubset<T, authorUpdateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorDeleteManyArgs>(args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorUpdateManyArgs>(args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {authorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends authorUpdateManyAndReturnArgs>(args: SelectSubset<T, authorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends authorUpsertArgs>(args: SelectSubset<T, authorUpsertArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
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
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author_mm_book<T extends author$author_mm_bookArgs<ExtArgs> = {}>(args?: Subset<T, author$author_mm_bookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the author model
   */
  interface authorFieldRefs {
    readonly id: FieldRef<"author", 'Int'>
    readonly name: FieldRef<"author", 'String'>
    readonly surname: FieldRef<"author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }

  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author createManyAndReturn
   */
  export type authorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author updateManyAndReturn
   */
  export type authorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to update.
     */
    limit?: number
  }

  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }

  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
    /**
     * Limit how many authors to delete.
     */
    limit?: number
  }

  /**
   * author.author_mm_book
   */
  export type author$author_mm_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    where?: author_mm_bookWhereInput
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    cursor?: author_mm_bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Author_mm_bookScalarFieldEnum | Author_mm_bookScalarFieldEnum[]
  }

  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author
     */
    omit?: authorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
  }


  /**
   * Model author_mm_book
   */

  export type AggregateAuthor_mm_book = {
    _count: Author_mm_bookCountAggregateOutputType | null
    _avg: Author_mm_bookAvgAggregateOutputType | null
    _sum: Author_mm_bookSumAggregateOutputType | null
    _min: Author_mm_bookMinAggregateOutputType | null
    _max: Author_mm_bookMaxAggregateOutputType | null
  }

  export type Author_mm_bookAvgAggregateOutputType = {
    autor_id: number | null
    book_id: number | null
  }

  export type Author_mm_bookSumAggregateOutputType = {
    autor_id: number | null
    book_id: number | null
  }

  export type Author_mm_bookMinAggregateOutputType = {
    autor_id: number | null
    book_id: number | null
  }

  export type Author_mm_bookMaxAggregateOutputType = {
    autor_id: number | null
    book_id: number | null
  }

  export type Author_mm_bookCountAggregateOutputType = {
    autor_id: number
    book_id: number
    _all: number
  }


  export type Author_mm_bookAvgAggregateInputType = {
    autor_id?: true
    book_id?: true
  }

  export type Author_mm_bookSumAggregateInputType = {
    autor_id?: true
    book_id?: true
  }

  export type Author_mm_bookMinAggregateInputType = {
    autor_id?: true
    book_id?: true
  }

  export type Author_mm_bookMaxAggregateInputType = {
    autor_id?: true
    book_id?: true
  }

  export type Author_mm_bookCountAggregateInputType = {
    autor_id?: true
    book_id?: true
    _all?: true
  }

  export type Author_mm_bookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author_mm_book to aggregate.
     */
    where?: author_mm_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_mm_books to fetch.
     */
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: author_mm_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_mm_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_mm_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned author_mm_books
    **/
    _count?: true | Author_mm_bookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Author_mm_bookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Author_mm_bookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Author_mm_bookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Author_mm_bookMaxAggregateInputType
  }

  export type GetAuthor_mm_bookAggregateType<T extends Author_mm_bookAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor_mm_book]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor_mm_book[P]>
      : GetScalarType<T[P], AggregateAuthor_mm_book[P]>
  }




  export type author_mm_bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: author_mm_bookWhereInput
    orderBy?: author_mm_bookOrderByWithAggregationInput | author_mm_bookOrderByWithAggregationInput[]
    by: Author_mm_bookScalarFieldEnum[] | Author_mm_bookScalarFieldEnum
    having?: author_mm_bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Author_mm_bookCountAggregateInputType | true
    _avg?: Author_mm_bookAvgAggregateInputType
    _sum?: Author_mm_bookSumAggregateInputType
    _min?: Author_mm_bookMinAggregateInputType
    _max?: Author_mm_bookMaxAggregateInputType
  }

  export type Author_mm_bookGroupByOutputType = {
    autor_id: number
    book_id: number
    _count: Author_mm_bookCountAggregateOutputType | null
    _avg: Author_mm_bookAvgAggregateOutputType | null
    _sum: Author_mm_bookSumAggregateOutputType | null
    _min: Author_mm_bookMinAggregateOutputType | null
    _max: Author_mm_bookMaxAggregateOutputType | null
  }

  type GetAuthor_mm_bookGroupByPayload<T extends author_mm_bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Author_mm_bookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Author_mm_bookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Author_mm_bookGroupByOutputType[P]>
            : GetScalarType<T[P], Author_mm_bookGroupByOutputType[P]>
        }
      >
    >


  export type author_mm_bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    autor_id?: boolean
    book_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author_mm_book"]>

  export type author_mm_bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    autor_id?: boolean
    book_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author_mm_book"]>

  export type author_mm_bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    autor_id?: boolean
    book_id?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author_mm_book"]>

  export type author_mm_bookSelectScalar = {
    autor_id?: boolean
    book_id?: boolean
  }

  export type author_mm_bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"autor_id" | "book_id", ExtArgs["result"]["author_mm_book"]>
  export type author_mm_bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type author_mm_bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type author_mm_bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $author_mm_bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author_mm_book"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      autor_id: number
      book_id: number
    }, ExtArgs["result"]["author_mm_book"]>
    composites: {}
  }

  type author_mm_bookGetPayload<S extends boolean | null | undefined | author_mm_bookDefaultArgs> = $Result.GetResult<Prisma.$author_mm_bookPayload, S>

  type author_mm_bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<author_mm_bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Author_mm_bookCountAggregateInputType | true
    }

  export interface author_mm_bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author_mm_book'], meta: { name: 'author_mm_book' } }
    /**
     * Find zero or one Author_mm_book that matches the filter.
     * @param {author_mm_bookFindUniqueArgs} args - Arguments to find a Author_mm_book
     * @example
     * // Get one Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends author_mm_bookFindUniqueArgs>(args: SelectSubset<T, author_mm_bookFindUniqueArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author_mm_book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {author_mm_bookFindUniqueOrThrowArgs} args - Arguments to find a Author_mm_book
     * @example
     * // Get one Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends author_mm_bookFindUniqueOrThrowArgs>(args: SelectSubset<T, author_mm_bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author_mm_book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookFindFirstArgs} args - Arguments to find a Author_mm_book
     * @example
     * // Get one Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends author_mm_bookFindFirstArgs>(args?: SelectSubset<T, author_mm_bookFindFirstArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author_mm_book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookFindFirstOrThrowArgs} args - Arguments to find a Author_mm_book
     * @example
     * // Get one Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends author_mm_bookFindFirstOrThrowArgs>(args?: SelectSubset<T, author_mm_bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Author_mm_books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Author_mm_books
     * const author_mm_books = await prisma.author_mm_book.findMany()
     * 
     * // Get first 10 Author_mm_books
     * const author_mm_books = await prisma.author_mm_book.findMany({ take: 10 })
     * 
     * // Only select the `autor_id`
     * const author_mm_bookWithAutor_idOnly = await prisma.author_mm_book.findMany({ select: { autor_id: true } })
     * 
     */
    findMany<T extends author_mm_bookFindManyArgs>(args?: SelectSubset<T, author_mm_bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author_mm_book.
     * @param {author_mm_bookCreateArgs} args - Arguments to create a Author_mm_book.
     * @example
     * // Create one Author_mm_book
     * const Author_mm_book = await prisma.author_mm_book.create({
     *   data: {
     *     // ... data to create a Author_mm_book
     *   }
     * })
     * 
     */
    create<T extends author_mm_bookCreateArgs>(args: SelectSubset<T, author_mm_bookCreateArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Author_mm_books.
     * @param {author_mm_bookCreateManyArgs} args - Arguments to create many Author_mm_books.
     * @example
     * // Create many Author_mm_books
     * const author_mm_book = await prisma.author_mm_book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends author_mm_bookCreateManyArgs>(args?: SelectSubset<T, author_mm_bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Author_mm_books and returns the data saved in the database.
     * @param {author_mm_bookCreateManyAndReturnArgs} args - Arguments to create many Author_mm_books.
     * @example
     * // Create many Author_mm_books
     * const author_mm_book = await prisma.author_mm_book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Author_mm_books and only return the `autor_id`
     * const author_mm_bookWithAutor_idOnly = await prisma.author_mm_book.createManyAndReturn({
     *   select: { autor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends author_mm_bookCreateManyAndReturnArgs>(args?: SelectSubset<T, author_mm_bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author_mm_book.
     * @param {author_mm_bookDeleteArgs} args - Arguments to delete one Author_mm_book.
     * @example
     * // Delete one Author_mm_book
     * const Author_mm_book = await prisma.author_mm_book.delete({
     *   where: {
     *     // ... filter to delete one Author_mm_book
     *   }
     * })
     * 
     */
    delete<T extends author_mm_bookDeleteArgs>(args: SelectSubset<T, author_mm_bookDeleteArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author_mm_book.
     * @param {author_mm_bookUpdateArgs} args - Arguments to update one Author_mm_book.
     * @example
     * // Update one Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends author_mm_bookUpdateArgs>(args: SelectSubset<T, author_mm_bookUpdateArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Author_mm_books.
     * @param {author_mm_bookDeleteManyArgs} args - Arguments to filter Author_mm_books to delete.
     * @example
     * // Delete a few Author_mm_books
     * const { count } = await prisma.author_mm_book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends author_mm_bookDeleteManyArgs>(args?: SelectSubset<T, author_mm_bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Author_mm_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Author_mm_books
     * const author_mm_book = await prisma.author_mm_book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends author_mm_bookUpdateManyArgs>(args: SelectSubset<T, author_mm_bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Author_mm_books and returns the data updated in the database.
     * @param {author_mm_bookUpdateManyAndReturnArgs} args - Arguments to update many Author_mm_books.
     * @example
     * // Update many Author_mm_books
     * const author_mm_book = await prisma.author_mm_book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Author_mm_books and only return the `autor_id`
     * const author_mm_bookWithAutor_idOnly = await prisma.author_mm_book.updateManyAndReturn({
     *   select: { autor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends author_mm_bookUpdateManyAndReturnArgs>(args: SelectSubset<T, author_mm_bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author_mm_book.
     * @param {author_mm_bookUpsertArgs} args - Arguments to update or create a Author_mm_book.
     * @example
     * // Update or create a Author_mm_book
     * const author_mm_book = await prisma.author_mm_book.upsert({
     *   create: {
     *     // ... data to create a Author_mm_book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author_mm_book we want to update
     *   }
     * })
     */
    upsert<T extends author_mm_bookUpsertArgs>(args: SelectSubset<T, author_mm_bookUpsertArgs<ExtArgs>>): Prisma__author_mm_bookClient<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Author_mm_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookCountArgs} args - Arguments to filter Author_mm_books to count.
     * @example
     * // Count the number of Author_mm_books
     * const count = await prisma.author_mm_book.count({
     *   where: {
     *     // ... the filter for the Author_mm_books we want to count
     *   }
     * })
    **/
    count<T extends author_mm_bookCountArgs>(
      args?: Subset<T, author_mm_bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Author_mm_bookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author_mm_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Author_mm_bookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Author_mm_bookAggregateArgs>(args: Subset<T, Author_mm_bookAggregateArgs>): Prisma.PrismaPromise<GetAuthor_mm_bookAggregateType<T>>

    /**
     * Group by Author_mm_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {author_mm_bookGroupByArgs} args - Group by arguments.
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
      T extends author_mm_bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: author_mm_bookGroupByArgs['orderBy'] }
        : { orderBy?: author_mm_bookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, author_mm_bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthor_mm_bookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author_mm_book model
   */
  readonly fields: author_mm_bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author_mm_book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__author_mm_bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the author_mm_book model
   */
  interface author_mm_bookFieldRefs {
    readonly autor_id: FieldRef<"author_mm_book", 'Int'>
    readonly book_id: FieldRef<"author_mm_book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * author_mm_book findUnique
   */
  export type author_mm_bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter, which author_mm_book to fetch.
     */
    where: author_mm_bookWhereUniqueInput
  }

  /**
   * author_mm_book findUniqueOrThrow
   */
  export type author_mm_bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter, which author_mm_book to fetch.
     */
    where: author_mm_bookWhereUniqueInput
  }

  /**
   * author_mm_book findFirst
   */
  export type author_mm_bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter, which author_mm_book to fetch.
     */
    where?: author_mm_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_mm_books to fetch.
     */
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for author_mm_books.
     */
    cursor?: author_mm_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_mm_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_mm_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of author_mm_books.
     */
    distinct?: Author_mm_bookScalarFieldEnum | Author_mm_bookScalarFieldEnum[]
  }

  /**
   * author_mm_book findFirstOrThrow
   */
  export type author_mm_bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter, which author_mm_book to fetch.
     */
    where?: author_mm_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_mm_books to fetch.
     */
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for author_mm_books.
     */
    cursor?: author_mm_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_mm_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_mm_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of author_mm_books.
     */
    distinct?: Author_mm_bookScalarFieldEnum | Author_mm_bookScalarFieldEnum[]
  }

  /**
   * author_mm_book findMany
   */
  export type author_mm_bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter, which author_mm_books to fetch.
     */
    where?: author_mm_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of author_mm_books to fetch.
     */
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing author_mm_books.
     */
    cursor?: author_mm_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` author_mm_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` author_mm_books.
     */
    skip?: number
    distinct?: Author_mm_bookScalarFieldEnum | Author_mm_bookScalarFieldEnum[]
  }

  /**
   * author_mm_book create
   */
  export type author_mm_bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * The data needed to create a author_mm_book.
     */
    data: XOR<author_mm_bookCreateInput, author_mm_bookUncheckedCreateInput>
  }

  /**
   * author_mm_book createMany
   */
  export type author_mm_bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many author_mm_books.
     */
    data: author_mm_bookCreateManyInput | author_mm_bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author_mm_book createManyAndReturn
   */
  export type author_mm_bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * The data used to create many author_mm_books.
     */
    data: author_mm_bookCreateManyInput | author_mm_bookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * author_mm_book update
   */
  export type author_mm_bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * The data needed to update a author_mm_book.
     */
    data: XOR<author_mm_bookUpdateInput, author_mm_bookUncheckedUpdateInput>
    /**
     * Choose, which author_mm_book to update.
     */
    where: author_mm_bookWhereUniqueInput
  }

  /**
   * author_mm_book updateMany
   */
  export type author_mm_bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update author_mm_books.
     */
    data: XOR<author_mm_bookUpdateManyMutationInput, author_mm_bookUncheckedUpdateManyInput>
    /**
     * Filter which author_mm_books to update
     */
    where?: author_mm_bookWhereInput
    /**
     * Limit how many author_mm_books to update.
     */
    limit?: number
  }

  /**
   * author_mm_book updateManyAndReturn
   */
  export type author_mm_bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * The data used to update author_mm_books.
     */
    data: XOR<author_mm_bookUpdateManyMutationInput, author_mm_bookUncheckedUpdateManyInput>
    /**
     * Filter which author_mm_books to update
     */
    where?: author_mm_bookWhereInput
    /**
     * Limit how many author_mm_books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * author_mm_book upsert
   */
  export type author_mm_bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * The filter to search for the author_mm_book to update in case it exists.
     */
    where: author_mm_bookWhereUniqueInput
    /**
     * In case the author_mm_book found by the `where` argument doesn't exist, create a new author_mm_book with this data.
     */
    create: XOR<author_mm_bookCreateInput, author_mm_bookUncheckedCreateInput>
    /**
     * In case the author_mm_book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<author_mm_bookUpdateInput, author_mm_bookUncheckedUpdateInput>
  }

  /**
   * author_mm_book delete
   */
  export type author_mm_bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    /**
     * Filter which author_mm_book to delete.
     */
    where: author_mm_bookWhereUniqueInput
  }

  /**
   * author_mm_book deleteMany
   */
  export type author_mm_bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author_mm_books to delete
     */
    where?: author_mm_bookWhereInput
    /**
     * Limit how many author_mm_books to delete.
     */
    limit?: number
  }

  /**
   * author_mm_book without action
   */
  export type author_mm_bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    year: number | null
    availability: boolean | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    year: number | null
    availability: boolean | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    year: number
    availability: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    year?: true
    availability?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    year?: true
    availability?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    year?: true
    availability?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    year: number | null
    availability: boolean | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    availability?: boolean
    author_mm_book?: boolean | book$author_mm_bookArgs<ExtArgs>
    order_table?: boolean | book$order_tableArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    availability?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    year?: boolean
    availability?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    id?: boolean
    title?: boolean
    year?: boolean
    availability?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "year" | "availability", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author_mm_book?: boolean | book$author_mm_bookArgs<ExtArgs>
    order_table?: boolean | book$order_tableArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      author_mm_book: Prisma.$author_mm_bookPayload<ExtArgs>[]
      order_table: Prisma.$order_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      year: number | null
      availability: boolean | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {bookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookUpdateManyAndReturnArgs>(args: SelectSubset<T, bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
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
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author_mm_book<T extends book$author_mm_bookArgs<ExtArgs> = {}>(args?: Subset<T, book$author_mm_bookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$author_mm_bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_table<T extends book$order_tableArgs<ExtArgs> = {}>(args?: Subset<T, book$order_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly id: FieldRef<"book", 'Int'>
    readonly title: FieldRef<"book", 'String'>
    readonly year: FieldRef<"book", 'Int'>
    readonly availability: FieldRef<"book", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book updateManyAndReturn
   */
  export type bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book.author_mm_book
   */
  export type book$author_mm_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author_mm_book
     */
    select?: author_mm_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the author_mm_book
     */
    omit?: author_mm_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: author_mm_bookInclude<ExtArgs> | null
    where?: author_mm_bookWhereInput
    orderBy?: author_mm_bookOrderByWithRelationInput | author_mm_bookOrderByWithRelationInput[]
    cursor?: author_mm_bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Author_mm_bookScalarFieldEnum | Author_mm_bookScalarFieldEnum[]
  }

  /**
   * book.order_table
   */
  export type book$order_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    where?: order_tableWhereInput
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    cursor?: order_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_tableScalarFieldEnum | Order_tableScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model order_table
   */

  export type AggregateOrder_table = {
    _count: Order_tableCountAggregateOutputType | null
    _avg: Order_tableAvgAggregateOutputType | null
    _sum: Order_tableSumAggregateOutputType | null
    _min: Order_tableMinAggregateOutputType | null
    _max: Order_tableMaxAggregateOutputType | null
  }

  export type Order_tableAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    book_id: number | null
  }

  export type Order_tableSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    book_id: number | null
  }

  export type Order_tableMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    book_id: number | null
    order_date: Date | null
    return_date: Date | null
  }

  export type Order_tableMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    book_id: number | null
    order_date: Date | null
    return_date: Date | null
  }

  export type Order_tableCountAggregateOutputType = {
    id: number
    student_id: number
    book_id: number
    order_date: number
    return_date: number
    _all: number
  }


  export type Order_tableAvgAggregateInputType = {
    id?: true
    student_id?: true
    book_id?: true
  }

  export type Order_tableSumAggregateInputType = {
    id?: true
    student_id?: true
    book_id?: true
  }

  export type Order_tableMinAggregateInputType = {
    id?: true
    student_id?: true
    book_id?: true
    order_date?: true
    return_date?: true
  }

  export type Order_tableMaxAggregateInputType = {
    id?: true
    student_id?: true
    book_id?: true
    order_date?: true
    return_date?: true
  }

  export type Order_tableCountAggregateInputType = {
    id?: true
    student_id?: true
    book_id?: true
    order_date?: true
    return_date?: true
    _all?: true
  }

  export type Order_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_table to aggregate.
     */
    where?: order_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_tables to fetch.
     */
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_tables
    **/
    _count?: true | Order_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_tableMaxAggregateInputType
  }

  export type GetOrder_tableAggregateType<T extends Order_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_table[P]>
      : GetScalarType<T[P], AggregateOrder_table[P]>
  }




  export type order_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_tableWhereInput
    orderBy?: order_tableOrderByWithAggregationInput | order_tableOrderByWithAggregationInput[]
    by: Order_tableScalarFieldEnum[] | Order_tableScalarFieldEnum
    having?: order_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_tableCountAggregateInputType | true
    _avg?: Order_tableAvgAggregateInputType
    _sum?: Order_tableSumAggregateInputType
    _min?: Order_tableMinAggregateInputType
    _max?: Order_tableMaxAggregateInputType
  }

  export type Order_tableGroupByOutputType = {
    id: number
    student_id: number
    book_id: number
    order_date: Date
    return_date: Date | null
    _count: Order_tableCountAggregateOutputType | null
    _avg: Order_tableAvgAggregateOutputType | null
    _sum: Order_tableSumAggregateOutputType | null
    _min: Order_tableMinAggregateOutputType | null
    _max: Order_tableMaxAggregateOutputType | null
  }

  type GetOrder_tableGroupByPayload<T extends order_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Order_tableGroupByOutputType[P]>
        }
      >
    >


  export type order_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    book_id?: boolean
    order_date?: boolean
    return_date?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_table"]>

  export type order_tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    book_id?: boolean
    order_date?: boolean
    return_date?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_table"]>

  export type order_tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    book_id?: boolean
    order_date?: boolean
    return_date?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_table"]>

  export type order_tableSelectScalar = {
    id?: boolean
    student_id?: boolean
    book_id?: boolean
    order_date?: boolean
    return_date?: boolean
  }

  export type order_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "book_id" | "order_date" | "return_date", ExtArgs["result"]["order_table"]>
  export type order_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }
  export type order_tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }
  export type order_tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $order_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_table"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      book_id: number
      order_date: Date
      return_date: Date | null
    }, ExtArgs["result"]["order_table"]>
    composites: {}
  }

  type order_tableGetPayload<S extends boolean | null | undefined | order_tableDefaultArgs> = $Result.GetResult<Prisma.$order_tablePayload, S>

  type order_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_tableCountAggregateInputType | true
    }

  export interface order_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_table'], meta: { name: 'order_table' } }
    /**
     * Find zero or one Order_table that matches the filter.
     * @param {order_tableFindUniqueArgs} args - Arguments to find a Order_table
     * @example
     * // Get one Order_table
     * const order_table = await prisma.order_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_tableFindUniqueArgs>(args: SelectSubset<T, order_tableFindUniqueArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_tableFindUniqueOrThrowArgs} args - Arguments to find a Order_table
     * @example
     * // Get one Order_table
     * const order_table = await prisma.order_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, order_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableFindFirstArgs} args - Arguments to find a Order_table
     * @example
     * // Get one Order_table
     * const order_table = await prisma.order_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_tableFindFirstArgs>(args?: SelectSubset<T, order_tableFindFirstArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableFindFirstOrThrowArgs} args - Arguments to find a Order_table
     * @example
     * // Get one Order_table
     * const order_table = await prisma.order_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, order_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_tables
     * const order_tables = await prisma.order_table.findMany()
     * 
     * // Get first 10 Order_tables
     * const order_tables = await prisma.order_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_tableWithIdOnly = await prisma.order_table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_tableFindManyArgs>(args?: SelectSubset<T, order_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_table.
     * @param {order_tableCreateArgs} args - Arguments to create a Order_table.
     * @example
     * // Create one Order_table
     * const Order_table = await prisma.order_table.create({
     *   data: {
     *     // ... data to create a Order_table
     *   }
     * })
     * 
     */
    create<T extends order_tableCreateArgs>(args: SelectSubset<T, order_tableCreateArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_tables.
     * @param {order_tableCreateManyArgs} args - Arguments to create many Order_tables.
     * @example
     * // Create many Order_tables
     * const order_table = await prisma.order_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_tableCreateManyArgs>(args?: SelectSubset<T, order_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_tables and returns the data saved in the database.
     * @param {order_tableCreateManyAndReturnArgs} args - Arguments to create many Order_tables.
     * @example
     * // Create many Order_tables
     * const order_table = await prisma.order_table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_tables and only return the `id`
     * const order_tableWithIdOnly = await prisma.order_table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_tableCreateManyAndReturnArgs>(args?: SelectSubset<T, order_tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_table.
     * @param {order_tableDeleteArgs} args - Arguments to delete one Order_table.
     * @example
     * // Delete one Order_table
     * const Order_table = await prisma.order_table.delete({
     *   where: {
     *     // ... filter to delete one Order_table
     *   }
     * })
     * 
     */
    delete<T extends order_tableDeleteArgs>(args: SelectSubset<T, order_tableDeleteArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_table.
     * @param {order_tableUpdateArgs} args - Arguments to update one Order_table.
     * @example
     * // Update one Order_table
     * const order_table = await prisma.order_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_tableUpdateArgs>(args: SelectSubset<T, order_tableUpdateArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_tables.
     * @param {order_tableDeleteManyArgs} args - Arguments to filter Order_tables to delete.
     * @example
     * // Delete a few Order_tables
     * const { count } = await prisma.order_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_tableDeleteManyArgs>(args?: SelectSubset<T, order_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_tables
     * const order_table = await prisma.order_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_tableUpdateManyArgs>(args: SelectSubset<T, order_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_tables and returns the data updated in the database.
     * @param {order_tableUpdateManyAndReturnArgs} args - Arguments to update many Order_tables.
     * @example
     * // Update many Order_tables
     * const order_table = await prisma.order_table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_tables and only return the `id`
     * const order_tableWithIdOnly = await prisma.order_table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_tableUpdateManyAndReturnArgs>(args: SelectSubset<T, order_tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_table.
     * @param {order_tableUpsertArgs} args - Arguments to update or create a Order_table.
     * @example
     * // Update or create a Order_table
     * const order_table = await prisma.order_table.upsert({
     *   create: {
     *     // ... data to create a Order_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_table we want to update
     *   }
     * })
     */
    upsert<T extends order_tableUpsertArgs>(args: SelectSubset<T, order_tableUpsertArgs<ExtArgs>>): Prisma__order_tableClient<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableCountArgs} args - Arguments to filter Order_tables to count.
     * @example
     * // Count the number of Order_tables
     * const count = await prisma.order_table.count({
     *   where: {
     *     // ... the filter for the Order_tables we want to count
     *   }
     * })
    **/
    count<T extends order_tableCountArgs>(
      args?: Subset<T, order_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_tableAggregateArgs>(args: Subset<T, Order_tableAggregateArgs>): Prisma.PrismaPromise<GetOrder_tableAggregateType<T>>

    /**
     * Group by Order_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_tableGroupByArgs} args - Group by arguments.
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
      T extends order_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_tableGroupByArgs['orderBy'] }
        : { orderBy?: order_tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_table model
   */
  readonly fields: order_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_table model
   */
  interface order_tableFieldRefs {
    readonly id: FieldRef<"order_table", 'Int'>
    readonly student_id: FieldRef<"order_table", 'Int'>
    readonly book_id: FieldRef<"order_table", 'Int'>
    readonly order_date: FieldRef<"order_table", 'DateTime'>
    readonly return_date: FieldRef<"order_table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_table findUnique
   */
  export type order_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter, which order_table to fetch.
     */
    where: order_tableWhereUniqueInput
  }

  /**
   * order_table findUniqueOrThrow
   */
  export type order_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter, which order_table to fetch.
     */
    where: order_tableWhereUniqueInput
  }

  /**
   * order_table findFirst
   */
  export type order_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter, which order_table to fetch.
     */
    where?: order_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_tables to fetch.
     */
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_tables.
     */
    cursor?: order_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_tables.
     */
    distinct?: Order_tableScalarFieldEnum | Order_tableScalarFieldEnum[]
  }

  /**
   * order_table findFirstOrThrow
   */
  export type order_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter, which order_table to fetch.
     */
    where?: order_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_tables to fetch.
     */
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_tables.
     */
    cursor?: order_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_tables.
     */
    distinct?: Order_tableScalarFieldEnum | Order_tableScalarFieldEnum[]
  }

  /**
   * order_table findMany
   */
  export type order_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter, which order_tables to fetch.
     */
    where?: order_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_tables to fetch.
     */
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_tables.
     */
    cursor?: order_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_tables.
     */
    skip?: number
    distinct?: Order_tableScalarFieldEnum | Order_tableScalarFieldEnum[]
  }

  /**
   * order_table create
   */
  export type order_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a order_table.
     */
    data: XOR<order_tableCreateInput, order_tableUncheckedCreateInput>
  }

  /**
   * order_table createMany
   */
  export type order_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_tables.
     */
    data: order_tableCreateManyInput | order_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_table createManyAndReturn
   */
  export type order_tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * The data used to create many order_tables.
     */
    data: order_tableCreateManyInput | order_tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_table update
   */
  export type order_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a order_table.
     */
    data: XOR<order_tableUpdateInput, order_tableUncheckedUpdateInput>
    /**
     * Choose, which order_table to update.
     */
    where: order_tableWhereUniqueInput
  }

  /**
   * order_table updateMany
   */
  export type order_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_tables.
     */
    data: XOR<order_tableUpdateManyMutationInput, order_tableUncheckedUpdateManyInput>
    /**
     * Filter which order_tables to update
     */
    where?: order_tableWhereInput
    /**
     * Limit how many order_tables to update.
     */
    limit?: number
  }

  /**
   * order_table updateManyAndReturn
   */
  export type order_tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * The data used to update order_tables.
     */
    data: XOR<order_tableUpdateManyMutationInput, order_tableUncheckedUpdateManyInput>
    /**
     * Filter which order_tables to update
     */
    where?: order_tableWhereInput
    /**
     * Limit how many order_tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_table upsert
   */
  export type order_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the order_table to update in case it exists.
     */
    where: order_tableWhereUniqueInput
    /**
     * In case the order_table found by the `where` argument doesn't exist, create a new order_table with this data.
     */
    create: XOR<order_tableCreateInput, order_tableUncheckedCreateInput>
    /**
     * In case the order_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_tableUpdateInput, order_tableUncheckedUpdateInput>
  }

  /**
   * order_table delete
   */
  export type order_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    /**
     * Filter which order_table to delete.
     */
    where: order_tableWhereUniqueInput
  }

  /**
   * order_table deleteMany
   */
  export type order_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_tables to delete
     */
    where?: order_tableWhereInput
    /**
     * Limit how many order_tables to delete.
     */
    limit?: number
  }

  /**
   * order_table without action
   */
  export type order_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    faculty: string | null
    phone: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    faculty: string | null
    phone: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    faculty: number
    phone: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    faculty?: true
    phone?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    faculty?: true
    phone?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    faculty?: true
    phone?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string
    surname: string
    faculty: string | null
    phone: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    faculty?: boolean
    phone?: boolean
    order_table?: boolean | student$order_tableArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    faculty?: boolean
    phone?: boolean
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    faculty?: boolean
    phone?: boolean
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    faculty?: boolean
    phone?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "faculty" | "phone", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_table?: boolean | student$order_tableArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      order_table: Prisma.$order_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      faculty: string | null
      phone: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_table<T extends student$order_tableArgs<ExtArgs> = {}>(args?: Subset<T, student$order_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'Int'>
    readonly name: FieldRef<"student", 'String'>
    readonly surname: FieldRef<"student", 'String'>
    readonly faculty: FieldRef<"student", 'String'>
    readonly phone: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.order_table
   */
  export type student$order_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_table
     */
    select?: order_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_table
     */
    omit?: order_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_tableInclude<ExtArgs> | null
    where?: order_tableWhereInput
    orderBy?: order_tableOrderByWithRelationInput | order_tableOrderByWithRelationInput[]
    cursor?: order_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_tableScalarFieldEnum | Order_tableScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
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


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const Author_mm_bookScalarFieldEnum: {
    autor_id: 'autor_id',
    book_id: 'book_id'
  };

  export type Author_mm_bookScalarFieldEnum = (typeof Author_mm_bookScalarFieldEnum)[keyof typeof Author_mm_bookScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    year: 'year',
    availability: 'availability'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const Order_tableScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    book_id: 'book_id',
    order_date: 'order_date',
    return_date: 'return_date'
  };

  export type Order_tableScalarFieldEnum = (typeof Order_tableScalarFieldEnum)[keyof typeof Order_tableScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    faculty: 'faculty',
    phone: 'phone'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    id?: IntFilter<"author"> | number
    name?: StringFilter<"author"> | string
    surname?: StringFilter<"author"> | string
    author_mm_book?: Author_mm_bookListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    author_mm_book?: author_mm_bookOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    name?: StringFilter<"author"> | string
    surname?: StringFilter<"author"> | string
    author_mm_book?: Author_mm_bookListRelationFilter
  }, "id">

  export type authorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    _count?: authorCountOrderByAggregateInput
    _avg?: authorAvgOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
    _sum?: authorSumOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"author"> | number
    name?: StringWithAggregatesFilter<"author"> | string
    surname?: StringWithAggregatesFilter<"author"> | string
  }

  export type author_mm_bookWhereInput = {
    AND?: author_mm_bookWhereInput | author_mm_bookWhereInput[]
    OR?: author_mm_bookWhereInput[]
    NOT?: author_mm_bookWhereInput | author_mm_bookWhereInput[]
    autor_id?: IntFilter<"author_mm_book"> | number
    book_id?: IntFilter<"author_mm_book"> | number
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type author_mm_bookOrderByWithRelationInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
    author?: authorOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
  }

  export type author_mm_bookWhereUniqueInput = Prisma.AtLeast<{
    autor_id_book_id?: author_mm_bookAutor_idBook_idCompoundUniqueInput
    AND?: author_mm_bookWhereInput | author_mm_bookWhereInput[]
    OR?: author_mm_bookWhereInput[]
    NOT?: author_mm_bookWhereInput | author_mm_bookWhereInput[]
    autor_id?: IntFilter<"author_mm_book"> | number
    book_id?: IntFilter<"author_mm_book"> | number
    author?: XOR<AuthorScalarRelationFilter, authorWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "autor_id_book_id">

  export type author_mm_bookOrderByWithAggregationInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
    _count?: author_mm_bookCountOrderByAggregateInput
    _avg?: author_mm_bookAvgOrderByAggregateInput
    _max?: author_mm_bookMaxOrderByAggregateInput
    _min?: author_mm_bookMinOrderByAggregateInput
    _sum?: author_mm_bookSumOrderByAggregateInput
  }

  export type author_mm_bookScalarWhereWithAggregatesInput = {
    AND?: author_mm_bookScalarWhereWithAggregatesInput | author_mm_bookScalarWhereWithAggregatesInput[]
    OR?: author_mm_bookScalarWhereWithAggregatesInput[]
    NOT?: author_mm_bookScalarWhereWithAggregatesInput | author_mm_bookScalarWhereWithAggregatesInput[]
    autor_id?: IntWithAggregatesFilter<"author_mm_book"> | number
    book_id?: IntWithAggregatesFilter<"author_mm_book"> | number
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    id?: IntFilter<"book"> | number
    title?: StringFilter<"book"> | string
    year?: IntNullableFilter<"book"> | number | null
    availability?: BoolNullableFilter<"book"> | boolean | null
    author_mm_book?: Author_mm_bookListRelationFilter
    order_table?: Order_tableListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    author_mm_book?: author_mm_bookOrderByRelationAggregateInput
    order_table?: order_tableOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    title?: StringFilter<"book"> | string
    year?: IntNullableFilter<"book"> | number | null
    availability?: BoolNullableFilter<"book"> | boolean | null
    author_mm_book?: Author_mm_bookListRelationFilter
    order_table?: Order_tableListRelationFilter
  }, "id">

  export type bookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"book"> | number
    title?: StringWithAggregatesFilter<"book"> | string
    year?: IntNullableWithAggregatesFilter<"book"> | number | null
    availability?: BoolNullableWithAggregatesFilter<"book"> | boolean | null
  }

  export type order_tableWhereInput = {
    AND?: order_tableWhereInput | order_tableWhereInput[]
    OR?: order_tableWhereInput[]
    NOT?: order_tableWhereInput | order_tableWhereInput[]
    id?: IntFilter<"order_table"> | number
    student_id?: IntFilter<"order_table"> | number
    book_id?: IntFilter<"order_table"> | number
    order_date?: DateTimeFilter<"order_table"> | Date | string
    return_date?: DateTimeNullableFilter<"order_table"> | Date | string | null
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type order_tableOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
    order_date?: SortOrder
    return_date?: SortOrderInput | SortOrder
    book?: bookOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type order_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_tableWhereInput | order_tableWhereInput[]
    OR?: order_tableWhereInput[]
    NOT?: order_tableWhereInput | order_tableWhereInput[]
    student_id?: IntFilter<"order_table"> | number
    book_id?: IntFilter<"order_table"> | number
    order_date?: DateTimeFilter<"order_table"> | Date | string
    return_date?: DateTimeNullableFilter<"order_table"> | Date | string | null
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type order_tableOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
    order_date?: SortOrder
    return_date?: SortOrderInput | SortOrder
    _count?: order_tableCountOrderByAggregateInput
    _avg?: order_tableAvgOrderByAggregateInput
    _max?: order_tableMaxOrderByAggregateInput
    _min?: order_tableMinOrderByAggregateInput
    _sum?: order_tableSumOrderByAggregateInput
  }

  export type order_tableScalarWhereWithAggregatesInput = {
    AND?: order_tableScalarWhereWithAggregatesInput | order_tableScalarWhereWithAggregatesInput[]
    OR?: order_tableScalarWhereWithAggregatesInput[]
    NOT?: order_tableScalarWhereWithAggregatesInput | order_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_table"> | number
    student_id?: IntWithAggregatesFilter<"order_table"> | number
    book_id?: IntWithAggregatesFilter<"order_table"> | number
    order_date?: DateTimeWithAggregatesFilter<"order_table"> | Date | string
    return_date?: DateTimeNullableWithAggregatesFilter<"order_table"> | Date | string | null
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: IntFilter<"student"> | number
    name?: StringFilter<"student"> | string
    surname?: StringFilter<"student"> | string
    faculty?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    order_table?: Order_tableListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    faculty?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    order_table?: order_tableOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    name?: StringFilter<"student"> | string
    surname?: StringFilter<"student"> | string
    faculty?: StringNullableFilter<"student"> | string | null
    order_table?: Order_tableListRelationFilter
  }, "id" | "phone">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    faculty?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student"> | number
    name?: StringWithAggregatesFilter<"student"> | string
    surname?: StringWithAggregatesFilter<"student"> | string
    faculty?: StringNullableWithAggregatesFilter<"student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"student"> | string | null
  }

  export type authorCreateInput = {
    name: string
    surname: string
    author_mm_book?: author_mm_bookCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    author_mm_book?: author_mm_bookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    author_mm_book?: author_mm_bookUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    author_mm_book?: author_mm_bookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    id?: number
    name: string
    surname: string
  }

  export type authorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
  }

  export type authorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
  }

  export type author_mm_bookCreateInput = {
    author: authorCreateNestedOneWithoutAuthor_mm_bookInput
    book: bookCreateNestedOneWithoutAuthor_mm_bookInput
  }

  export type author_mm_bookUncheckedCreateInput = {
    autor_id: number
    book_id: number
  }

  export type author_mm_bookUpdateInput = {
    author?: authorUpdateOneRequiredWithoutAuthor_mm_bookNestedInput
    book?: bookUpdateOneRequiredWithoutAuthor_mm_bookNestedInput
  }

  export type author_mm_bookUncheckedUpdateInput = {
    autor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_mm_bookCreateManyInput = {
    autor_id: number
    book_id: number
  }

  export type author_mm_bookUpdateManyMutationInput = {

  }

  export type author_mm_bookUncheckedUpdateManyInput = {
    autor_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookCreateInput = {
    title: string
    year?: number | null
    availability?: boolean | null
    author_mm_book?: author_mm_bookCreateNestedManyWithoutBookInput
    order_table?: order_tableCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    id?: number
    title: string
    year?: number | null
    availability?: boolean | null
    author_mm_book?: author_mm_bookUncheckedCreateNestedManyWithoutBookInput
    order_table?: order_tableUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_mm_book?: author_mm_bookUpdateManyWithoutBookNestedInput
    order_table?: order_tableUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_mm_book?: author_mm_bookUncheckedUpdateManyWithoutBookNestedInput
    order_table?: order_tableUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    id?: number
    title: string
    year?: number | null
    availability?: boolean | null
  }

  export type bookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type order_tableCreateInput = {
    order_date?: Date | string
    return_date?: Date | string | null
    book: bookCreateNestedOneWithoutOrder_tableInput
    student: studentCreateNestedOneWithoutOrder_tableInput
  }

  export type order_tableUncheckedCreateInput = {
    id?: number
    student_id: number
    book_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type order_tableUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: bookUpdateOneRequiredWithoutOrder_tableNestedInput
    student?: studentUpdateOneRequiredWithoutOrder_tableNestedInput
  }

  export type order_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_tableCreateManyInput = {
    id?: number
    student_id: number
    book_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type order_tableUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentCreateInput = {
    name: string
    surname: string
    faculty?: string | null
    phone?: string | null
    order_table?: order_tableCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    faculty?: string | null
    phone?: string | null
    order_table?: order_tableUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    order_table?: order_tableUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    order_table?: order_tableUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id?: number
    name: string
    surname: string
    faculty?: string | null
    phone?: string | null
  }

  export type studentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Author_mm_bookListRelationFilter = {
    every?: author_mm_bookWhereInput
    some?: author_mm_bookWhereInput
    none?: author_mm_bookWhereInput
  }

  export type author_mm_bookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
  }

  export type authorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
  }

  export type authorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AuthorScalarRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type author_mm_bookAutor_idBook_idCompoundUniqueInput = {
    autor_id: number
    book_id: number
  }

  export type author_mm_bookCountOrderByAggregateInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
  }

  export type author_mm_bookAvgOrderByAggregateInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
  }

  export type author_mm_bookMaxOrderByAggregateInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
  }

  export type author_mm_bookMinOrderByAggregateInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
  }

  export type author_mm_bookSumOrderByAggregateInput = {
    autor_id?: SortOrder
    book_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Order_tableListRelationFilter = {
    every?: order_tableWhereInput
    some?: order_tableWhereInput
    none?: order_tableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type order_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    availability?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    availability?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    year?: SortOrder
    availability?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type order_tableCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
    order_date?: SortOrder
    return_date?: SortOrder
  }

  export type order_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
  }

  export type order_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
    order_date?: SortOrder
    return_date?: SortOrder
  }

  export type order_tableMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
    order_date?: SortOrder
    return_date?: SortOrder
  }

  export type order_tableSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    book_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    faculty?: SortOrder
    phone?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    faculty?: SortOrder
    phone?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    faculty?: SortOrder
    phone?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type author_mm_bookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput> | author_mm_bookCreateWithoutAuthorInput[] | author_mm_bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutAuthorInput | author_mm_bookCreateOrConnectWithoutAuthorInput[]
    createMany?: author_mm_bookCreateManyAuthorInputEnvelope
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
  }

  export type author_mm_bookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput> | author_mm_bookCreateWithoutAuthorInput[] | author_mm_bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutAuthorInput | author_mm_bookCreateOrConnectWithoutAuthorInput[]
    createMany?: author_mm_bookCreateManyAuthorInputEnvelope
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type author_mm_bookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput> | author_mm_bookCreateWithoutAuthorInput[] | author_mm_bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutAuthorInput | author_mm_bookCreateOrConnectWithoutAuthorInput[]
    upsert?: author_mm_bookUpsertWithWhereUniqueWithoutAuthorInput | author_mm_bookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: author_mm_bookCreateManyAuthorInputEnvelope
    set?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    disconnect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    delete?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    update?: author_mm_bookUpdateWithWhereUniqueWithoutAuthorInput | author_mm_bookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: author_mm_bookUpdateManyWithWhereWithoutAuthorInput | author_mm_bookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type author_mm_bookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput> | author_mm_bookCreateWithoutAuthorInput[] | author_mm_bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutAuthorInput | author_mm_bookCreateOrConnectWithoutAuthorInput[]
    upsert?: author_mm_bookUpsertWithWhereUniqueWithoutAuthorInput | author_mm_bookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: author_mm_bookCreateManyAuthorInputEnvelope
    set?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    disconnect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    delete?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    update?: author_mm_bookUpdateWithWhereUniqueWithoutAuthorInput | author_mm_bookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: author_mm_bookUpdateManyWithWhereWithoutAuthorInput | author_mm_bookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutAuthor_mm_bookInput = {
    create?: XOR<authorCreateWithoutAuthor_mm_bookInput, authorUncheckedCreateWithoutAuthor_mm_bookInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_mm_bookInput
    connect?: authorWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutAuthor_mm_bookInput = {
    create?: XOR<bookCreateWithoutAuthor_mm_bookInput, bookUncheckedCreateWithoutAuthor_mm_bookInput>
    connectOrCreate?: bookCreateOrConnectWithoutAuthor_mm_bookInput
    connect?: bookWhereUniqueInput
  }

  export type authorUpdateOneRequiredWithoutAuthor_mm_bookNestedInput = {
    create?: XOR<authorCreateWithoutAuthor_mm_bookInput, authorUncheckedCreateWithoutAuthor_mm_bookInput>
    connectOrCreate?: authorCreateOrConnectWithoutAuthor_mm_bookInput
    upsert?: authorUpsertWithoutAuthor_mm_bookInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutAuthor_mm_bookInput, authorUpdateWithoutAuthor_mm_bookInput>, authorUncheckedUpdateWithoutAuthor_mm_bookInput>
  }

  export type bookUpdateOneRequiredWithoutAuthor_mm_bookNestedInput = {
    create?: XOR<bookCreateWithoutAuthor_mm_bookInput, bookUncheckedCreateWithoutAuthor_mm_bookInput>
    connectOrCreate?: bookCreateOrConnectWithoutAuthor_mm_bookInput
    upsert?: bookUpsertWithoutAuthor_mm_bookInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutAuthor_mm_bookInput, bookUpdateWithoutAuthor_mm_bookInput>, bookUncheckedUpdateWithoutAuthor_mm_bookInput>
  }

  export type author_mm_bookCreateNestedManyWithoutBookInput = {
    create?: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput> | author_mm_bookCreateWithoutBookInput[] | author_mm_bookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutBookInput | author_mm_bookCreateOrConnectWithoutBookInput[]
    createMany?: author_mm_bookCreateManyBookInputEnvelope
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
  }

  export type order_tableCreateNestedManyWithoutBookInput = {
    create?: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput> | order_tableCreateWithoutBookInput[] | order_tableUncheckedCreateWithoutBookInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutBookInput | order_tableCreateOrConnectWithoutBookInput[]
    createMany?: order_tableCreateManyBookInputEnvelope
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
  }

  export type author_mm_bookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput> | author_mm_bookCreateWithoutBookInput[] | author_mm_bookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutBookInput | author_mm_bookCreateOrConnectWithoutBookInput[]
    createMany?: author_mm_bookCreateManyBookInputEnvelope
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
  }

  export type order_tableUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput> | order_tableCreateWithoutBookInput[] | order_tableUncheckedCreateWithoutBookInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutBookInput | order_tableCreateOrConnectWithoutBookInput[]
    createMany?: order_tableCreateManyBookInputEnvelope
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type author_mm_bookUpdateManyWithoutBookNestedInput = {
    create?: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput> | author_mm_bookCreateWithoutBookInput[] | author_mm_bookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutBookInput | author_mm_bookCreateOrConnectWithoutBookInput[]
    upsert?: author_mm_bookUpsertWithWhereUniqueWithoutBookInput | author_mm_bookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: author_mm_bookCreateManyBookInputEnvelope
    set?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    disconnect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    delete?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    update?: author_mm_bookUpdateWithWhereUniqueWithoutBookInput | author_mm_bookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: author_mm_bookUpdateManyWithWhereWithoutBookInput | author_mm_bookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
  }

  export type order_tableUpdateManyWithoutBookNestedInput = {
    create?: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput> | order_tableCreateWithoutBookInput[] | order_tableUncheckedCreateWithoutBookInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutBookInput | order_tableCreateOrConnectWithoutBookInput[]
    upsert?: order_tableUpsertWithWhereUniqueWithoutBookInput | order_tableUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: order_tableCreateManyBookInputEnvelope
    set?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    disconnect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    delete?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    update?: order_tableUpdateWithWhereUniqueWithoutBookInput | order_tableUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: order_tableUpdateManyWithWhereWithoutBookInput | order_tableUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
  }

  export type author_mm_bookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput> | author_mm_bookCreateWithoutBookInput[] | author_mm_bookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: author_mm_bookCreateOrConnectWithoutBookInput | author_mm_bookCreateOrConnectWithoutBookInput[]
    upsert?: author_mm_bookUpsertWithWhereUniqueWithoutBookInput | author_mm_bookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: author_mm_bookCreateManyBookInputEnvelope
    set?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    disconnect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    delete?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    connect?: author_mm_bookWhereUniqueInput | author_mm_bookWhereUniqueInput[]
    update?: author_mm_bookUpdateWithWhereUniqueWithoutBookInput | author_mm_bookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: author_mm_bookUpdateManyWithWhereWithoutBookInput | author_mm_bookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
  }

  export type order_tableUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput> | order_tableCreateWithoutBookInput[] | order_tableUncheckedCreateWithoutBookInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutBookInput | order_tableCreateOrConnectWithoutBookInput[]
    upsert?: order_tableUpsertWithWhereUniqueWithoutBookInput | order_tableUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: order_tableCreateManyBookInputEnvelope
    set?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    disconnect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    delete?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    update?: order_tableUpdateWithWhereUniqueWithoutBookInput | order_tableUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: order_tableUpdateManyWithWhereWithoutBookInput | order_tableUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
  }

  export type bookCreateNestedOneWithoutOrder_tableInput = {
    create?: XOR<bookCreateWithoutOrder_tableInput, bookUncheckedCreateWithoutOrder_tableInput>
    connectOrCreate?: bookCreateOrConnectWithoutOrder_tableInput
    connect?: bookWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutOrder_tableInput = {
    create?: XOR<studentCreateWithoutOrder_tableInput, studentUncheckedCreateWithoutOrder_tableInput>
    connectOrCreate?: studentCreateOrConnectWithoutOrder_tableInput
    connect?: studentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type bookUpdateOneRequiredWithoutOrder_tableNestedInput = {
    create?: XOR<bookCreateWithoutOrder_tableInput, bookUncheckedCreateWithoutOrder_tableInput>
    connectOrCreate?: bookCreateOrConnectWithoutOrder_tableInput
    upsert?: bookUpsertWithoutOrder_tableInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutOrder_tableInput, bookUpdateWithoutOrder_tableInput>, bookUncheckedUpdateWithoutOrder_tableInput>
  }

  export type studentUpdateOneRequiredWithoutOrder_tableNestedInput = {
    create?: XOR<studentCreateWithoutOrder_tableInput, studentUncheckedCreateWithoutOrder_tableInput>
    connectOrCreate?: studentCreateOrConnectWithoutOrder_tableInput
    upsert?: studentUpsertWithoutOrder_tableInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutOrder_tableInput, studentUpdateWithoutOrder_tableInput>, studentUncheckedUpdateWithoutOrder_tableInput>
  }

  export type order_tableCreateNestedManyWithoutStudentInput = {
    create?: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput> | order_tableCreateWithoutStudentInput[] | order_tableUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutStudentInput | order_tableCreateOrConnectWithoutStudentInput[]
    createMany?: order_tableCreateManyStudentInputEnvelope
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
  }

  export type order_tableUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput> | order_tableCreateWithoutStudentInput[] | order_tableUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutStudentInput | order_tableCreateOrConnectWithoutStudentInput[]
    createMany?: order_tableCreateManyStudentInputEnvelope
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type order_tableUpdateManyWithoutStudentNestedInput = {
    create?: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput> | order_tableCreateWithoutStudentInput[] | order_tableUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutStudentInput | order_tableCreateOrConnectWithoutStudentInput[]
    upsert?: order_tableUpsertWithWhereUniqueWithoutStudentInput | order_tableUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: order_tableCreateManyStudentInputEnvelope
    set?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    disconnect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    delete?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    update?: order_tableUpdateWithWhereUniqueWithoutStudentInput | order_tableUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: order_tableUpdateManyWithWhereWithoutStudentInput | order_tableUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
  }

  export type order_tableUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput> | order_tableCreateWithoutStudentInput[] | order_tableUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: order_tableCreateOrConnectWithoutStudentInput | order_tableCreateOrConnectWithoutStudentInput[]
    upsert?: order_tableUpsertWithWhereUniqueWithoutStudentInput | order_tableUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: order_tableCreateManyStudentInputEnvelope
    set?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    disconnect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    delete?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    connect?: order_tableWhereUniqueInput | order_tableWhereUniqueInput[]
    update?: order_tableUpdateWithWhereUniqueWithoutStudentInput | order_tableUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: order_tableUpdateManyWithWhereWithoutStudentInput | order_tableUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type author_mm_bookCreateWithoutAuthorInput = {
    book: bookCreateNestedOneWithoutAuthor_mm_bookInput
  }

  export type author_mm_bookUncheckedCreateWithoutAuthorInput = {
    book_id: number
  }

  export type author_mm_bookCreateOrConnectWithoutAuthorInput = {
    where: author_mm_bookWhereUniqueInput
    create: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput>
  }

  export type author_mm_bookCreateManyAuthorInputEnvelope = {
    data: author_mm_bookCreateManyAuthorInput | author_mm_bookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type author_mm_bookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: author_mm_bookWhereUniqueInput
    update: XOR<author_mm_bookUpdateWithoutAuthorInput, author_mm_bookUncheckedUpdateWithoutAuthorInput>
    create: XOR<author_mm_bookCreateWithoutAuthorInput, author_mm_bookUncheckedCreateWithoutAuthorInput>
  }

  export type author_mm_bookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: author_mm_bookWhereUniqueInput
    data: XOR<author_mm_bookUpdateWithoutAuthorInput, author_mm_bookUncheckedUpdateWithoutAuthorInput>
  }

  export type author_mm_bookUpdateManyWithWhereWithoutAuthorInput = {
    where: author_mm_bookScalarWhereInput
    data: XOR<author_mm_bookUpdateManyMutationInput, author_mm_bookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type author_mm_bookScalarWhereInput = {
    AND?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
    OR?: author_mm_bookScalarWhereInput[]
    NOT?: author_mm_bookScalarWhereInput | author_mm_bookScalarWhereInput[]
    autor_id?: IntFilter<"author_mm_book"> | number
    book_id?: IntFilter<"author_mm_book"> | number
  }

  export type authorCreateWithoutAuthor_mm_bookInput = {
    name: string
    surname: string
  }

  export type authorUncheckedCreateWithoutAuthor_mm_bookInput = {
    id?: number
    name: string
    surname: string
  }

  export type authorCreateOrConnectWithoutAuthor_mm_bookInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutAuthor_mm_bookInput, authorUncheckedCreateWithoutAuthor_mm_bookInput>
  }

  export type bookCreateWithoutAuthor_mm_bookInput = {
    title: string
    year?: number | null
    availability?: boolean | null
    order_table?: order_tableCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutAuthor_mm_bookInput = {
    id?: number
    title: string
    year?: number | null
    availability?: boolean | null
    order_table?: order_tableUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutAuthor_mm_bookInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutAuthor_mm_bookInput, bookUncheckedCreateWithoutAuthor_mm_bookInput>
  }

  export type authorUpsertWithoutAuthor_mm_bookInput = {
    update: XOR<authorUpdateWithoutAuthor_mm_bookInput, authorUncheckedUpdateWithoutAuthor_mm_bookInput>
    create: XOR<authorCreateWithoutAuthor_mm_bookInput, authorUncheckedCreateWithoutAuthor_mm_bookInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutAuthor_mm_bookInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutAuthor_mm_bookInput, authorUncheckedUpdateWithoutAuthor_mm_bookInput>
  }

  export type authorUpdateWithoutAuthor_mm_bookInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
  }

  export type authorUncheckedUpdateWithoutAuthor_mm_bookInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
  }

  export type bookUpsertWithoutAuthor_mm_bookInput = {
    update: XOR<bookUpdateWithoutAuthor_mm_bookInput, bookUncheckedUpdateWithoutAuthor_mm_bookInput>
    create: XOR<bookCreateWithoutAuthor_mm_bookInput, bookUncheckedCreateWithoutAuthor_mm_bookInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutAuthor_mm_bookInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutAuthor_mm_bookInput, bookUncheckedUpdateWithoutAuthor_mm_bookInput>
  }

  export type bookUpdateWithoutAuthor_mm_bookInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_table?: order_tableUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutAuthor_mm_bookInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    order_table?: order_tableUncheckedUpdateManyWithoutBookNestedInput
  }

  export type author_mm_bookCreateWithoutBookInput = {
    author: authorCreateNestedOneWithoutAuthor_mm_bookInput
  }

  export type author_mm_bookUncheckedCreateWithoutBookInput = {
    autor_id: number
  }

  export type author_mm_bookCreateOrConnectWithoutBookInput = {
    where: author_mm_bookWhereUniqueInput
    create: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput>
  }

  export type author_mm_bookCreateManyBookInputEnvelope = {
    data: author_mm_bookCreateManyBookInput | author_mm_bookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type order_tableCreateWithoutBookInput = {
    order_date?: Date | string
    return_date?: Date | string | null
    student: studentCreateNestedOneWithoutOrder_tableInput
  }

  export type order_tableUncheckedCreateWithoutBookInput = {
    id?: number
    student_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type order_tableCreateOrConnectWithoutBookInput = {
    where: order_tableWhereUniqueInput
    create: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput>
  }

  export type order_tableCreateManyBookInputEnvelope = {
    data: order_tableCreateManyBookInput | order_tableCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type author_mm_bookUpsertWithWhereUniqueWithoutBookInput = {
    where: author_mm_bookWhereUniqueInput
    update: XOR<author_mm_bookUpdateWithoutBookInput, author_mm_bookUncheckedUpdateWithoutBookInput>
    create: XOR<author_mm_bookCreateWithoutBookInput, author_mm_bookUncheckedCreateWithoutBookInput>
  }

  export type author_mm_bookUpdateWithWhereUniqueWithoutBookInput = {
    where: author_mm_bookWhereUniqueInput
    data: XOR<author_mm_bookUpdateWithoutBookInput, author_mm_bookUncheckedUpdateWithoutBookInput>
  }

  export type author_mm_bookUpdateManyWithWhereWithoutBookInput = {
    where: author_mm_bookScalarWhereInput
    data: XOR<author_mm_bookUpdateManyMutationInput, author_mm_bookUncheckedUpdateManyWithoutBookInput>
  }

  export type order_tableUpsertWithWhereUniqueWithoutBookInput = {
    where: order_tableWhereUniqueInput
    update: XOR<order_tableUpdateWithoutBookInput, order_tableUncheckedUpdateWithoutBookInput>
    create: XOR<order_tableCreateWithoutBookInput, order_tableUncheckedCreateWithoutBookInput>
  }

  export type order_tableUpdateWithWhereUniqueWithoutBookInput = {
    where: order_tableWhereUniqueInput
    data: XOR<order_tableUpdateWithoutBookInput, order_tableUncheckedUpdateWithoutBookInput>
  }

  export type order_tableUpdateManyWithWhereWithoutBookInput = {
    where: order_tableScalarWhereInput
    data: XOR<order_tableUpdateManyMutationInput, order_tableUncheckedUpdateManyWithoutBookInput>
  }

  export type order_tableScalarWhereInput = {
    AND?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
    OR?: order_tableScalarWhereInput[]
    NOT?: order_tableScalarWhereInput | order_tableScalarWhereInput[]
    id?: IntFilter<"order_table"> | number
    student_id?: IntFilter<"order_table"> | number
    book_id?: IntFilter<"order_table"> | number
    order_date?: DateTimeFilter<"order_table"> | Date | string
    return_date?: DateTimeNullableFilter<"order_table"> | Date | string | null
  }

  export type bookCreateWithoutOrder_tableInput = {
    title: string
    year?: number | null
    availability?: boolean | null
    author_mm_book?: author_mm_bookCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutOrder_tableInput = {
    id?: number
    title: string
    year?: number | null
    availability?: boolean | null
    author_mm_book?: author_mm_bookUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutOrder_tableInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutOrder_tableInput, bookUncheckedCreateWithoutOrder_tableInput>
  }

  export type studentCreateWithoutOrder_tableInput = {
    name: string
    surname: string
    faculty?: string | null
    phone?: string | null
  }

  export type studentUncheckedCreateWithoutOrder_tableInput = {
    id?: number
    name: string
    surname: string
    faculty?: string | null
    phone?: string | null
  }

  export type studentCreateOrConnectWithoutOrder_tableInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutOrder_tableInput, studentUncheckedCreateWithoutOrder_tableInput>
  }

  export type bookUpsertWithoutOrder_tableInput = {
    update: XOR<bookUpdateWithoutOrder_tableInput, bookUncheckedUpdateWithoutOrder_tableInput>
    create: XOR<bookCreateWithoutOrder_tableInput, bookUncheckedCreateWithoutOrder_tableInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutOrder_tableInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutOrder_tableInput, bookUncheckedUpdateWithoutOrder_tableInput>
  }

  export type bookUpdateWithoutOrder_tableInput = {
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_mm_book?: author_mm_bookUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutOrder_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author_mm_book?: author_mm_bookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type studentUpsertWithoutOrder_tableInput = {
    update: XOR<studentUpdateWithoutOrder_tableInput, studentUncheckedUpdateWithoutOrder_tableInput>
    create: XOR<studentCreateWithoutOrder_tableInput, studentUncheckedCreateWithoutOrder_tableInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutOrder_tableInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutOrder_tableInput, studentUncheckedUpdateWithoutOrder_tableInput>
  }

  export type studentUpdateWithoutOrder_tableInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUncheckedUpdateWithoutOrder_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    faculty?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_tableCreateWithoutStudentInput = {
    order_date?: Date | string
    return_date?: Date | string | null
    book: bookCreateNestedOneWithoutOrder_tableInput
  }

  export type order_tableUncheckedCreateWithoutStudentInput = {
    id?: number
    book_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type order_tableCreateOrConnectWithoutStudentInput = {
    where: order_tableWhereUniqueInput
    create: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput>
  }

  export type order_tableCreateManyStudentInputEnvelope = {
    data: order_tableCreateManyStudentInput | order_tableCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type order_tableUpsertWithWhereUniqueWithoutStudentInput = {
    where: order_tableWhereUniqueInput
    update: XOR<order_tableUpdateWithoutStudentInput, order_tableUncheckedUpdateWithoutStudentInput>
    create: XOR<order_tableCreateWithoutStudentInput, order_tableUncheckedCreateWithoutStudentInput>
  }

  export type order_tableUpdateWithWhereUniqueWithoutStudentInput = {
    where: order_tableWhereUniqueInput
    data: XOR<order_tableUpdateWithoutStudentInput, order_tableUncheckedUpdateWithoutStudentInput>
  }

  export type order_tableUpdateManyWithWhereWithoutStudentInput = {
    where: order_tableScalarWhereInput
    data: XOR<order_tableUpdateManyMutationInput, order_tableUncheckedUpdateManyWithoutStudentInput>
  }

  export type author_mm_bookCreateManyAuthorInput = {
    book_id: number
  }

  export type author_mm_bookUpdateWithoutAuthorInput = {
    book?: bookUpdateOneRequiredWithoutAuthor_mm_bookNestedInput
  }

  export type author_mm_bookUncheckedUpdateWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_mm_bookUncheckedUpdateManyWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_mm_bookCreateManyBookInput = {
    autor_id: number
  }

  export type order_tableCreateManyBookInput = {
    id?: number
    student_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type author_mm_bookUpdateWithoutBookInput = {
    author?: authorUpdateOneRequiredWithoutAuthor_mm_bookNestedInput
  }

  export type author_mm_bookUncheckedUpdateWithoutBookInput = {
    autor_id?: IntFieldUpdateOperationsInput | number
  }

  export type author_mm_bookUncheckedUpdateManyWithoutBookInput = {
    autor_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_tableUpdateWithoutBookInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutOrder_tableNestedInput
  }

  export type order_tableUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_tableUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_tableCreateManyStudentInput = {
    id?: number
    book_id: number
    order_date?: Date | string
    return_date?: Date | string | null
  }

  export type order_tableUpdateWithoutStudentInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: bookUpdateOneRequiredWithoutOrder_tableNestedInput
  }

  export type order_tableUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_tableUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    return_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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