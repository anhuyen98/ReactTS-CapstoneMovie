import { createAsyncThunk } from "@reduxjs/toolkit";
import { lichChieuServices } from 'services/lichChieu'
import { sleep } from "utils";

export const lichChieuThunk = createAsyncThunk (
    'QuanLyRap/getLichChieuList',
    async (_, { rejectWithValue }) => {
        try{
            const data = await lichChieuServices.getLichChieuList('?maHeThongRap=bhdStar')
            await sleep(2000)
            return data.data.content
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)