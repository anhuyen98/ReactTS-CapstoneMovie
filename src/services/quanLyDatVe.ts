import { apiInstance } from "constant";
import { Booking, ChairList, ListBooking, ShowDetail, TicketRoom } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API
})

export const quanLyDatVeServices = {
    getTicketRoom: (param:number) => api.get<ApiResponse<TicketRoom<ShowDetail, ChairList>>>(`/LayDanhSachPhongVe?MaLichChieu=${param}`),

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getBookingUser: (data: any) => api.post<ApiResponse<Booking<ListBooking>>>('/DatVe', data)
}