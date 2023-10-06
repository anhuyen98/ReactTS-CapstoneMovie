export type RapChieuPhim<T> = {
    lstCumRap?: T
    maHeThongRap?: string
    tenHeThongRap?: string
    logo?: string
    mahom?: string
}

export type CumRap<T> = {
    danhSachPhim?: T
    maCumRap?: string
    tenCumRap?: string
    hinhAnh?: string
    diaChi?: string
}[]
export type ListPhim<T> = {
    lstLichChieuTheoPhim?: T
    maPhim?: number
    tenPhim?: string
    hinhAnh?: string
    hot?: boolean
    dangChieu?: boolean
    sapChieu?: boolean
}[]
export type LichChieuPhim = {
    maLichChieu?: number
    maRap?: string
    tenRap?: string
    ngayChieuGioChieu?: string
    giaVe?: number
}[]




