import { Input } from "components"

export const AccountInfo = () => {
  return (
    <div>
      <p className="text-20 font-600 mb-5">Thông tin tài khoản</p>
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Tài khoản"
        // error={error?.taiKhoan?.message}
        // register={register}
        name="taiKhoan" />
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Họ & Tên"
        // error={error?.hoTen?.message}
        // register={register}
        name="hoTen" />
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Email"
        // error={error?.email?.message}
        // register={register}
        name="email" />
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Số điện thoại"
        // error={error?.soDT?.message}
        // register={register}
        name="soDT" />
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Mã nhóm"
        // error={error?.maNhom?.message}
        // register={register}
        name="maNhom" />
      <Input
        className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
        label="Mã loại người dùng"
        name="maLoaiNguoiDung" />
      <div className="text-right mt-20">
        <button type="submit" className="!h-[46px]">Hoàn thành chỉnh sửa</button>
      </div>
    </div>
  )
}
// const InputS = styled(Input)`
//   label {
//     color: black;
//   }
//   input {
//     background: transparent;
//     border: 1px solid black;
//     color: black;
//   }
// `
// className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"