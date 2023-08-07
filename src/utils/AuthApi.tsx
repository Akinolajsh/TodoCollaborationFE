import axios from "axios";

const url: string = "https"

export const createUser = async (data: any) => {
    try {
        return await axios.post(`${url}/register`,data).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signUser = async (data: any) => {
    try {
        return await axios.post(`${url}/sign-in`,data).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
