
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MuscleGroup
 * 
 */
export type MuscleGroup = $Result.DefaultSelection<Prisma.$MuscleGroupPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model EquipmentType
 * 
 */
export type EquipmentType = $Result.DefaultSelection<Prisma.$EquipmentTypePayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model WorkoutUnit
 * 
 */
export type WorkoutUnit = $Result.DefaultSelection<Prisma.$WorkoutUnitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.muscleGroup`: Exposes CRUD operations for the **MuscleGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MuscleGroups
    * const muscleGroups = await prisma.muscleGroup.findMany()
    * ```
    */
  get muscleGroup(): Prisma.MuscleGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentType`: Exposes CRUD operations for the **EquipmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentTypes
    * const equipmentTypes = await prisma.equipmentType.findMany()
    * ```
    */
  get equipmentType(): Prisma.EquipmentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutUnit`: Exposes CRUD operations for the **WorkoutUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutUnits
    * const workoutUnits = await prisma.workoutUnit.findMany()
    * ```
    */
  get workoutUnit(): Prisma.WorkoutUnitDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    MuscleGroup: 'MuscleGroup',
    Exercise: 'Exercise',
    EquipmentType: 'EquipmentType',
    Equipment: 'Equipment',
    Workout: 'Workout',
    WorkoutUnit: 'WorkoutUnit'
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
      modelProps: "user" | "muscleGroup" | "exercise" | "equipmentType" | "equipment" | "workout" | "workoutUnit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MuscleGroup: {
        payload: Prisma.$MuscleGroupPayload<ExtArgs>
        fields: Prisma.MuscleGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MuscleGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MuscleGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          findFirst: {
            args: Prisma.MuscleGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MuscleGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          findMany: {
            args: Prisma.MuscleGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          create: {
            args: Prisma.MuscleGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          createMany: {
            args: Prisma.MuscleGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MuscleGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          delete: {
            args: Prisma.MuscleGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          update: {
            args: Prisma.MuscleGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          deleteMany: {
            args: Prisma.MuscleGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MuscleGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MuscleGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>[]
          }
          upsert: {
            args: Prisma.MuscleGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MuscleGroupPayload>
          }
          aggregate: {
            args: Prisma.MuscleGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMuscleGroup>
          }
          groupBy: {
            args: Prisma.MuscleGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<MuscleGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.MuscleGroupCountArgs<ExtArgs>
            result: $Utils.Optional<MuscleGroupCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      EquipmentType: {
        payload: Prisma.$EquipmentTypePayload<ExtArgs>
        fields: Prisma.EquipmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          findFirst: {
            args: Prisma.EquipmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          findMany: {
            args: Prisma.EquipmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          create: {
            args: Prisma.EquipmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          createMany: {
            args: Prisma.EquipmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          delete: {
            args: Prisma.EquipmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          update: {
            args: Prisma.EquipmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          deleteMany: {
            args: Prisma.EquipmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>[]
          }
          upsert: {
            args: Prisma.EquipmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTypePayload>
          }
          aggregate: {
            args: Prisma.EquipmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentType>
          }
          groupBy: {
            args: Prisma.EquipmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTypeCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      WorkoutUnit: {
        payload: Prisma.$WorkoutUnitPayload<ExtArgs>
        fields: Prisma.WorkoutUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          findFirst: {
            args: Prisma.WorkoutUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          findMany: {
            args: Prisma.WorkoutUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>[]
          }
          create: {
            args: Prisma.WorkoutUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          createMany: {
            args: Prisma.WorkoutUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>[]
          }
          delete: {
            args: Prisma.WorkoutUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          update: {
            args: Prisma.WorkoutUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutUnitPayload>
          }
          aggregate: {
            args: Prisma.WorkoutUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutUnit>
          }
          groupBy: {
            args: Prisma.WorkoutUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutUnitCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutUnitCountAggregateOutputType> | number
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
    user?: UserOmit
    muscleGroup?: MuscleGroupOmit
    exercise?: ExerciseOmit
    equipmentType?: EquipmentTypeOmit
    equipment?: EquipmentOmit
    workout?: WorkoutOmit
    workoutUnit?: WorkoutUnitOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workouts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | UserCountOutputTypeCountWorkoutsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }


  /**
   * Count Type MuscleGroupCountOutputType
   */

  export type MuscleGroupCountOutputType = {
    equipments: number
    exercises: number
  }

  export type MuscleGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | MuscleGroupCountOutputTypeCountEquipmentsArgs
    exercises?: boolean | MuscleGroupCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroupCountOutputType
     */
    select?: MuscleGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * MuscleGroupCountOutputType without action
   */
  export type MuscleGroupCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    workoutDetails: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutDetails?: boolean | ExerciseCountOutputTypeCountWorkoutDetailsArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutUnitWhereInput
  }


  /**
   * Count Type EquipmentTypeCountOutputType
   */

  export type EquipmentTypeCountOutputType = {
    Equipments: number
  }

  export type EquipmentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipments?: boolean | EquipmentTypeCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentTypeCountOutputType without action
   */
  export type EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTypeCountOutputType
     */
    select?: EquipmentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentTypeCountOutputType without action
   */
  export type EquipmentTypeCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    exercises: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | EquipmentCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    workoutDetails: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutDetails?: boolean | WorkoutCountOutputTypeCountWorkoutDetailsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountWorkoutDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutUnitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    picture: string | null
    admin: boolean | null
    active: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    picture: string | null
    admin: boolean | null
    active: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    picture: number
    admin: number
    active: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    picture?: true
    admin?: true
    active?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    picture?: true
    admin?: true
    active?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    picture?: true
    admin?: true
    active?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string | null
    picture: string | null
    admin: boolean
    active: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    picture?: boolean
    admin?: boolean
    active?: boolean
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    picture?: boolean
    admin?: boolean
    active?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    picture?: boolean
    admin?: boolean
    active?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    picture?: boolean
    admin?: boolean
    active?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "picture" | "admin" | "active", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phone: string | null
      picture: string | null
      admin: boolean
      active: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workouts<T extends User$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly active: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workouts
   */
  export type User$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MuscleGroup
   */

  export type AggregateMuscleGroup = {
    _count: MuscleGroupCountAggregateOutputType | null
    _min: MuscleGroupMinAggregateOutputType | null
    _max: MuscleGroupMaxAggregateOutputType | null
  }

  export type MuscleGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MuscleGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MuscleGroupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MuscleGroupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MuscleGroupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MuscleGroupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MuscleGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleGroup to aggregate.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MuscleGroups
    **/
    _count?: true | MuscleGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MuscleGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MuscleGroupMaxAggregateInputType
  }

  export type GetMuscleGroupAggregateType<T extends MuscleGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateMuscleGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMuscleGroup[P]>
      : GetScalarType<T[P], AggregateMuscleGroup[P]>
  }




  export type MuscleGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MuscleGroupWhereInput
    orderBy?: MuscleGroupOrderByWithAggregationInput | MuscleGroupOrderByWithAggregationInput[]
    by: MuscleGroupScalarFieldEnum[] | MuscleGroupScalarFieldEnum
    having?: MuscleGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MuscleGroupCountAggregateInputType | true
    _min?: MuscleGroupMinAggregateInputType
    _max?: MuscleGroupMaxAggregateInputType
  }

  export type MuscleGroupGroupByOutputType = {
    id: string
    name: string
    _count: MuscleGroupCountAggregateOutputType | null
    _min: MuscleGroupMinAggregateOutputType | null
    _max: MuscleGroupMaxAggregateOutputType | null
  }

  type GetMuscleGroupGroupByPayload<T extends MuscleGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MuscleGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MuscleGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MuscleGroupGroupByOutputType[P]>
            : GetScalarType<T[P], MuscleGroupGroupByOutputType[P]>
        }
      >
    >


  export type MuscleGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    equipments?: boolean | MuscleGroup$equipmentsArgs<ExtArgs>
    exercises?: boolean | MuscleGroup$exercisesArgs<ExtArgs>
    _count?: boolean | MuscleGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["muscleGroup"]>

  export type MuscleGroupSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MuscleGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["muscleGroup"]>
  export type MuscleGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | MuscleGroup$equipmentsArgs<ExtArgs>
    exercises?: boolean | MuscleGroup$exercisesArgs<ExtArgs>
    _count?: boolean | MuscleGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MuscleGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MuscleGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MuscleGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MuscleGroup"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["muscleGroup"]>
    composites: {}
  }

  type MuscleGroupGetPayload<S extends boolean | null | undefined | MuscleGroupDefaultArgs> = $Result.GetResult<Prisma.$MuscleGroupPayload, S>

  type MuscleGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MuscleGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MuscleGroupCountAggregateInputType | true
    }

  export interface MuscleGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MuscleGroup'], meta: { name: 'MuscleGroup' } }
    /**
     * Find zero or one MuscleGroup that matches the filter.
     * @param {MuscleGroupFindUniqueArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MuscleGroupFindUniqueArgs>(args: SelectSubset<T, MuscleGroupFindUniqueArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MuscleGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MuscleGroupFindUniqueOrThrowArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MuscleGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, MuscleGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuscleGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindFirstArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MuscleGroupFindFirstArgs>(args?: SelectSubset<T, MuscleGroupFindFirstArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MuscleGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindFirstOrThrowArgs} args - Arguments to find a MuscleGroup
     * @example
     * // Get one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MuscleGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, MuscleGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MuscleGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MuscleGroups
     * const muscleGroups = await prisma.muscleGroup.findMany()
     * 
     * // Get first 10 MuscleGroups
     * const muscleGroups = await prisma.muscleGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MuscleGroupFindManyArgs>(args?: SelectSubset<T, MuscleGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MuscleGroup.
     * @param {MuscleGroupCreateArgs} args - Arguments to create a MuscleGroup.
     * @example
     * // Create one MuscleGroup
     * const MuscleGroup = await prisma.muscleGroup.create({
     *   data: {
     *     // ... data to create a MuscleGroup
     *   }
     * })
     * 
     */
    create<T extends MuscleGroupCreateArgs>(args: SelectSubset<T, MuscleGroupCreateArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MuscleGroups.
     * @param {MuscleGroupCreateManyArgs} args - Arguments to create many MuscleGroups.
     * @example
     * // Create many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MuscleGroupCreateManyArgs>(args?: SelectSubset<T, MuscleGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MuscleGroups and returns the data saved in the database.
     * @param {MuscleGroupCreateManyAndReturnArgs} args - Arguments to create many MuscleGroups.
     * @example
     * // Create many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MuscleGroups and only return the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MuscleGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, MuscleGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MuscleGroup.
     * @param {MuscleGroupDeleteArgs} args - Arguments to delete one MuscleGroup.
     * @example
     * // Delete one MuscleGroup
     * const MuscleGroup = await prisma.muscleGroup.delete({
     *   where: {
     *     // ... filter to delete one MuscleGroup
     *   }
     * })
     * 
     */
    delete<T extends MuscleGroupDeleteArgs>(args: SelectSubset<T, MuscleGroupDeleteArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MuscleGroup.
     * @param {MuscleGroupUpdateArgs} args - Arguments to update one MuscleGroup.
     * @example
     * // Update one MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MuscleGroupUpdateArgs>(args: SelectSubset<T, MuscleGroupUpdateArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MuscleGroups.
     * @param {MuscleGroupDeleteManyArgs} args - Arguments to filter MuscleGroups to delete.
     * @example
     * // Delete a few MuscleGroups
     * const { count } = await prisma.muscleGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MuscleGroupDeleteManyArgs>(args?: SelectSubset<T, MuscleGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuscleGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MuscleGroupUpdateManyArgs>(args: SelectSubset<T, MuscleGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MuscleGroups and returns the data updated in the database.
     * @param {MuscleGroupUpdateManyAndReturnArgs} args - Arguments to update many MuscleGroups.
     * @example
     * // Update many MuscleGroups
     * const muscleGroup = await prisma.muscleGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MuscleGroups and only return the `id`
     * const muscleGroupWithIdOnly = await prisma.muscleGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends MuscleGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, MuscleGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MuscleGroup.
     * @param {MuscleGroupUpsertArgs} args - Arguments to update or create a MuscleGroup.
     * @example
     * // Update or create a MuscleGroup
     * const muscleGroup = await prisma.muscleGroup.upsert({
     *   create: {
     *     // ... data to create a MuscleGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MuscleGroup we want to update
     *   }
     * })
     */
    upsert<T extends MuscleGroupUpsertArgs>(args: SelectSubset<T, MuscleGroupUpsertArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MuscleGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupCountArgs} args - Arguments to filter MuscleGroups to count.
     * @example
     * // Count the number of MuscleGroups
     * const count = await prisma.muscleGroup.count({
     *   where: {
     *     // ... the filter for the MuscleGroups we want to count
     *   }
     * })
    **/
    count<T extends MuscleGroupCountArgs>(
      args?: Subset<T, MuscleGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MuscleGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MuscleGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MuscleGroupAggregateArgs>(args: Subset<T, MuscleGroupAggregateArgs>): Prisma.PrismaPromise<GetMuscleGroupAggregateType<T>>

    /**
     * Group by MuscleGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MuscleGroupGroupByArgs} args - Group by arguments.
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
      T extends MuscleGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MuscleGroupGroupByArgs['orderBy'] }
        : { orderBy?: MuscleGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MuscleGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMuscleGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MuscleGroup model
   */
  readonly fields: MuscleGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MuscleGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MuscleGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends MuscleGroup$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroup$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercises<T extends MuscleGroup$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroup$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MuscleGroup model
   */
  interface MuscleGroupFieldRefs {
    readonly id: FieldRef<"MuscleGroup", 'String'>
    readonly name: FieldRef<"MuscleGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MuscleGroup findUnique
   */
  export type MuscleGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup findUniqueOrThrow
   */
  export type MuscleGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup findFirst
   */
  export type MuscleGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleGroups.
     */
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup findFirstOrThrow
   */
  export type MuscleGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroup to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MuscleGroups.
     */
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup findMany
   */
  export type MuscleGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter, which MuscleGroups to fetch.
     */
    where?: MuscleGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MuscleGroups to fetch.
     */
    orderBy?: MuscleGroupOrderByWithRelationInput | MuscleGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MuscleGroups.
     */
    cursor?: MuscleGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MuscleGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MuscleGroups.
     */
    skip?: number
    distinct?: MuscleGroupScalarFieldEnum | MuscleGroupScalarFieldEnum[]
  }

  /**
   * MuscleGroup create
   */
  export type MuscleGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a MuscleGroup.
     */
    data: XOR<MuscleGroupCreateInput, MuscleGroupUncheckedCreateInput>
  }

  /**
   * MuscleGroup createMany
   */
  export type MuscleGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MuscleGroups.
     */
    data: MuscleGroupCreateManyInput | MuscleGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleGroup createManyAndReturn
   */
  export type MuscleGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * The data used to create many MuscleGroups.
     */
    data: MuscleGroupCreateManyInput | MuscleGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MuscleGroup update
   */
  export type MuscleGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a MuscleGroup.
     */
    data: XOR<MuscleGroupUpdateInput, MuscleGroupUncheckedUpdateInput>
    /**
     * Choose, which MuscleGroup to update.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup updateMany
   */
  export type MuscleGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MuscleGroups.
     */
    data: XOR<MuscleGroupUpdateManyMutationInput, MuscleGroupUncheckedUpdateManyInput>
    /**
     * Filter which MuscleGroups to update
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to update.
     */
    limit?: number
  }

  /**
   * MuscleGroup updateManyAndReturn
   */
  export type MuscleGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * The data used to update MuscleGroups.
     */
    data: XOR<MuscleGroupUpdateManyMutationInput, MuscleGroupUncheckedUpdateManyInput>
    /**
     * Filter which MuscleGroups to update
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to update.
     */
    limit?: number
  }

  /**
   * MuscleGroup upsert
   */
  export type MuscleGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the MuscleGroup to update in case it exists.
     */
    where: MuscleGroupWhereUniqueInput
    /**
     * In case the MuscleGroup found by the `where` argument doesn't exist, create a new MuscleGroup with this data.
     */
    create: XOR<MuscleGroupCreateInput, MuscleGroupUncheckedCreateInput>
    /**
     * In case the MuscleGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MuscleGroupUpdateInput, MuscleGroupUncheckedUpdateInput>
  }

  /**
   * MuscleGroup delete
   */
  export type MuscleGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
    /**
     * Filter which MuscleGroup to delete.
     */
    where: MuscleGroupWhereUniqueInput
  }

  /**
   * MuscleGroup deleteMany
   */
  export type MuscleGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MuscleGroups to delete
     */
    where?: MuscleGroupWhereInput
    /**
     * Limit how many MuscleGroups to delete.
     */
    limit?: number
  }

  /**
   * MuscleGroup.equipments
   */
  export type MuscleGroup$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * MuscleGroup.exercises
   */
  export type MuscleGroup$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * MuscleGroup without action
   */
  export type MuscleGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MuscleGroup
     */
    select?: MuscleGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MuscleGroup
     */
    omit?: MuscleGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MuscleGroupInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroupid: string | null
    equipmentId: string | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroupid: string | null
    equipmentId: string | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscleGroupid: number
    equipmentId: number
    _all: number
  }


  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscleGroupid?: true
    equipmentId?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscleGroupid?: true
    equipmentId?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscleGroupid?: true
    equipmentId?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    name: string
    muscleGroupid: string
    equipmentId: string
    _count: ExerciseCountAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupid?: boolean
    equipmentId?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
    workoutDetails?: boolean | Exercise$workoutDetailsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupid?: boolean
    equipmentId?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupid?: boolean
    equipmentId?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscleGroupid?: boolean
    equipmentId?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "muscleGroupid" | "equipmentId", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
    workoutDetails?: boolean | Exercise$workoutDetailsArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
  }
  export type ExerciseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipment?: boolean | Exercise$equipmentArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      muscleGroup: Prisma.$MuscleGroupPayload<ExtArgs>
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
      workoutDetails: Prisma.$WorkoutUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleGroupid: string
      equipmentId: string
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExerciseUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muscleGroup<T extends MuscleGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroupDefaultArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipment<T extends Exercise$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workoutDetails<T extends Exercise$workoutDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$workoutDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly muscleGroupid: FieldRef<"Exercise", 'String'>
    readonly equipmentId: FieldRef<"Exercise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise updateManyAndReturn
   */
  export type ExerciseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.equipment
   */
  export type Exercise$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * Exercise.workoutDetails
   */
  export type Exercise$workoutDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    where?: WorkoutUnitWhereInput
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    cursor?: WorkoutUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutUnitScalarFieldEnum | WorkoutUnitScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentType
   */

  export type AggregateEquipmentType = {
    _count: EquipmentTypeCountAggregateOutputType | null
    _min: EquipmentTypeMinAggregateOutputType | null
    _max: EquipmentTypeMaxAggregateOutputType | null
  }

  export type EquipmentTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type EquipmentTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type EquipmentTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EquipmentTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EquipmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentType to aggregate.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentTypes
    **/
    _count?: true | EquipmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentTypeMaxAggregateInputType
  }

  export type GetEquipmentTypeAggregateType<T extends EquipmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentType[P]>
      : GetScalarType<T[P], AggregateEquipmentType[P]>
  }




  export type EquipmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentTypeWhereInput
    orderBy?: EquipmentTypeOrderByWithAggregationInput | EquipmentTypeOrderByWithAggregationInput[]
    by: EquipmentTypeScalarFieldEnum[] | EquipmentTypeScalarFieldEnum
    having?: EquipmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentTypeCountAggregateInputType | true
    _min?: EquipmentTypeMinAggregateInputType
    _max?: EquipmentTypeMaxAggregateInputType
  }

  export type EquipmentTypeGroupByOutputType = {
    id: string
    name: string
    _count: EquipmentTypeCountAggregateOutputType | null
    _min: EquipmentTypeMinAggregateOutputType | null
    _max: EquipmentTypeMaxAggregateOutputType | null
  }

  type GetEquipmentTypeGroupByPayload<T extends EquipmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Equipments?: boolean | EquipmentType$EquipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipmentType"]>

  export type EquipmentTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EquipmentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["equipmentType"]>
  export type EquipmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipments?: boolean | EquipmentType$EquipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipmentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentType"
    objects: {
      Equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["equipmentType"]>
    composites: {}
  }

  type EquipmentTypeGetPayload<S extends boolean | null | undefined | EquipmentTypeDefaultArgs> = $Result.GetResult<Prisma.$EquipmentTypePayload, S>

  type EquipmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentTypeCountAggregateInputType | true
    }

  export interface EquipmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentType'], meta: { name: 'EquipmentType' } }
    /**
     * Find zero or one EquipmentType that matches the filter.
     * @param {EquipmentTypeFindUniqueArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentTypeFindUniqueArgs>(args: SelectSubset<T, EquipmentTypeFindUniqueArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentTypeFindUniqueOrThrowArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindFirstArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentTypeFindFirstArgs>(args?: SelectSubset<T, EquipmentTypeFindFirstArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindFirstOrThrowArgs} args - Arguments to find a EquipmentType
     * @example
     * // Get one EquipmentType
     * const equipmentType = await prisma.equipmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentTypes
     * const equipmentTypes = await prisma.equipmentType.findMany()
     * 
     * // Get first 10 EquipmentTypes
     * const equipmentTypes = await prisma.equipmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentTypeFindManyArgs>(args?: SelectSubset<T, EquipmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentType.
     * @param {EquipmentTypeCreateArgs} args - Arguments to create a EquipmentType.
     * @example
     * // Create one EquipmentType
     * const EquipmentType = await prisma.equipmentType.create({
     *   data: {
     *     // ... data to create a EquipmentType
     *   }
     * })
     * 
     */
    create<T extends EquipmentTypeCreateArgs>(args: SelectSubset<T, EquipmentTypeCreateArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentTypes.
     * @param {EquipmentTypeCreateManyArgs} args - Arguments to create many EquipmentTypes.
     * @example
     * // Create many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentTypeCreateManyArgs>(args?: SelectSubset<T, EquipmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentTypes and returns the data saved in the database.
     * @param {EquipmentTypeCreateManyAndReturnArgs} args - Arguments to create many EquipmentTypes.
     * @example
     * // Create many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentTypes and only return the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentType.
     * @param {EquipmentTypeDeleteArgs} args - Arguments to delete one EquipmentType.
     * @example
     * // Delete one EquipmentType
     * const EquipmentType = await prisma.equipmentType.delete({
     *   where: {
     *     // ... filter to delete one EquipmentType
     *   }
     * })
     * 
     */
    delete<T extends EquipmentTypeDeleteArgs>(args: SelectSubset<T, EquipmentTypeDeleteArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentType.
     * @param {EquipmentTypeUpdateArgs} args - Arguments to update one EquipmentType.
     * @example
     * // Update one EquipmentType
     * const equipmentType = await prisma.equipmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentTypeUpdateArgs>(args: SelectSubset<T, EquipmentTypeUpdateArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentTypes.
     * @param {EquipmentTypeDeleteManyArgs} args - Arguments to filter EquipmentTypes to delete.
     * @example
     * // Delete a few EquipmentTypes
     * const { count } = await prisma.equipmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentTypeDeleteManyArgs>(args?: SelectSubset<T, EquipmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentTypeUpdateManyArgs>(args: SelectSubset<T, EquipmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTypes and returns the data updated in the database.
     * @param {EquipmentTypeUpdateManyAndReturnArgs} args - Arguments to update many EquipmentTypes.
     * @example
     * // Update many EquipmentTypes
     * const equipmentType = await prisma.equipmentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentTypes and only return the `id`
     * const equipmentTypeWithIdOnly = await prisma.equipmentType.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentType.
     * @param {EquipmentTypeUpsertArgs} args - Arguments to update or create a EquipmentType.
     * @example
     * // Update or create a EquipmentType
     * const equipmentType = await prisma.equipmentType.upsert({
     *   create: {
     *     // ... data to create a EquipmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentType we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentTypeUpsertArgs>(args: SelectSubset<T, EquipmentTypeUpsertArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeCountArgs} args - Arguments to filter EquipmentTypes to count.
     * @example
     * // Count the number of EquipmentTypes
     * const count = await prisma.equipmentType.count({
     *   where: {
     *     // ... the filter for the EquipmentTypes we want to count
     *   }
     * })
    **/
    count<T extends EquipmentTypeCountArgs>(
      args?: Subset<T, EquipmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentTypeAggregateArgs>(args: Subset<T, EquipmentTypeAggregateArgs>): Prisma.PrismaPromise<GetEquipmentTypeAggregateType<T>>

    /**
     * Group by EquipmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTypeGroupByArgs} args - Group by arguments.
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
      T extends EquipmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentType model
   */
  readonly fields: EquipmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Equipments<T extends EquipmentType$EquipmentsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentType$EquipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EquipmentType model
   */
  interface EquipmentTypeFieldRefs {
    readonly id: FieldRef<"EquipmentType", 'String'>
    readonly name: FieldRef<"EquipmentType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentType findUnique
   */
  export type EquipmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType findUniqueOrThrow
   */
  export type EquipmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType findFirst
   */
  export type EquipmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTypes.
     */
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType findFirstOrThrow
   */
  export type EquipmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentType to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTypes.
     */
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType findMany
   */
  export type EquipmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTypes to fetch.
     */
    where?: EquipmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTypes to fetch.
     */
    orderBy?: EquipmentTypeOrderByWithRelationInput | EquipmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentTypes.
     */
    cursor?: EquipmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTypes.
     */
    skip?: number
    distinct?: EquipmentTypeScalarFieldEnum | EquipmentTypeScalarFieldEnum[]
  }

  /**
   * EquipmentType create
   */
  export type EquipmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentType.
     */
    data: XOR<EquipmentTypeCreateInput, EquipmentTypeUncheckedCreateInput>
  }

  /**
   * EquipmentType createMany
   */
  export type EquipmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentTypes.
     */
    data: EquipmentTypeCreateManyInput | EquipmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentType createManyAndReturn
   */
  export type EquipmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentTypes.
     */
    data: EquipmentTypeCreateManyInput | EquipmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentType update
   */
  export type EquipmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentType.
     */
    data: XOR<EquipmentTypeUpdateInput, EquipmentTypeUncheckedUpdateInput>
    /**
     * Choose, which EquipmentType to update.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType updateMany
   */
  export type EquipmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentTypes.
     */
    data: XOR<EquipmentTypeUpdateManyMutationInput, EquipmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTypes to update
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to update.
     */
    limit?: number
  }

  /**
   * EquipmentType updateManyAndReturn
   */
  export type EquipmentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentTypes.
     */
    data: XOR<EquipmentTypeUpdateManyMutationInput, EquipmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTypes to update
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to update.
     */
    limit?: number
  }

  /**
   * EquipmentType upsert
   */
  export type EquipmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentType to update in case it exists.
     */
    where: EquipmentTypeWhereUniqueInput
    /**
     * In case the EquipmentType found by the `where` argument doesn't exist, create a new EquipmentType with this data.
     */
    create: XOR<EquipmentTypeCreateInput, EquipmentTypeUncheckedCreateInput>
    /**
     * In case the EquipmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentTypeUpdateInput, EquipmentTypeUncheckedUpdateInput>
  }

  /**
   * EquipmentType delete
   */
  export type EquipmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
    /**
     * Filter which EquipmentType to delete.
     */
    where: EquipmentTypeWhereUniqueInput
  }

  /**
   * EquipmentType deleteMany
   */
  export type EquipmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentTypes to delete
     */
    where?: EquipmentTypeWhereInput
    /**
     * Limit how many EquipmentTypes to delete.
     */
    limit?: number
  }

  /**
   * EquipmentType.Equipments
   */
  export type EquipmentType$EquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * EquipmentType without action
   */
  export type EquipmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentType
     */
    select?: EquipmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentType
     */
    omit?: EquipmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroupId: string | null
    equipmentTypeId: string | null
    picture: string | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroupId: string | null
    equipmentTypeId: string | null
    picture: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    muscleGroupId: number
    equipmentTypeId: number
    picture: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
    muscleGroupId?: true
    equipmentTypeId?: true
    picture?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
    muscleGroupId?: true
    equipmentTypeId?: true
    picture?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    muscleGroupId?: true
    equipmentTypeId?: true
    picture?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    name: string
    muscleGroupId: string
    equipmentTypeId: string
    picture: string | null
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupId?: boolean
    equipmentTypeId?: boolean
    picture?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    exercises?: boolean | Equipment$exercisesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupId?: boolean
    equipmentTypeId?: boolean
    picture?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroupId?: boolean
    equipmentTypeId?: boolean
    picture?: boolean
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
    muscleGroupId?: boolean
    equipmentTypeId?: boolean
    picture?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "muscleGroupId" | "equipmentTypeId" | "picture", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
    exercises?: boolean | Equipment$exercisesArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    muscleGroup?: boolean | MuscleGroupDefaultArgs<ExtArgs>
    equipmentType?: boolean | EquipmentTypeDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      muscleGroup: Prisma.$MuscleGroupPayload<ExtArgs>
      equipmentType: Prisma.$EquipmentTypePayload<ExtArgs>
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleGroupId: string
      equipmentTypeId: string
      picture: string | null
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
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
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    muscleGroup<T extends MuscleGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MuscleGroupDefaultArgs<ExtArgs>>): Prisma__MuscleGroupClient<$Result.GetResult<Prisma.$MuscleGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipmentType<T extends EquipmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentTypeDefaultArgs<ExtArgs>>): Prisma__EquipmentTypeClient<$Result.GetResult<Prisma.$EquipmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercises<T extends Equipment$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly muscleGroupId: FieldRef<"Equipment", 'String'>
    readonly equipmentTypeId: FieldRef<"Equipment", 'String'>
    readonly picture: FieldRef<"Equipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.exercises
   */
  export type Equipment$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    active: boolean | null
    userId: string | null
    created_at: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    active: boolean | null
    userId: string | null
    created_at: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    active: number
    userId: number
    created_at: number
    _all: number
  }


  export type WorkoutMinAggregateInputType = {
    id?: true
    active?: true
    userId?: true
    created_at?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    active?: true
    userId?: true
    created_at?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    active?: true
    userId?: true
    created_at?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    active: boolean
    userId: string
    created_at: Date
    _count: WorkoutCountAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    userId?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutDetails?: boolean | Workout$workoutDetailsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    userId?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    active?: boolean
    userId?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    active?: boolean
    userId?: boolean
    created_at?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "active" | "userId" | "created_at", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workoutDetails?: boolean | Workout$workoutDetailsArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workoutDetails: Prisma.$WorkoutUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      active: boolean
      userId: string
      created_at: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts and returns the data updated in the database.
     * @param {WorkoutUpdateManyAndReturnArgs} args - Arguments to update many Workouts.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workoutDetails<T extends Workout$workoutDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Workout$workoutDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly active: FieldRef<"Workout", 'Boolean'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly created_at: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout updateManyAndReturn
   */
  export type WorkoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.workoutDetails
   */
  export type Workout$workoutDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    where?: WorkoutUnitWhereInput
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    cursor?: WorkoutUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutUnitScalarFieldEnum | WorkoutUnitScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutUnit
   */

  export type AggregateWorkoutUnit = {
    _count: WorkoutUnitCountAggregateOutputType | null
    _avg: WorkoutUnitAvgAggregateOutputType | null
    _sum: WorkoutUnitSumAggregateOutputType | null
    _min: WorkoutUnitMinAggregateOutputType | null
    _max: WorkoutUnitMaxAggregateOutputType | null
  }

  export type WorkoutUnitAvgAggregateOutputType = {
    repetitions: number | null
    series: number | null
    rest: number | null
  }

  export type WorkoutUnitSumAggregateOutputType = {
    repetitions: number | null
    series: number | null
    rest: number | null
  }

  export type WorkoutUnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    exerciseId: string | null
    repetitions: number | null
    series: number | null
    description: string | null
    details: string | null
    rest: number | null
    workoutId: string | null
  }

  export type WorkoutUnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    exerciseId: string | null
    repetitions: number | null
    series: number | null
    description: string | null
    details: string | null
    rest: number | null
    workoutId: string | null
  }

  export type WorkoutUnitCountAggregateOutputType = {
    id: number
    name: number
    exerciseId: number
    repetitions: number
    series: number
    description: number
    details: number
    rest: number
    workoutId: number
    _all: number
  }


  export type WorkoutUnitAvgAggregateInputType = {
    repetitions?: true
    series?: true
    rest?: true
  }

  export type WorkoutUnitSumAggregateInputType = {
    repetitions?: true
    series?: true
    rest?: true
  }

  export type WorkoutUnitMinAggregateInputType = {
    id?: true
    name?: true
    exerciseId?: true
    repetitions?: true
    series?: true
    description?: true
    details?: true
    rest?: true
    workoutId?: true
  }

  export type WorkoutUnitMaxAggregateInputType = {
    id?: true
    name?: true
    exerciseId?: true
    repetitions?: true
    series?: true
    description?: true
    details?: true
    rest?: true
    workoutId?: true
  }

  export type WorkoutUnitCountAggregateInputType = {
    id?: true
    name?: true
    exerciseId?: true
    repetitions?: true
    series?: true
    description?: true
    details?: true
    rest?: true
    workoutId?: true
    _all?: true
  }

  export type WorkoutUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutUnit to aggregate.
     */
    where?: WorkoutUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutUnits to fetch.
     */
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutUnits
    **/
    _count?: true | WorkoutUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutUnitMaxAggregateInputType
  }

  export type GetWorkoutUnitAggregateType<T extends WorkoutUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutUnit[P]>
      : GetScalarType<T[P], AggregateWorkoutUnit[P]>
  }




  export type WorkoutUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutUnitWhereInput
    orderBy?: WorkoutUnitOrderByWithAggregationInput | WorkoutUnitOrderByWithAggregationInput[]
    by: WorkoutUnitScalarFieldEnum[] | WorkoutUnitScalarFieldEnum
    having?: WorkoutUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutUnitCountAggregateInputType | true
    _avg?: WorkoutUnitAvgAggregateInputType
    _sum?: WorkoutUnitSumAggregateInputType
    _min?: WorkoutUnitMinAggregateInputType
    _max?: WorkoutUnitMaxAggregateInputType
  }

  export type WorkoutUnitGroupByOutputType = {
    id: string
    name: string
    exerciseId: string
    repetitions: number
    series: number
    description: string
    details: string
    rest: number
    workoutId: string
    _count: WorkoutUnitCountAggregateOutputType | null
    _avg: WorkoutUnitAvgAggregateOutputType | null
    _sum: WorkoutUnitSumAggregateOutputType | null
    _min: WorkoutUnitMinAggregateOutputType | null
    _max: WorkoutUnitMaxAggregateOutputType | null
  }

  type GetWorkoutUnitGroupByPayload<T extends WorkoutUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutUnitGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutUnitGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    series?: boolean
    description?: boolean
    details?: boolean
    rest?: boolean
    workoutId?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutUnit"]>

  export type WorkoutUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    series?: boolean
    description?: boolean
    details?: boolean
    rest?: boolean
    workoutId?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutUnit"]>

  export type WorkoutUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    series?: boolean
    description?: boolean
    details?: boolean
    rest?: boolean
    workoutId?: boolean
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutUnit"]>

  export type WorkoutUnitSelectScalar = {
    id?: boolean
    name?: boolean
    exerciseId?: boolean
    repetitions?: boolean
    series?: boolean
    description?: boolean
    details?: boolean
    rest?: boolean
    workoutId?: boolean
  }

  export type WorkoutUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "exerciseId" | "repetitions" | "series" | "description" | "details" | "rest" | "workoutId", ExtArgs["result"]["workoutUnit"]>
  export type WorkoutUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type WorkoutUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type WorkoutUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }

  export type $WorkoutUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutUnit"
    objects: {
      exercise: Prisma.$ExercisePayload<ExtArgs>
      workout: Prisma.$WorkoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      exerciseId: string
      repetitions: number
      series: number
      description: string
      details: string
      rest: number
      workoutId: string
    }, ExtArgs["result"]["workoutUnit"]>
    composites: {}
  }

  type WorkoutUnitGetPayload<S extends boolean | null | undefined | WorkoutUnitDefaultArgs> = $Result.GetResult<Prisma.$WorkoutUnitPayload, S>

  type WorkoutUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutUnitCountAggregateInputType | true
    }

  export interface WorkoutUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutUnit'], meta: { name: 'WorkoutUnit' } }
    /**
     * Find zero or one WorkoutUnit that matches the filter.
     * @param {WorkoutUnitFindUniqueArgs} args - Arguments to find a WorkoutUnit
     * @example
     * // Get one WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutUnitFindUniqueArgs>(args: SelectSubset<T, WorkoutUnitFindUniqueArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutUnitFindUniqueOrThrowArgs} args - Arguments to find a WorkoutUnit
     * @example
     * // Get one WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitFindFirstArgs} args - Arguments to find a WorkoutUnit
     * @example
     * // Get one WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutUnitFindFirstArgs>(args?: SelectSubset<T, WorkoutUnitFindFirstArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitFindFirstOrThrowArgs} args - Arguments to find a WorkoutUnit
     * @example
     * // Get one WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutUnits
     * const workoutUnits = await prisma.workoutUnit.findMany()
     * 
     * // Get first 10 WorkoutUnits
     * const workoutUnits = await prisma.workoutUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutUnitWithIdOnly = await prisma.workoutUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutUnitFindManyArgs>(args?: SelectSubset<T, WorkoutUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutUnit.
     * @param {WorkoutUnitCreateArgs} args - Arguments to create a WorkoutUnit.
     * @example
     * // Create one WorkoutUnit
     * const WorkoutUnit = await prisma.workoutUnit.create({
     *   data: {
     *     // ... data to create a WorkoutUnit
     *   }
     * })
     * 
     */
    create<T extends WorkoutUnitCreateArgs>(args: SelectSubset<T, WorkoutUnitCreateArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutUnits.
     * @param {WorkoutUnitCreateManyArgs} args - Arguments to create many WorkoutUnits.
     * @example
     * // Create many WorkoutUnits
     * const workoutUnit = await prisma.workoutUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutUnitCreateManyArgs>(args?: SelectSubset<T, WorkoutUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutUnits and returns the data saved in the database.
     * @param {WorkoutUnitCreateManyAndReturnArgs} args - Arguments to create many WorkoutUnits.
     * @example
     * // Create many WorkoutUnits
     * const workoutUnit = await prisma.workoutUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutUnits and only return the `id`
     * const workoutUnitWithIdOnly = await prisma.workoutUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutUnit.
     * @param {WorkoutUnitDeleteArgs} args - Arguments to delete one WorkoutUnit.
     * @example
     * // Delete one WorkoutUnit
     * const WorkoutUnit = await prisma.workoutUnit.delete({
     *   where: {
     *     // ... filter to delete one WorkoutUnit
     *   }
     * })
     * 
     */
    delete<T extends WorkoutUnitDeleteArgs>(args: SelectSubset<T, WorkoutUnitDeleteArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutUnit.
     * @param {WorkoutUnitUpdateArgs} args - Arguments to update one WorkoutUnit.
     * @example
     * // Update one WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUnitUpdateArgs>(args: SelectSubset<T, WorkoutUnitUpdateArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutUnits.
     * @param {WorkoutUnitDeleteManyArgs} args - Arguments to filter WorkoutUnits to delete.
     * @example
     * // Delete a few WorkoutUnits
     * const { count } = await prisma.workoutUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutUnitDeleteManyArgs>(args?: SelectSubset<T, WorkoutUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutUnits
     * const workoutUnit = await prisma.workoutUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUnitUpdateManyArgs>(args: SelectSubset<T, WorkoutUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutUnits and returns the data updated in the database.
     * @param {WorkoutUnitUpdateManyAndReturnArgs} args - Arguments to update many WorkoutUnits.
     * @example
     * // Update many WorkoutUnits
     * const workoutUnit = await prisma.workoutUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutUnits and only return the `id`
     * const workoutUnitWithIdOnly = await prisma.workoutUnit.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkoutUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutUnit.
     * @param {WorkoutUnitUpsertArgs} args - Arguments to update or create a WorkoutUnit.
     * @example
     * // Update or create a WorkoutUnit
     * const workoutUnit = await prisma.workoutUnit.upsert({
     *   create: {
     *     // ... data to create a WorkoutUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutUnit we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUnitUpsertArgs>(args: SelectSubset<T, WorkoutUnitUpsertArgs<ExtArgs>>): Prisma__WorkoutUnitClient<$Result.GetResult<Prisma.$WorkoutUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitCountArgs} args - Arguments to filter WorkoutUnits to count.
     * @example
     * // Count the number of WorkoutUnits
     * const count = await prisma.workoutUnit.count({
     *   where: {
     *     // ... the filter for the WorkoutUnits we want to count
     *   }
     * })
    **/
    count<T extends WorkoutUnitCountArgs>(
      args?: Subset<T, WorkoutUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutUnitAggregateArgs>(args: Subset<T, WorkoutUnitAggregateArgs>): Prisma.PrismaPromise<GetWorkoutUnitAggregateType<T>>

    /**
     * Group by WorkoutUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUnitGroupByArgs} args - Group by arguments.
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
      T extends WorkoutUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutUnitGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutUnit model
   */
  readonly fields: WorkoutUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutUnit model
   */
  interface WorkoutUnitFieldRefs {
    readonly id: FieldRef<"WorkoutUnit", 'String'>
    readonly name: FieldRef<"WorkoutUnit", 'String'>
    readonly exerciseId: FieldRef<"WorkoutUnit", 'String'>
    readonly repetitions: FieldRef<"WorkoutUnit", 'Int'>
    readonly series: FieldRef<"WorkoutUnit", 'Int'>
    readonly description: FieldRef<"WorkoutUnit", 'String'>
    readonly details: FieldRef<"WorkoutUnit", 'String'>
    readonly rest: FieldRef<"WorkoutUnit", 'Int'>
    readonly workoutId: FieldRef<"WorkoutUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutUnit findUnique
   */
  export type WorkoutUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutUnit to fetch.
     */
    where: WorkoutUnitWhereUniqueInput
  }

  /**
   * WorkoutUnit findUniqueOrThrow
   */
  export type WorkoutUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutUnit to fetch.
     */
    where: WorkoutUnitWhereUniqueInput
  }

  /**
   * WorkoutUnit findFirst
   */
  export type WorkoutUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutUnit to fetch.
     */
    where?: WorkoutUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutUnits to fetch.
     */
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutUnits.
     */
    cursor?: WorkoutUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutUnits.
     */
    distinct?: WorkoutUnitScalarFieldEnum | WorkoutUnitScalarFieldEnum[]
  }

  /**
   * WorkoutUnit findFirstOrThrow
   */
  export type WorkoutUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutUnit to fetch.
     */
    where?: WorkoutUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutUnits to fetch.
     */
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutUnits.
     */
    cursor?: WorkoutUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutUnits.
     */
    distinct?: WorkoutUnitScalarFieldEnum | WorkoutUnitScalarFieldEnum[]
  }

  /**
   * WorkoutUnit findMany
   */
  export type WorkoutUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutUnits to fetch.
     */
    where?: WorkoutUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutUnits to fetch.
     */
    orderBy?: WorkoutUnitOrderByWithRelationInput | WorkoutUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutUnits.
     */
    cursor?: WorkoutUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutUnits.
     */
    skip?: number
    distinct?: WorkoutUnitScalarFieldEnum | WorkoutUnitScalarFieldEnum[]
  }

  /**
   * WorkoutUnit create
   */
  export type WorkoutUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutUnit.
     */
    data: XOR<WorkoutUnitCreateInput, WorkoutUnitUncheckedCreateInput>
  }

  /**
   * WorkoutUnit createMany
   */
  export type WorkoutUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutUnits.
     */
    data: WorkoutUnitCreateManyInput | WorkoutUnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutUnit createManyAndReturn
   */
  export type WorkoutUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutUnits.
     */
    data: WorkoutUnitCreateManyInput | WorkoutUnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutUnit update
   */
  export type WorkoutUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutUnit.
     */
    data: XOR<WorkoutUnitUpdateInput, WorkoutUnitUncheckedUpdateInput>
    /**
     * Choose, which WorkoutUnit to update.
     */
    where: WorkoutUnitWhereUniqueInput
  }

  /**
   * WorkoutUnit updateMany
   */
  export type WorkoutUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutUnits.
     */
    data: XOR<WorkoutUnitUpdateManyMutationInput, WorkoutUnitUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutUnits to update
     */
    where?: WorkoutUnitWhereInput
    /**
     * Limit how many WorkoutUnits to update.
     */
    limit?: number
  }

  /**
   * WorkoutUnit updateManyAndReturn
   */
  export type WorkoutUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutUnits.
     */
    data: XOR<WorkoutUnitUpdateManyMutationInput, WorkoutUnitUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutUnits to update
     */
    where?: WorkoutUnitWhereInput
    /**
     * Limit how many WorkoutUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutUnit upsert
   */
  export type WorkoutUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutUnit to update in case it exists.
     */
    where: WorkoutUnitWhereUniqueInput
    /**
     * In case the WorkoutUnit found by the `where` argument doesn't exist, create a new WorkoutUnit with this data.
     */
    create: XOR<WorkoutUnitCreateInput, WorkoutUnitUncheckedCreateInput>
    /**
     * In case the WorkoutUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUnitUpdateInput, WorkoutUnitUncheckedUpdateInput>
  }

  /**
   * WorkoutUnit delete
   */
  export type WorkoutUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
    /**
     * Filter which WorkoutUnit to delete.
     */
    where: WorkoutUnitWhereUniqueInput
  }

  /**
   * WorkoutUnit deleteMany
   */
  export type WorkoutUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutUnits to delete
     */
    where?: WorkoutUnitWhereInput
    /**
     * Limit how many WorkoutUnits to delete.
     */
    limit?: number
  }

  /**
   * WorkoutUnit without action
   */
  export type WorkoutUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutUnit
     */
    select?: WorkoutUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutUnit
     */
    omit?: WorkoutUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutUnitInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    picture: 'picture',
    admin: 'admin',
    active: 'active'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MuscleGroupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MuscleGroupScalarFieldEnum = (typeof MuscleGroupScalarFieldEnum)[keyof typeof MuscleGroupScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleGroupid: 'muscleGroupid',
    equipmentId: 'equipmentId'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const EquipmentTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EquipmentTypeScalarFieldEnum = (typeof EquipmentTypeScalarFieldEnum)[keyof typeof EquipmentTypeScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleGroupId: 'muscleGroupId',
    equipmentTypeId: 'equipmentTypeId',
    picture: 'picture'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    active: 'active',
    userId: 'userId',
    created_at: 'created_at'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const WorkoutUnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    exerciseId: 'exerciseId',
    repetitions: 'repetitions',
    series: 'series',
    description: 'description',
    details: 'details',
    rest: 'rest',
    workoutId: 'workoutId'
  };

  export type WorkoutUnitScalarFieldEnum = (typeof WorkoutUnitScalarFieldEnum)[keyof typeof WorkoutUnitScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    admin?: BoolFilter<"User"> | boolean
    active?: BoolFilter<"User"> | boolean
    workouts?: WorkoutListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    admin?: SortOrder
    active?: SortOrder
    workouts?: WorkoutOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    admin?: BoolFilter<"User"> | boolean
    active?: BoolFilter<"User"> | boolean
    workouts?: WorkoutListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    admin?: SortOrder
    active?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    active?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type MuscleGroupWhereInput = {
    AND?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    OR?: MuscleGroupWhereInput[]
    NOT?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    id?: StringFilter<"MuscleGroup"> | string
    name?: StringFilter<"MuscleGroup"> | string
    equipments?: EquipmentListRelationFilter
    exercises?: ExerciseListRelationFilter
  }

  export type MuscleGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type MuscleGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    OR?: MuscleGroupWhereInput[]
    NOT?: MuscleGroupWhereInput | MuscleGroupWhereInput[]
    name?: StringFilter<"MuscleGroup"> | string
    equipments?: EquipmentListRelationFilter
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type MuscleGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MuscleGroupCountOrderByAggregateInput
    _max?: MuscleGroupMaxOrderByAggregateInput
    _min?: MuscleGroupMinOrderByAggregateInput
  }

  export type MuscleGroupScalarWhereWithAggregatesInput = {
    AND?: MuscleGroupScalarWhereWithAggregatesInput | MuscleGroupScalarWhereWithAggregatesInput[]
    OR?: MuscleGroupScalarWhereWithAggregatesInput[]
    NOT?: MuscleGroupScalarWhereWithAggregatesInput | MuscleGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MuscleGroup"> | string
    name?: StringWithAggregatesFilter<"MuscleGroup"> | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroupid?: StringFilter<"Exercise"> | string
    equipmentId?: StringFilter<"Exercise"> | string
    muscleGroup?: XOR<MuscleGroupScalarRelationFilter, MuscleGroupWhereInput>
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    workoutDetails?: WorkoutUnitListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupid?: SortOrder
    equipmentId?: SortOrder
    muscleGroup?: MuscleGroupOrderByWithRelationInput
    equipment?: EquipmentOrderByWithRelationInput
    workoutDetails?: WorkoutUnitOrderByRelationAggregateInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    muscleGroupid?: StringFilter<"Exercise"> | string
    equipmentId?: StringFilter<"Exercise"> | string
    muscleGroup?: XOR<MuscleGroupScalarRelationFilter, MuscleGroupWhereInput>
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    workoutDetails?: WorkoutUnitListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupid?: SortOrder
    equipmentId?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroupid?: StringWithAggregatesFilter<"Exercise"> | string
    equipmentId?: StringWithAggregatesFilter<"Exercise"> | string
  }

  export type EquipmentTypeWhereInput = {
    AND?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    OR?: EquipmentTypeWhereInput[]
    NOT?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    id?: StringFilter<"EquipmentType"> | string
    name?: StringFilter<"EquipmentType"> | string
    Equipments?: EquipmentListRelationFilter
  }

  export type EquipmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type EquipmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    OR?: EquipmentTypeWhereInput[]
    NOT?: EquipmentTypeWhereInput | EquipmentTypeWhereInput[]
    name?: StringFilter<"EquipmentType"> | string
    Equipments?: EquipmentListRelationFilter
  }, "id">

  export type EquipmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: EquipmentTypeCountOrderByAggregateInput
    _max?: EquipmentTypeMaxOrderByAggregateInput
    _min?: EquipmentTypeMinOrderByAggregateInput
  }

  export type EquipmentTypeScalarWhereWithAggregatesInput = {
    AND?: EquipmentTypeScalarWhereWithAggregatesInput | EquipmentTypeScalarWhereWithAggregatesInput[]
    OR?: EquipmentTypeScalarWhereWithAggregatesInput[]
    NOT?: EquipmentTypeScalarWhereWithAggregatesInput | EquipmentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EquipmentType"> | string
    name?: StringWithAggregatesFilter<"EquipmentType"> | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    muscleGroupId?: StringFilter<"Equipment"> | string
    equipmentTypeId?: StringFilter<"Equipment"> | string
    picture?: StringNullableFilter<"Equipment"> | string | null
    muscleGroup?: XOR<MuscleGroupScalarRelationFilter, MuscleGroupWhereInput>
    equipmentType?: XOR<EquipmentTypeScalarRelationFilter, EquipmentTypeWhereInput>
    exercises?: ExerciseListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupId?: SortOrder
    equipmentTypeId?: SortOrder
    picture?: SortOrderInput | SortOrder
    muscleGroup?: MuscleGroupOrderByWithRelationInput
    equipmentType?: EquipmentTypeOrderByWithRelationInput
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringFilter<"Equipment"> | string
    muscleGroupId?: StringFilter<"Equipment"> | string
    equipmentTypeId?: StringFilter<"Equipment"> | string
    picture?: StringNullableFilter<"Equipment"> | string | null
    muscleGroup?: XOR<MuscleGroupScalarRelationFilter, MuscleGroupWhereInput>
    equipmentType?: XOR<EquipmentTypeScalarRelationFilter, EquipmentTypeWhereInput>
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupId?: SortOrder
    equipmentTypeId?: SortOrder
    picture?: SortOrderInput | SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringWithAggregatesFilter<"Equipment"> | string
    muscleGroupId?: StringWithAggregatesFilter<"Equipment"> | string
    equipmentTypeId?: StringWithAggregatesFilter<"Equipment"> | string
    picture?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    active?: BoolFilter<"Workout"> | boolean
    userId?: StringFilter<"Workout"> | string
    created_at?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workoutDetails?: WorkoutUnitListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    workoutDetails?: WorkoutUnitOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    active?: BoolFilter<"Workout"> | boolean
    userId?: StringFilter<"Workout"> | string
    created_at?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workoutDetails?: WorkoutUnitListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    active?: BoolWithAggregatesFilter<"Workout"> | boolean
    userId?: StringWithAggregatesFilter<"Workout"> | string
    created_at?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type WorkoutUnitWhereInput = {
    AND?: WorkoutUnitWhereInput | WorkoutUnitWhereInput[]
    OR?: WorkoutUnitWhereInput[]
    NOT?: WorkoutUnitWhereInput | WorkoutUnitWhereInput[]
    id?: StringFilter<"WorkoutUnit"> | string
    name?: StringFilter<"WorkoutUnit"> | string
    exerciseId?: StringFilter<"WorkoutUnit"> | string
    repetitions?: IntFilter<"WorkoutUnit"> | number
    series?: IntFilter<"WorkoutUnit"> | number
    description?: StringFilter<"WorkoutUnit"> | string
    details?: StringFilter<"WorkoutUnit"> | string
    rest?: IntFilter<"WorkoutUnit"> | number
    workoutId?: StringFilter<"WorkoutUnit"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }

  export type WorkoutUnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    series?: SortOrder
    description?: SortOrder
    details?: SortOrder
    rest?: SortOrder
    workoutId?: SortOrder
    exercise?: ExerciseOrderByWithRelationInput
    workout?: WorkoutOrderByWithRelationInput
  }

  export type WorkoutUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutUnitWhereInput | WorkoutUnitWhereInput[]
    OR?: WorkoutUnitWhereInput[]
    NOT?: WorkoutUnitWhereInput | WorkoutUnitWhereInput[]
    name?: StringFilter<"WorkoutUnit"> | string
    exerciseId?: StringFilter<"WorkoutUnit"> | string
    repetitions?: IntFilter<"WorkoutUnit"> | number
    series?: IntFilter<"WorkoutUnit"> | number
    description?: StringFilter<"WorkoutUnit"> | string
    details?: StringFilter<"WorkoutUnit"> | string
    rest?: IntFilter<"WorkoutUnit"> | number
    workoutId?: StringFilter<"WorkoutUnit"> | string
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }, "id">

  export type WorkoutUnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    series?: SortOrder
    description?: SortOrder
    details?: SortOrder
    rest?: SortOrder
    workoutId?: SortOrder
    _count?: WorkoutUnitCountOrderByAggregateInput
    _avg?: WorkoutUnitAvgOrderByAggregateInput
    _max?: WorkoutUnitMaxOrderByAggregateInput
    _min?: WorkoutUnitMinOrderByAggregateInput
    _sum?: WorkoutUnitSumOrderByAggregateInput
  }

  export type WorkoutUnitScalarWhereWithAggregatesInput = {
    AND?: WorkoutUnitScalarWhereWithAggregatesInput | WorkoutUnitScalarWhereWithAggregatesInput[]
    OR?: WorkoutUnitScalarWhereWithAggregatesInput[]
    NOT?: WorkoutUnitScalarWhereWithAggregatesInput | WorkoutUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutUnit"> | string
    name?: StringWithAggregatesFilter<"WorkoutUnit"> | string
    exerciseId?: StringWithAggregatesFilter<"WorkoutUnit"> | string
    repetitions?: IntWithAggregatesFilter<"WorkoutUnit"> | number
    series?: IntWithAggregatesFilter<"WorkoutUnit"> | number
    description?: StringWithAggregatesFilter<"WorkoutUnit"> | string
    details?: StringWithAggregatesFilter<"WorkoutUnit"> | string
    rest?: IntWithAggregatesFilter<"WorkoutUnit"> | number
    workoutId?: StringWithAggregatesFilter<"WorkoutUnit"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    picture?: string | null
    admin: boolean
    active: boolean
    workouts?: WorkoutCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    picture?: string | null
    admin: boolean
    active: boolean
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    picture?: string | null
    admin: boolean
    active: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MuscleGroupCreateInput = {
    id?: string
    name: string
    equipments?: EquipmentCreateNestedManyWithoutMuscleGroupInput
    exercises?: ExerciseCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateInput = {
    id?: string
    name: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutMuscleGroupInput
    exercises?: ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutMuscleGroupNestedInput
    exercises?: ExerciseUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutMuscleGroupNestedInput
    exercises?: ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupCreateManyInput = {
    id?: string
    name: string
  }

  export type MuscleGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MuscleGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    muscleGroup: MuscleGroupCreateNestedOneWithoutExercisesInput
    equipment?: EquipmentCreateNestedOneWithoutExercisesInput
    workoutDetails?: WorkoutUnitCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    name: string
    muscleGroupid: string
    equipmentId: string
    workoutDetails?: WorkoutUnitUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutExercisesNestedInput
    equipment?: EquipmentUpdateOneWithoutExercisesNestedInput
    workoutDetails?: WorkoutUnitUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupid?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    workoutDetails?: WorkoutUnitUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: string
    name: string
    muscleGroupid: string
    equipmentId: string
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupid?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeCreateInput = {
    id?: string
    name: string
    Equipments?: EquipmentCreateNestedManyWithoutEquipmentTypeInput
  }

  export type EquipmentTypeUncheckedCreateInput = {
    id?: string
    name: string
    Equipments?: EquipmentUncheckedCreateNestedManyWithoutEquipmentTypeInput
  }

  export type EquipmentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Equipments?: EquipmentUpdateManyWithoutEquipmentTypeNestedInput
  }

  export type EquipmentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Equipments?: EquipmentUncheckedUpdateManyWithoutEquipmentTypeNestedInput
  }

  export type EquipmentTypeCreateManyInput = {
    id?: string
    name: string
  }

  export type EquipmentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateInput = {
    id?: string
    name: string
    picture?: string | null
    muscleGroup: MuscleGroupCreateNestedOneWithoutEquipmentsInput
    equipmentType: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    exercises?: ExerciseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    name: string
    muscleGroupId: string
    equipmentTypeId: string
    picture?: string | null
    exercises?: ExerciseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutEquipmentsNestedInput
    equipmentType?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    exercises?: ExerciseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupId?: StringFieldUpdateOperationsInput | string
    equipmentTypeId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    name: string
    muscleGroupId: string
    equipmentTypeId: string
    picture?: string | null
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupId?: StringFieldUpdateOperationsInput | string
    equipmentTypeId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutCreateInput = {
    id?: string
    active?: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
    workoutDetails?: WorkoutUnitCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    active?: boolean
    userId: string
    created_at?: Date | string
    workoutDetails?: WorkoutUnitUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    workoutDetails?: WorkoutUnitUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutDetails?: WorkoutUnitUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    active?: boolean
    userId: string
    created_at?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUnitCreateInput = {
    id?: string
    name: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    exercise: ExerciseCreateNestedOneWithoutWorkoutDetailsInput
    workout: WorkoutCreateNestedOneWithoutWorkoutDetailsInput
  }

  export type WorkoutUnitUncheckedCreateInput = {
    id?: string
    name: string
    exerciseId: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    workoutId: string
  }

  export type WorkoutUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutDetailsNestedInput
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutDetailsNestedInput
  }

  export type WorkoutUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    workoutId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUnitCreateManyInput = {
    id?: string
    name: string
    exerciseId: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    workoutId: string
  }

  export type WorkoutUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    workoutId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    admin?: SortOrder
    active?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    admin?: SortOrder
    active?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    picture?: SortOrder
    admin?: SortOrder
    active?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MuscleGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MuscleGroupScalarRelationFilter = {
    is?: MuscleGroupWhereInput
    isNot?: MuscleGroupWhereInput
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type WorkoutUnitListRelationFilter = {
    every?: WorkoutUnitWhereInput
    some?: WorkoutUnitWhereInput
    none?: WorkoutUnitWhereInput
  }

  export type WorkoutUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupid?: SortOrder
    equipmentId?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupid?: SortOrder
    equipmentId?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupid?: SortOrder
    equipmentId?: SortOrder
  }

  export type EquipmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentTypeScalarRelationFilter = {
    is?: EquipmentTypeWhereInput
    isNot?: EquipmentTypeWhereInput
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupId?: SortOrder
    equipmentTypeId?: SortOrder
    picture?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupId?: SortOrder
    equipmentTypeId?: SortOrder
    picture?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroupId?: SortOrder
    equipmentTypeId?: SortOrder
    picture?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
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

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type WorkoutUnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    series?: SortOrder
    description?: SortOrder
    details?: SortOrder
    rest?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutUnitAvgOrderByAggregateInput = {
    repetitions?: SortOrder
    series?: SortOrder
    rest?: SortOrder
  }

  export type WorkoutUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    series?: SortOrder
    description?: SortOrder
    details?: SortOrder
    rest?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutUnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    exerciseId?: SortOrder
    repetitions?: SortOrder
    series?: SortOrder
    description?: SortOrder
    details?: SortOrder
    rest?: SortOrder
    workoutId?: SortOrder
  }

  export type WorkoutUnitSumOrderByAggregateInput = {
    repetitions?: SortOrder
    series?: SortOrder
    rest?: SortOrder
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

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput> | EquipmentCreateWithoutMuscleGroupInput[] | EquipmentUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutMuscleGroupInput | EquipmentCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: EquipmentCreateManyMuscleGroupInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ExerciseCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput> | EquipmentCreateWithoutMuscleGroupInput[] | EquipmentUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutMuscleGroupInput | EquipmentCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: EquipmentCreateManyMuscleGroupInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput> | EquipmentCreateWithoutMuscleGroupInput[] | EquipmentUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutMuscleGroupInput | EquipmentCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutMuscleGroupInput | EquipmentUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: EquipmentCreateManyMuscleGroupInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutMuscleGroupInput | EquipmentUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutMuscleGroupInput | EquipmentUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ExerciseUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput> | EquipmentCreateWithoutMuscleGroupInput[] | EquipmentUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutMuscleGroupInput | EquipmentCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutMuscleGroupInput | EquipmentUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: EquipmentCreateManyMuscleGroupInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutMuscleGroupInput | EquipmentUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutMuscleGroupInput | EquipmentUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput = {
    create?: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput> | ExerciseCreateWithoutMuscleGroupInput[] | ExerciseUncheckedCreateWithoutMuscleGroupInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutMuscleGroupInput | ExerciseCreateOrConnectWithoutMuscleGroupInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput[]
    createMany?: ExerciseCreateManyMuscleGroupInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput | ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutMuscleGroupInput | ExerciseUpdateManyWithWhereWithoutMuscleGroupInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type MuscleGroupCreateNestedOneWithoutExercisesInput = {
    create?: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput
    connect?: MuscleGroupWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutExercisesInput = {
    create?: XOR<EquipmentCreateWithoutExercisesInput, EquipmentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutExercisesInput
    connect?: EquipmentWhereUniqueInput
  }

  export type WorkoutUnitCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput> | WorkoutUnitCreateWithoutExerciseInput[] | WorkoutUnitUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutExerciseInput | WorkoutUnitCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutUnitCreateManyExerciseInputEnvelope
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
  }

  export type WorkoutUnitUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput> | WorkoutUnitCreateWithoutExerciseInput[] | WorkoutUnitUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutExerciseInput | WorkoutUnitCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutUnitCreateManyExerciseInputEnvelope
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
  }

  export type MuscleGroupUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutExercisesInput
    upsert?: MuscleGroupUpsertWithoutExercisesInput
    connect?: MuscleGroupWhereUniqueInput
    update?: XOR<XOR<MuscleGroupUpdateToOneWithWhereWithoutExercisesInput, MuscleGroupUpdateWithoutExercisesInput>, MuscleGroupUncheckedUpdateWithoutExercisesInput>
  }

  export type EquipmentUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<EquipmentCreateWithoutExercisesInput, EquipmentUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutExercisesInput
    upsert?: EquipmentUpsertWithoutExercisesInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutExercisesInput, EquipmentUpdateWithoutExercisesInput>, EquipmentUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUnitUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput> | WorkoutUnitCreateWithoutExerciseInput[] | WorkoutUnitUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutExerciseInput | WorkoutUnitCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutUnitUpsertWithWhereUniqueWithoutExerciseInput | WorkoutUnitUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutUnitCreateManyExerciseInputEnvelope
    set?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    disconnect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    delete?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    update?: WorkoutUnitUpdateWithWhereUniqueWithoutExerciseInput | WorkoutUnitUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutUnitUpdateManyWithWhereWithoutExerciseInput | WorkoutUnitUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
  }

  export type WorkoutUnitUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput> | WorkoutUnitCreateWithoutExerciseInput[] | WorkoutUnitUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutExerciseInput | WorkoutUnitCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutUnitUpsertWithWhereUniqueWithoutExerciseInput | WorkoutUnitUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutUnitCreateManyExerciseInputEnvelope
    set?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    disconnect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    delete?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    update?: WorkoutUnitUpdateWithWhereUniqueWithoutExerciseInput | WorkoutUnitUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutUnitUpdateManyWithWhereWithoutExerciseInput | WorkoutUnitUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
  }

  export type EquipmentCreateNestedManyWithoutEquipmentTypeInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput> | EquipmentCreateWithoutEquipmentTypeInput[] | EquipmentUncheckedCreateWithoutEquipmentTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentTypeInput | EquipmentCreateOrConnectWithoutEquipmentTypeInput[]
    createMany?: EquipmentCreateManyEquipmentTypeInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutEquipmentTypeInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput> | EquipmentCreateWithoutEquipmentTypeInput[] | EquipmentUncheckedCreateWithoutEquipmentTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentTypeInput | EquipmentCreateOrConnectWithoutEquipmentTypeInput[]
    createMany?: EquipmentCreateManyEquipmentTypeInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutEquipmentTypeNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput> | EquipmentCreateWithoutEquipmentTypeInput[] | EquipmentUncheckedCreateWithoutEquipmentTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentTypeInput | EquipmentCreateOrConnectWithoutEquipmentTypeInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipmentTypeInput | EquipmentUpsertWithWhereUniqueWithoutEquipmentTypeInput[]
    createMany?: EquipmentCreateManyEquipmentTypeInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipmentTypeInput | EquipmentUpdateWithWhereUniqueWithoutEquipmentTypeInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipmentTypeInput | EquipmentUpdateManyWithWhereWithoutEquipmentTypeInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipmentTypeNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput> | EquipmentCreateWithoutEquipmentTypeInput[] | EquipmentUncheckedCreateWithoutEquipmentTypeInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentTypeInput | EquipmentCreateOrConnectWithoutEquipmentTypeInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipmentTypeInput | EquipmentUpsertWithWhereUniqueWithoutEquipmentTypeInput[]
    createMany?: EquipmentCreateManyEquipmentTypeInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipmentTypeInput | EquipmentUpdateWithWhereUniqueWithoutEquipmentTypeInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipmentTypeInput | EquipmentUpdateManyWithWhereWithoutEquipmentTypeInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type MuscleGroupCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<MuscleGroupCreateWithoutEquipmentsInput, MuscleGroupUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutEquipmentsInput
    connect?: MuscleGroupWhereUniqueInput
  }

  export type EquipmentTypeCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentTypeCreateOrConnectWithoutEquipmentsInput
    connect?: EquipmentTypeWhereUniqueInput
  }

  export type ExerciseCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type MuscleGroupUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<MuscleGroupCreateWithoutEquipmentsInput, MuscleGroupUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: MuscleGroupCreateOrConnectWithoutEquipmentsInput
    upsert?: MuscleGroupUpsertWithoutEquipmentsInput
    connect?: MuscleGroupWhereUniqueInput
    update?: XOR<XOR<MuscleGroupUpdateToOneWithWhereWithoutEquipmentsInput, MuscleGroupUpdateWithoutEquipmentsInput>, MuscleGroupUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentTypeCreateOrConnectWithoutEquipmentsInput
    upsert?: EquipmentTypeUpsertWithoutEquipmentsInput
    connect?: EquipmentTypeWhereUniqueInput
    update?: XOR<XOR<EquipmentTypeUpdateToOneWithWhereWithoutEquipmentsInput, EquipmentTypeUpdateWithoutEquipmentsInput>, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
  }

  export type ExerciseUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutEquipmentInput | ExerciseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutEquipmentInput | ExerciseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutEquipmentInput | ExerciseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput> | ExerciseCreateWithoutEquipmentInput[] | ExerciseUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutEquipmentInput | ExerciseCreateOrConnectWithoutEquipmentInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutEquipmentInput | ExerciseUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ExerciseCreateManyEquipmentInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutEquipmentInput | ExerciseUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutEquipmentInput | ExerciseUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutUnitCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput> | WorkoutUnitCreateWithoutWorkoutInput[] | WorkoutUnitUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutWorkoutInput | WorkoutUnitCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutUnitCreateManyWorkoutInputEnvelope
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
  }

  export type WorkoutUnitUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput> | WorkoutUnitCreateWithoutWorkoutInput[] | WorkoutUnitUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutWorkoutInput | WorkoutUnitCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutUnitCreateManyWorkoutInputEnvelope
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    upsert?: UserUpsertWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutsInput, UserUpdateWithoutWorkoutsInput>, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutUnitUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput> | WorkoutUnitCreateWithoutWorkoutInput[] | WorkoutUnitUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutWorkoutInput | WorkoutUnitCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutUnitUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutUnitUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutUnitCreateManyWorkoutInputEnvelope
    set?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    disconnect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    delete?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    update?: WorkoutUnitUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutUnitUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutUnitUpdateManyWithWhereWithoutWorkoutInput | WorkoutUnitUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
  }

  export type WorkoutUnitUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput> | WorkoutUnitCreateWithoutWorkoutInput[] | WorkoutUnitUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutUnitCreateOrConnectWithoutWorkoutInput | WorkoutUnitCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutUnitUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutUnitUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutUnitCreateManyWorkoutInputEnvelope
    set?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    disconnect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    delete?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    connect?: WorkoutUnitWhereUniqueInput | WorkoutUnitWhereUniqueInput[]
    update?: WorkoutUnitUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutUnitUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutUnitUpdateManyWithWhereWithoutWorkoutInput | WorkoutUnitUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
  }

  export type ExerciseCreateNestedOneWithoutWorkoutDetailsInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutDetailsInput, ExerciseUncheckedCreateWithoutWorkoutDetailsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutDetailsInput
    connect?: ExerciseWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutWorkoutDetailsInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutDetailsInput, WorkoutUncheckedCreateWithoutWorkoutDetailsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutDetailsInput
    connect?: WorkoutWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutDetailsNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutDetailsInput, ExerciseUncheckedCreateWithoutWorkoutDetailsInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutDetailsInput
    upsert?: ExerciseUpsertWithoutWorkoutDetailsInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutDetailsInput, ExerciseUpdateWithoutWorkoutDetailsInput>, ExerciseUncheckedUpdateWithoutWorkoutDetailsInput>
  }

  export type WorkoutUpdateOneRequiredWithoutWorkoutDetailsNestedInput = {
    create?: XOR<WorkoutCreateWithoutWorkoutDetailsInput, WorkoutUncheckedCreateWithoutWorkoutDetailsInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutWorkoutDetailsInput
    upsert?: WorkoutUpsertWithoutWorkoutDetailsInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutWorkoutDetailsInput, WorkoutUpdateWithoutWorkoutDetailsInput>, WorkoutUncheckedUpdateWithoutWorkoutDetailsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type WorkoutCreateWithoutUserInput = {
    id?: string
    active?: boolean
    created_at?: Date | string
    workoutDetails?: WorkoutUnitCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    active?: boolean
    created_at?: Date | string
    workoutDetails?: WorkoutUnitUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    active?: BoolFilter<"Workout"> | boolean
    userId?: StringFilter<"Workout"> | string
    created_at?: DateTimeFilter<"Workout"> | Date | string
  }

  export type EquipmentCreateWithoutMuscleGroupInput = {
    id?: string
    name: string
    picture?: string | null
    equipmentType: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
    exercises?: ExerciseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutMuscleGroupInput = {
    id?: string
    name: string
    equipmentTypeId: string
    picture?: string | null
    exercises?: ExerciseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutMuscleGroupInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput>
  }

  export type EquipmentCreateManyMuscleGroupInputEnvelope = {
    data: EquipmentCreateManyMuscleGroupInput | EquipmentCreateManyMuscleGroupInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseCreateWithoutMuscleGroupInput = {
    id?: string
    name: string
    equipment?: EquipmentCreateNestedOneWithoutExercisesInput
    workoutDetails?: WorkoutUnitCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutMuscleGroupInput = {
    id?: string
    name: string
    equipmentId: string
    workoutDetails?: WorkoutUnitUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseCreateManyMuscleGroupInputEnvelope = {
    data: ExerciseCreateManyMuscleGroupInput | ExerciseCreateManyMuscleGroupInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutMuscleGroupInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutMuscleGroupInput, EquipmentUncheckedUpdateWithoutMuscleGroupInput>
    create: XOR<EquipmentCreateWithoutMuscleGroupInput, EquipmentUncheckedCreateWithoutMuscleGroupInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutMuscleGroupInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutMuscleGroupInput, EquipmentUncheckedUpdateWithoutMuscleGroupInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutMuscleGroupInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutMuscleGroupInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringFilter<"Equipment"> | string
    muscleGroupId?: StringFilter<"Equipment"> | string
    equipmentTypeId?: StringFilter<"Equipment"> | string
    picture?: StringNullableFilter<"Equipment"> | string | null
  }

  export type ExerciseUpsertWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutMuscleGroupInput, ExerciseUncheckedUpdateWithoutMuscleGroupInput>
    create: XOR<ExerciseCreateWithoutMuscleGroupInput, ExerciseUncheckedCreateWithoutMuscleGroupInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutMuscleGroupInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutMuscleGroupInput, ExerciseUncheckedUpdateWithoutMuscleGroupInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutMuscleGroupInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutMuscleGroupInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroupid?: StringFilter<"Exercise"> | string
    equipmentId?: StringFilter<"Exercise"> | string
  }

  export type MuscleGroupCreateWithoutExercisesInput = {
    id?: string
    name: string
    equipments?: EquipmentCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupCreateOrConnectWithoutExercisesInput = {
    where: MuscleGroupWhereUniqueInput
    create: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
  }

  export type EquipmentCreateWithoutExercisesInput = {
    id?: string
    name: string
    picture?: string | null
    muscleGroup: MuscleGroupCreateNestedOneWithoutEquipmentsInput
    equipmentType: EquipmentTypeCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutExercisesInput = {
    id?: string
    name: string
    muscleGroupId: string
    equipmentTypeId: string
    picture?: string | null
  }

  export type EquipmentCreateOrConnectWithoutExercisesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutExercisesInput, EquipmentUncheckedCreateWithoutExercisesInput>
  }

  export type WorkoutUnitCreateWithoutExerciseInput = {
    id?: string
    name: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    workout: WorkoutCreateNestedOneWithoutWorkoutDetailsInput
  }

  export type WorkoutUnitUncheckedCreateWithoutExerciseInput = {
    id?: string
    name: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    workoutId: string
  }

  export type WorkoutUnitCreateOrConnectWithoutExerciseInput = {
    where: WorkoutUnitWhereUniqueInput
    create: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutUnitCreateManyExerciseInputEnvelope = {
    data: WorkoutUnitCreateManyExerciseInput | WorkoutUnitCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type MuscleGroupUpsertWithoutExercisesInput = {
    update: XOR<MuscleGroupUpdateWithoutExercisesInput, MuscleGroupUncheckedUpdateWithoutExercisesInput>
    create: XOR<MuscleGroupCreateWithoutExercisesInput, MuscleGroupUncheckedCreateWithoutExercisesInput>
    where?: MuscleGroupWhereInput
  }

  export type MuscleGroupUpdateToOneWithWhereWithoutExercisesInput = {
    where?: MuscleGroupWhereInput
    data: XOR<MuscleGroupUpdateWithoutExercisesInput, MuscleGroupUncheckedUpdateWithoutExercisesInput>
  }

  export type MuscleGroupUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type EquipmentUpsertWithoutExercisesInput = {
    update: XOR<EquipmentUpdateWithoutExercisesInput, EquipmentUncheckedUpdateWithoutExercisesInput>
    create: XOR<EquipmentCreateWithoutExercisesInput, EquipmentUncheckedCreateWithoutExercisesInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutExercisesInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutExercisesInput, EquipmentUncheckedUpdateWithoutExercisesInput>
  }

  export type EquipmentUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutEquipmentsNestedInput
    equipmentType?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupId?: StringFieldUpdateOperationsInput | string
    equipmentTypeId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutUnitUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutUnitWhereUniqueInput
    update: XOR<WorkoutUnitUpdateWithoutExerciseInput, WorkoutUnitUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutUnitCreateWithoutExerciseInput, WorkoutUnitUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutUnitUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutUnitWhereUniqueInput
    data: XOR<WorkoutUnitUpdateWithoutExerciseInput, WorkoutUnitUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutUnitUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutUnitScalarWhereInput
    data: XOR<WorkoutUnitUpdateManyMutationInput, WorkoutUnitUncheckedUpdateManyWithoutExerciseInput>
  }

  export type WorkoutUnitScalarWhereInput = {
    AND?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
    OR?: WorkoutUnitScalarWhereInput[]
    NOT?: WorkoutUnitScalarWhereInput | WorkoutUnitScalarWhereInput[]
    id?: StringFilter<"WorkoutUnit"> | string
    name?: StringFilter<"WorkoutUnit"> | string
    exerciseId?: StringFilter<"WorkoutUnit"> | string
    repetitions?: IntFilter<"WorkoutUnit"> | number
    series?: IntFilter<"WorkoutUnit"> | number
    description?: StringFilter<"WorkoutUnit"> | string
    details?: StringFilter<"WorkoutUnit"> | string
    rest?: IntFilter<"WorkoutUnit"> | number
    workoutId?: StringFilter<"WorkoutUnit"> | string
  }

  export type EquipmentCreateWithoutEquipmentTypeInput = {
    id?: string
    name: string
    picture?: string | null
    muscleGroup: MuscleGroupCreateNestedOneWithoutEquipmentsInput
    exercises?: ExerciseCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutEquipmentTypeInput = {
    id?: string
    name: string
    muscleGroupId: string
    picture?: string | null
    exercises?: ExerciseUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutEquipmentTypeInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput>
  }

  export type EquipmentCreateManyEquipmentTypeInputEnvelope = {
    data: EquipmentCreateManyEquipmentTypeInput | EquipmentCreateManyEquipmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutEquipmentTypeInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutEquipmentTypeInput, EquipmentUncheckedUpdateWithoutEquipmentTypeInput>
    create: XOR<EquipmentCreateWithoutEquipmentTypeInput, EquipmentUncheckedCreateWithoutEquipmentTypeInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutEquipmentTypeInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutEquipmentTypeInput, EquipmentUncheckedUpdateWithoutEquipmentTypeInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutEquipmentTypeInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutEquipmentTypeInput>
  }

  export type MuscleGroupCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    exercises?: ExerciseCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupUncheckedCreateWithoutEquipmentsInput = {
    id?: string
    name: string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutMuscleGroupInput
  }

  export type MuscleGroupCreateOrConnectWithoutEquipmentsInput = {
    where: MuscleGroupWhereUniqueInput
    create: XOR<MuscleGroupCreateWithoutEquipmentsInput, MuscleGroupUncheckedCreateWithoutEquipmentsInput>
  }

  export type EquipmentTypeCreateWithoutEquipmentsInput = {
    id?: string
    name: string
  }

  export type EquipmentTypeUncheckedCreateWithoutEquipmentsInput = {
    id?: string
    name: string
  }

  export type EquipmentTypeCreateOrConnectWithoutEquipmentsInput = {
    where: EquipmentTypeWhereUniqueInput
    create: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
  }

  export type ExerciseCreateWithoutEquipmentInput = {
    id?: string
    name: string
    muscleGroup: MuscleGroupCreateNestedOneWithoutExercisesInput
    workoutDetails?: WorkoutUnitCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutEquipmentInput = {
    id?: string
    name: string
    muscleGroupid: string
    workoutDetails?: WorkoutUnitUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput>
  }

  export type ExerciseCreateManyEquipmentInputEnvelope = {
    data: ExerciseCreateManyEquipmentInput | ExerciseCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type MuscleGroupUpsertWithoutEquipmentsInput = {
    update: XOR<MuscleGroupUpdateWithoutEquipmentsInput, MuscleGroupUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<MuscleGroupCreateWithoutEquipmentsInput, MuscleGroupUncheckedCreateWithoutEquipmentsInput>
    where?: MuscleGroupWhereInput
  }

  export type MuscleGroupUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: MuscleGroupWhereInput
    data: XOR<MuscleGroupUpdateWithoutEquipmentsInput, MuscleGroupUncheckedUpdateWithoutEquipmentsInput>
  }

  export type MuscleGroupUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUpdateManyWithoutMuscleGroupNestedInput
  }

  export type MuscleGroupUncheckedUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exercises?: ExerciseUncheckedUpdateManyWithoutMuscleGroupNestedInput
  }

  export type EquipmentTypeUpsertWithoutEquipmentsInput = {
    update: XOR<EquipmentTypeUpdateWithoutEquipmentsInput, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<EquipmentTypeCreateWithoutEquipmentsInput, EquipmentTypeUncheckedCreateWithoutEquipmentsInput>
    where?: EquipmentTypeWhereInput
  }

  export type EquipmentTypeUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: EquipmentTypeWhereInput
    data: XOR<EquipmentTypeUpdateWithoutEquipmentsInput, EquipmentTypeUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentTypeUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentTypeUncheckedUpdateWithoutEquipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutEquipmentInput, ExerciseUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ExerciseCreateWithoutEquipmentInput, ExerciseUncheckedCreateWithoutEquipmentInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutEquipmentInput, ExerciseUncheckedUpdateWithoutEquipmentInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutEquipmentInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type UserCreateWithoutWorkoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    picture?: string | null
    admin: boolean
    active: boolean
  }

  export type UserUncheckedCreateWithoutWorkoutsInput = {
    id?: string
    name: string
    email: string
    password: string
    phone?: string | null
    picture?: string | null
    admin: boolean
    active: boolean
  }

  export type UserCreateOrConnectWithoutWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutUnitCreateWithoutWorkoutInput = {
    id?: string
    name: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    exercise: ExerciseCreateNestedOneWithoutWorkoutDetailsInput
  }

  export type WorkoutUnitUncheckedCreateWithoutWorkoutInput = {
    id?: string
    name: string
    exerciseId: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
  }

  export type WorkoutUnitCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutUnitWhereUniqueInput
    create: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutUnitCreateManyWorkoutInputEnvelope = {
    data: WorkoutUnitCreateManyWorkoutInput | WorkoutUnitCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutsInput = {
    update: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutWorkoutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkoutUnitUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutUnitWhereUniqueInput
    update: XOR<WorkoutUnitUpdateWithoutWorkoutInput, WorkoutUnitUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutUnitCreateWithoutWorkoutInput, WorkoutUnitUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutUnitUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutUnitWhereUniqueInput
    data: XOR<WorkoutUnitUpdateWithoutWorkoutInput, WorkoutUnitUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutUnitUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutUnitScalarWhereInput
    data: XOR<WorkoutUnitUpdateManyMutationInput, WorkoutUnitUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ExerciseCreateWithoutWorkoutDetailsInput = {
    id?: string
    name: string
    muscleGroup: MuscleGroupCreateNestedOneWithoutExercisesInput
    equipment?: EquipmentCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutDetailsInput = {
    id?: string
    name: string
    muscleGroupid: string
    equipmentId: string
  }

  export type ExerciseCreateOrConnectWithoutWorkoutDetailsInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutDetailsInput, ExerciseUncheckedCreateWithoutWorkoutDetailsInput>
  }

  export type WorkoutCreateWithoutWorkoutDetailsInput = {
    id?: string
    active?: boolean
    created_at?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
  }

  export type WorkoutUncheckedCreateWithoutWorkoutDetailsInput = {
    id?: string
    active?: boolean
    userId: string
    created_at?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutWorkoutDetailsInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutWorkoutDetailsInput, WorkoutUncheckedCreateWithoutWorkoutDetailsInput>
  }

  export type ExerciseUpsertWithoutWorkoutDetailsInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutDetailsInput, ExerciseUncheckedUpdateWithoutWorkoutDetailsInput>
    create: XOR<ExerciseCreateWithoutWorkoutDetailsInput, ExerciseUncheckedCreateWithoutWorkoutDetailsInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutDetailsInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutDetailsInput, ExerciseUncheckedUpdateWithoutWorkoutDetailsInput>
  }

  export type ExerciseUpdateWithoutWorkoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutExercisesNestedInput
    equipment?: EquipmentUpdateOneWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupid?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUpsertWithoutWorkoutDetailsInput = {
    update: XOR<WorkoutUpdateWithoutWorkoutDetailsInput, WorkoutUncheckedUpdateWithoutWorkoutDetailsInput>
    create: XOR<WorkoutCreateWithoutWorkoutDetailsInput, WorkoutUncheckedCreateWithoutWorkoutDetailsInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutWorkoutDetailsInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutWorkoutDetailsInput, WorkoutUncheckedUpdateWithoutWorkoutDetailsInput>
  }

  export type WorkoutUpdateWithoutWorkoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutWorkoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: string
    active?: boolean
    created_at?: Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutDetails?: WorkoutUnitUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    workoutDetails?: WorkoutUnitUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateManyMuscleGroupInput = {
    id?: string
    name: string
    equipmentTypeId: string
    picture?: string | null
  }

  export type ExerciseCreateManyMuscleGroupInput = {
    id?: string
    name: string
    equipmentId: string
  }

  export type EquipmentUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentType?: EquipmentTypeUpdateOneRequiredWithoutEquipmentsNestedInput
    exercises?: ExerciseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipmentTypeId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipmentTypeId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipment?: EquipmentUpdateOneWithoutExercisesNestedInput
    workoutDetails?: WorkoutUnitUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    workoutDetails?: WorkoutUnitUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutMuscleGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUnitCreateManyExerciseInput = {
    id?: string
    name: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
    workoutId: string
  }

  export type WorkoutUnitUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    workout?: WorkoutUpdateOneRequiredWithoutWorkoutDetailsNestedInput
  }

  export type WorkoutUnitUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    workoutId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUnitUncheckedUpdateManyWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    workoutId?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateManyEquipmentTypeInput = {
    id?: string
    name: string
    muscleGroupId: string
    picture?: string | null
  }

  export type EquipmentUpdateWithoutEquipmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutEquipmentsNestedInput
    exercises?: ExerciseUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutEquipmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    exercises?: ExerciseUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupId?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExerciseCreateManyEquipmentInput = {
    id?: string
    name: string
    muscleGroupid: string
  }

  export type ExerciseUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: MuscleGroupUpdateOneRequiredWithoutExercisesNestedInput
    workoutDetails?: WorkoutUnitUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupid?: StringFieldUpdateOperationsInput | string
    workoutDetails?: WorkoutUnitUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroupid?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutUnitCreateManyWorkoutInput = {
    id?: string
    name: string
    exerciseId: string
    repetitions?: number
    series?: number
    description: string
    details: string
    rest?: number
  }

  export type WorkoutUnitUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutDetailsNestedInput
  }

  export type WorkoutUnitUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUnitUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    repetitions?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    rest?: IntFieldUpdateOperationsInput | number
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