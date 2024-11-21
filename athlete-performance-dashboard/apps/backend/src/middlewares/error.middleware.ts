import { Context, Next } from 'hono'
import { HTTPException } from 'hono/http-exception'

export class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message)
    this.name = 'AppError'
  }
}

export const errorHandler = async (c: Context, next: Next) => {
  try {
    await next()
  } catch (error) {
    if (error instanceof AppError) {
      return c.json(
        { success: false, message: error.message },
        error.statusCode
      )
    }

    if (error instanceof HTTPException) {
      return c.json(
        { success: false, message: error.message },
        error.status
      )
    }

    console.error('Unexpected error:', error)
    return c.json(
      { success: false, message: 'Internal server error' },
      500
    )
  }
}