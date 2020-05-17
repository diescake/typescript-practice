type Sample = {
  a: string,
  b: 10,
  c?: string,
  d: null,
}

type PartialObj = Partial<Sample>
type RequiredObj = Required<Sample>

type PickedObj = Pick<Sample, 'b'>
type OmittedObj = Omit<Sample, 'b'>

type NewObj = Record<'a' | 'b', string>
type NewObj2 = Record<keyof Sample, string>

type ExcludedObj = Exclude<keyof Sample, 'b'>
type ExtractedObj = Extract<keyof Sample, any>

type NonNullableObj = NonNullable<string | undefined | null>
