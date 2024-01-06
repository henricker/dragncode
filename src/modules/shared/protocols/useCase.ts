
export interface IUseCase<I = any, O = any> {
    execute(input: I): Promise<O>
}