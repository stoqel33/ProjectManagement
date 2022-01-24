import mongoose, { Schema } from 'mongoose'
import { IInvoices } from '../interfaces'

const InvoicesSchema = new Schema({
    name: { type: String, required: [true, 'Invoice name is required'] },
    type: { type: Number, required: [true, 'Invoice type is required'] },
    owner: { type: Schema.Types.ObjectId, required: [true, 'Invoice owner is required'] },
    picture: { type: String }
})

const Invoices = mongoose.model<IInvoices>('Invoices', InvoicesSchema)

export default Invoices
