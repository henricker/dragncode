export interface IUseCase<I = unknown, O = unknown> {
  execute(input: I): Promise<O>
}
