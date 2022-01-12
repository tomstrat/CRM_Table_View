export class BaseError extends Error {

  message: string

  constructor(message: string) {
    super(message)
    this.message = message
  }

  getCode(): number {
    if (this instanceof BadRequest) return 400
    if (this instanceof NotFound) return 404
    return 500
  }
}

export class BadRequest extends BaseError { }
export class NotFound extends BaseError { }