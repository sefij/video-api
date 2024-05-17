export class Config {
    public static get SQL_POLICY() {
        return process.env.ALTER_POLICY || 'alter'
    }

    public static get DISABLE_JWT_VALIDATION() {
        return process.env.DISABLE_JWT_VALIDATION === 'true'
    }

    public static get PORT() {
        return Number(process.env.port || '8000')
    }
}
