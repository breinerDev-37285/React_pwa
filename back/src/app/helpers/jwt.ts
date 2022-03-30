import { IJWT } from '@interface/jwt'
import { sign } from 'jsonwebtoken'

export const GenerateJWT = (payload: IJWT) => {
    const SEED = process.env.SEED
    return sign(payload, String(SEED), {
        expiresIn: '1m',
    })
}
