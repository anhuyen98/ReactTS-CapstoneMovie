import { apiInstance } from "constant/apiInstance";
import { RapChieuPhim, CumRap, ListPhim, LichChieuPhim } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_THONG_TIN_RAP_API,
})

export const lichChieuServices = {
    getLichChieuList: (query= '') => api.get<ApiResponse<RapChieuPhim<CumRap<ListPhim<LichChieuPhim>>>>>(`/LayThongTinLichChieuHeThongRap${query}`),
}