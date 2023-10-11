import { createSlice } from "@reduxjs/toolkit";
import { getBookingUserThunk, getTicketRoomThunk } from ".";
import { Booking, ChairList, ListBooking, ShowDetail, TicketRoom } from "types";

type QuanLyDatVeInitialState = {
    ticketRoom?: TicketRoom<ShowDetail, ChairList>
    isChairList?: boolean
    chairBookings: Array<ChairList>
    chairBookeds: Array<ChairList>
    isBookingUser?: boolean
    bookingUser?: Booking<ListBooking>
}
const initialState: QuanLyDatVeInitialState = {
    chairBookings: [],
    chairBookeds: []
}

const quanLyDatVeSlice = createSlice({
    name: 'quanLyDatVe',
    initialState,
    reducers: {
        setChairBooking: (state, { payload }) => {
            const index = state.chairBookings?.find(item => item.stt === payload.stt)
            if (index) {
                const arr = state.chairBookings?.filter(i => i.stt !== payload.stt)
                state.chairBookings = arr
            } else {
                state.chairBookings?.push(payload)
            }
        },
        setChairBooked: (state) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getTicketRoomThunk.fulfilled, (state, { payload }) => {
                state.ticketRoom = payload
                state.isChairList = true
            })
            .addCase(getTicketRoomThunk.rejected, (state) => {
                state.isChairList = false
            })
            .addCase(getBookingUserThunk.fulfilled, (state, {payload}) => {
                state.isBookingUser = true
                state.bookingUser = payload
            })
    },

})

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } = quanLyDatVeSlice