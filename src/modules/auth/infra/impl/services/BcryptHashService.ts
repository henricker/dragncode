import bcrypt from 'bcrypt'
import {
  ICompareInput,
  IHashInput,
  IHashService,
} from '../../../business/services/HashService'

export class BcryptHashService implements IHashService {
  hash(input: IHashInput): Promise<string> {
    return bcrypt.hash(input.content, input.salt)
  }

  compare(input: ICompareInput): Promise<boolean> {
    return bcrypt.compare(input.contentToCompare, input.contentHashed)
  }
}
