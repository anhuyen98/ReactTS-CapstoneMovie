import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginSchemaType } from 'schema'
import { AccountSchemaType } from 'schema/AccountSchema'
import { quanLyNguoiDungServices } from 'services'
import { getAccessToken, sleep } from 'utils'

export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/login',
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungServices.login(payload)
            
            await sleep(2000)

            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getUserByAccessTokenThunk = createAsyncThunk(
    'quanLyNguoiDung/getUserByAccesToken',
    async (_, { rejectWithValue }) => {
        try {
            
            const token = getAccessToken()

            
            if (token) {
                const data = await quanLyNguoiDungServices.getUserByAccessToken()
                return data.data.content
            }
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const upDateUserThunk = createAsyncThunk(
    'quanLyNguoiDung/upDateUser', 
    async(payload: AccountSchemaType, {rejectWithValue}) => {
        try {
            const data = await quanLyNguoiDungServices.upDateUser(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue
        }
    } 
)


