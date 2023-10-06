import { combineReducers } from '@reduxjs/toolkit'
import { quanLyNguoiDungReducer } from './quanLyNguoiDung'
import { quanLyPhimReducer } from './quanLyPhim'
import { heThongRapReducer } from './thongTinHeThongRap/slice'
import { lichChieuReducer } from './lichChieu/slice'

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
    heThongRap: heThongRapReducer,
    lichChieu: lichChieuReducer,
})
