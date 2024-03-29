import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "services";

export const getTicketRoomThunk =  createAsyncThunk(
    'quanLyDatVe/getTicketRoom', async(payload: number,{rejectWithValue}) => {
        try {
            const data = await quanLyDatVeServices.getTicketRoom(payload)
            console.log("data: ", data);
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const getBookingUserThunk = createAsyncThunk(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'quanLyDatVe/getBookingUser', async(payload: any, {rejectWithValue}) => {
        try {
            const data = await quanLyDatVeServices.getBookingUser(payload)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)