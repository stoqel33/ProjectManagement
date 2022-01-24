import mongoose, { Schema } from 'mongoose'
import { IProject } from '../interfaces'

const ProjectSchema = new Schema({
    status: { type: Number, required: true },
    title: { type: String, required: [true, 'Project status is required'] },
    descritpion: { type: String, required: [true, 'Project description is required'] },
    clientId: { type: Schema.Types.ObjectId, required: true },
    grossPrice: { type: Number, required: [true, 'Project gross price is required'] },
    netPrice: { type: Number, required: true },
    createdDate: { type: Date, required: [true, 'Project created date is required'] },
    deadline: { type: Date, required: [true, 'Project deadline is required'] },
    category: { type: String },
    subcontractorId: { type: Schema.Types.ObjectId },
    picture: { type: String }
})

const Project = mongoose.model<IProject>('Project', ProjectSchema)

export default Project
