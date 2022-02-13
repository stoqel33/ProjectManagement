import mongoose, { Schema } from 'mongoose'
import { ISubcontractor } from '../interfaces'

const SubcontractorSchema = new Schema<ISubcontractor>({
    name: { type: String, required: [true, 'Subcontractor name is required'] },
    lastName: { type: String, required: [true, 'Subcontractor last name is required'] },
    companyName: { type: String },
    isRegular: { type: Boolean, required: true },
    ordersAmount: { type: Number, required: true },
    email: { type: String },
    phoneNumber: { type: String, required: [true, 'Subcontractor phone number is required'] },
    address: { type: String, required: [true, 'Subcontractor address is required'] },
    postalCode: { type: String, required: [true, 'Subcontractor postal code is required'] },
    invoices: [{ type: Schema.Types.ObjectId, ref: 'Invoice' }],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
})

const Subcontractor = mongoose.model<ISubcontractor>('Subcontractor', SubcontractorSchema)

export default Subcontractor
