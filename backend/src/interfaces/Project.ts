import { Document } from 'mongoose'

enum ProjectStatus {
    Initial,
    InProgress,
    TestingPhase,
    PendingApproval,
    Done,
    ProblemNotified,
    NotApproved
}

export default interface IProject extends Document {
    status: ProjectStatus
    title: string
    descritpion: string
    clientId: number
    grossPrice: number
    netPrice: number
    createdDate: Date
    deadline: Date
    category?: string
    subcontractor: boolean
    subcontractorId?: number
    picture?: string
}
