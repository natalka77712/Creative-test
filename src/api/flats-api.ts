import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3004/',
    withCredentials: true
})

//api
export const flatsAPI = {
    getFlats() {
        const promise = instance.get<FlatsType>('response');
        return promise
    },
    setIsLike(id: number, isLike: boolean) {
        const promise = instance.patch<FlatsType>(`response/${id}`, {like: isLike});
        return promise
    },
}

//types
export type AddressType = {
   city: string
   street: string
   house: string
   room: string
}

export type AttributesType = {
    title: string
    rooms: number
    address: AddressType
    area: number
    unit: string
}

export type RelationshipsType = {
    type: string
    id: number
    attributes: {
        first_name: string
        last_name: string
        middle_name: string
    }
}

export type FlatType = {
    type: string
    id: number
    img?: string
    attributes: AttributesType
    relationships: RelationshipsType
    like?: boolean
}

export type FlatsType = Array<FlatType>
