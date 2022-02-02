import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization as string
        !authHeader && res.status(401).json('You are not authenticated')

        const token: string = authHeader?.split(' ')[1]

        verify(token, process.env.SECRET_KEY as string, (err, user) => {
            err && res.status(403).json('Token is invalid')
            req.user = user
            next()
        })
    } catch (err) {
        res.status(401).json(err)
    }
}
