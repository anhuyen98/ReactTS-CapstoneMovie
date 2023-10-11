import { apiInstance } from "constant/apiInstance";
import { DanhSachPhim } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_THONG_TIN_RAP_API,
})

export const lichChieuServices = {   
    getDanhSachPhim: () => api.get<ApiResponse<DanhSachPhim[]>>("LayThongTinLichChieuHeThongRap?maNhom=GP12"),
}