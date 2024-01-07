export type IHashInput = {
  content: string
  salt: number
}

export type ICompareInput = {
  contentToCompare: string
  contentHashed: string
}

export interface IHashService {
  hash(input: IHashInput): Promise<string>
  compare(input: ICompareInput): Promise<boolean>
}
