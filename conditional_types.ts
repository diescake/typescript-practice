// Conditional types training
// T extends X ? Y : Z
// (...arg: any[]) => infer U

{
  type IsString<T> = T extends string ? true : false

  const result1: IsString<'hoge'> = true
  const result2: IsString<3> = false
}

{
  type Properties = {
    name: string
    age: number
    flag: boolean
  }

  type IsType<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false
  }

  type IsString = IsType<Properties, string>
  type IsNumber = IsType<Properties, number>
  type IsBoolean = IsType<Properties, boolean>
}

{
  type Properties = {
    name: string
    age: number
    walk: () => void
    jump: () => Promise<void>
  }

  type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
  }[keyof T]

  type StringKeys = Filter<Properties, string> // 'name'
  type NumberKeys = Filter<Properties, number> // 'age'
  type FunctionKeys = Filter<Properties, () => void> // 'walk' | 'jump'
  type ReturnPromiseKeys = Filter<Properties, () => Promise<any>> // 'jump'
}

{
  type Properties = {
    name: string
    age: number
    walk: () => void
    jump: () => Promise<void>
  }

  type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
  }[keyof T]

  type StringKeys<T> = Filter<T, string> // 'name'
  type NumberKeys<T> = Filter<T, number> // 'age'
  type FunctionKeys<T> = Filter<T, () => void> // 'walk' | 'jump'
  type ReturnPromiseKeys<T> = Filter<T, () => Promise<any>> // 'jump'

  type Strings = Pick<Properties, StringKeys<Properties>>
  type Functions = Pick<Properties, FunctionKeys<Properties>>
}

{
  // Type Inference in Conditional Types
  // (...arg: any[]) => infer U

  const greet = (name: string) => `Hello ${name}`

  type Return<T> = T extends (...arg: any[]) => infer U ? U : never
  type R = Return<typeof greet>

  type Params<T> = T extends (...arg: [infer U]) => string ? U : never
  type P = Params<typeof greet>
}

{
  type Part = {
    name: string
    age: number
    add: () => number
  }

  type MyPartial<T> = {
    [K in keyof T]: T[K] | null
  }

  const obj: MyPartial<Part> = {
    name: 'hoge',
    age: null,
    add: () => 20,
  }
}
