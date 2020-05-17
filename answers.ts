// Q1
{
  type Foo = {
    bar: string
    baz: number
  }

  type optionalFoo = Partial<Foo>
}

// Q2
{
  type Foo = {
    bar?: string
    baz?: number
  }

  type requiredFoo = Required<Foo>
}

// Q3
{
  type Foo = {
    name?: string
    age?: number
  }

  type Picked = Pick<Foo, 'name'>
}

// Q4
{
  type Foo = {
    name?: string
    age?: number
  }

  type Omitted = Omit<Foo, 'age'>
}

// Q5
{
  const user = {
    name: 'Kenny',
    age: 98,
  }

  // type
  // {
  //   name: string
  //   age: number
  // }

  // reason
  // JavaScript ではオブジェクトのプロパティは再代入可能であるため、
  // widening され literal types ではなく primitive types で表現される
}

// Q6
// T extends U ? X : Y
// T が U に代入可能である時 X を返し、そうでないときに Y を返す

// Q7
{
  type Part = {
    name: string
    age: number
    add: () => number
    sub: () => number
  }

  type PickFunctionName<T> = {
    [K in keyof T]: T[K] extends (...arg: any) => any ? K : never
  }[keyof T]

  type PickedFunctionName = PickFunctionName<Part>
}

// Q8
// Q9
// Q10
// 省略

// Q11
{
  const createPromise = Promise.resolve(1145141919810)

  type PickPromiseValue<T> = T extends Promise<infer U> ? U : never
  type PromiseValue = PickPromiseValue<typeof createPromise>
}


// Q12
{
  type Part = {
    name: string
    age: number
    add: () => number
  }

  type MyPartial<T> = {
    [K in keyof T]: T[K] | null
  }

  type PartialPart = MyPartial<Part>
}
