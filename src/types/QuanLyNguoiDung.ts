

export type UserLogin = {
    taiKhoan?: string
    hoTen?: string
    email?: string
    soDT?: string
    maNhom?: string
    matKhau?: string
    maLoaiNguoiDung?: 'KhachHang' | 'QuanTri'
    accessToken: string 
}

export type UserByAccessToken<Q> = Omit<UserLogin, 'accessToken'> & {
    thongTinDatVe?: Q[]
    loaiNguoiDung?: {
        maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    }
}

export type ListChair<Q> = {
    danhSachGhe?: Q[]
    maVe?: number,
    ngayDat?: string,
    tenPhim?: string,
    hinhAnh?: string,
    giaVe?: number,
    thoiLuongPhim?: number
}

export type ChairBook = {
    maHeThongRap?: string,
    tenHeThongRap?: string,
    maCumRap?: string,
    tenCumRap?: string,
    maRap?: number,
    tenRap?: string,
    maGhe?: number,
    tenGhe?: string
}

