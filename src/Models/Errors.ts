export class StatusError extends Error {
    public code: string
    constructor(message: string, code: string) {
        super(message)
        this.name = message
        this.code = code
    }
}
export class NotFoundError extends StatusError {
    constructor(message: string = 'Not Found') {
        super(message, '404')
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}

export class ValidationError extends StatusError {
    constructor(message: string = 'Validation Error') {
        super(message, '400')
        this.name = 'ValidationError'
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

export class BadInputError extends StatusError {
    constructor(message: string = 'Bad input') {
        super(message, '400')
        this.name = 'ValidationError'
        Object.setPrototypeOf(this, ValidationError.prototype)
    }
}

export class UnauthorizedError extends StatusError {
    constructor(message: string = 'Unauthorized') {
        super(message, '401')
        this.name = 'UnauthorizedError'
        Object.setPrototypeOf(this, UnauthorizedError.prototype)
    }
}

export class InternalServerError extends StatusError {
    constructor(message: string = 'Internal Server Error') {
        super(message, '500')
        this.name = 'InternalServerError'
        Object.setPrototypeOf(this, InternalServerError.prototype)
    }
}
