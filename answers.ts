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

// Q13
{
  const createObj = <T>(obj: T) => {
    let o = {} as {[K in keyof T]: string}

    for (const key in obj) {
      o[key] = String(obj[key]);
    }
    return o;
  }

  const anotherFun = createObj;
}

// Q14
// 省略

// Q15
{
  const arr = (args: any[]) => {}
  // const arr = <T extends any[]>(args: T) => {}
  arr(['a', 1])
}

// 省略

// Q30
{
  type OnlySpecificProperty<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

  const regions = {
    sister: 'kanagawa',
    me: 'tokyo',
    mother: 'tokyo',
    father: 'hokkaido',
  } as const

  type Result = OnlySpecificProperty<typeof regions, 'tokyo'>
}
