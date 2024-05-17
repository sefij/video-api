import { SQL } from './Sql'

export class PaperCupDependencies {
    private static _sql: SQL

    public static get sql() {
        return this._sql
    }

    public static async init() {
        try {
            await SQL.init()
        } catch (err) {
            console.error('Failed to init SQL', err)
            throw err
        }
    }
}
