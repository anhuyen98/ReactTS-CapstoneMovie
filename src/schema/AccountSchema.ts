import { z } from 'zod';

export const AccountSchema = z.object({
    taiKhoan: z.string().nonempty('Vui lòng nhập tài khoản'),
    hoTen: z.string().nonempty('Vui lòng họ & tên'),
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),
    soDt: z.string().nonempty('Vui lòng nhập số điện thoại'),
    maNhom: z.string().nonempty('Vui lòng mã nhóm'),
})

export type AccountSchemaType = z.infer<typeof AccountSchema>
