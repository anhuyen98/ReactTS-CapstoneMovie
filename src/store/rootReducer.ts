import { combineReducers } from "@reduxjs/toolkit";
import { quanLyPhimReducer } from "./quanLyPhim";
import { quanLyLichChieuReducer, quanLyRapReducer } from "./quanLyRap";
import { quanLyDatVeReducer } from "./quanLyDatVe";

export const rootReducer = combineReducers({
    quanLyPhim: quanLyPhimReducer,
    quanLyRap: quanLyRapReducer,
    quanLyLichChieu: quanLyLichChieuReducer,
    quanLyDatVe: quanLyDatVeReducer,
})