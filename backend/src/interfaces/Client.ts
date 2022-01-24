import { Document } from 'mongoose'

export default interface IClient extends Document {
    name: string
    lastName: string
    companyName?: string
    isRegular: boolean
    ordersAmount: number
    email?: string
    phoneNumber: number
    address: string
    postalCode: string
    invoices: number[]
}
