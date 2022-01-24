import { Document } from 'mongoose'

enum InvoicesType {
    Client,
    Subcontractor
}

export default interface IInvoices extends Document {
    name: string
    type: InvoicesType
    owner: number
    picture?: string
}
