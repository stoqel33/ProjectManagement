import mongoose, { Schema } from 'mongoose'
import { IInvoice, InvoiceType } from '../interfaces'

const InvoiceSchema = new Schema<IInvoice>({
    name: { type: String, required: [true, 'Invoice name is required'] },
    type: {
        type: String,
        required: [true, 'Invoice type is required'],
        enum: InvoiceType
    },
    userId: { type: Schema.Types.ObjectId, required: true },
    clientId: { type: Schema.Types.ObjectId },
    subcontractorId: { type: Schema.Types.ObjectId },
    picture: { type: String },
    projectId: { type: [Schema.Types.ObjectId] }
})

const Invoice = mongoose.model<IInvoice>('Invoice', InvoiceSchema)

export default Invoice
