import mongoose, { Schema } from 'mongoose'
import { IProject, ProjectStatus } from '../interfaces'

const ProjectSchema = new Schema({
    status: {
        type: String,
        required: true,
        enum: ProjectStatus
    },
    title: { type: String, required: [true, 'Project status is required'] },
    description: { type: String, required: [true, 'Project description is required'] },
    clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    grossPrice: { type: Number, required: [true, 'Project gross price is required'] },
    taxRate: { type: Number, required: [true, 'Project tax rate is required'] },
    netPrice: { type: Number, required: true },
    createdDate: { type: Date, required: [true, 'Project created date is required'] },
    deadline: { type: Date, required: [true, 'Project deadline is required'] },
    category: { type: String },
    subcontractorId: { type: Schema.Types.ObjectId, ref: 'Subcontractor' },
    picture: { type: String }
})

const Project = mongoose.model<IProject>('Project', ProjectSchema)

export default Project
