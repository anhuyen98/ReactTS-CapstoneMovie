
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'components/ui'
import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AccountSchema, AccountSchemaType } from 'schema/AccountSchema'
import { quanLyNguoiDungServices } from 'services'
import { handleError } from 'utils'


export const AccountInfo = () => {
    const { user } = useAuth()
    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<AccountSchemaType>({
        resolver: zodResolver(AccountSchema),
        mode: 'onChange',
    })

    const onSubmit: SubmitHandler<AccountSchemaType> = async (value) => {
        try {
            await quanLyNguoiDungServices.upDateUser(value)
            toast.success('Cập nhật thành công')
        } catch (err) {
            handleError(err)
        }
        
    }

    useEffect(() => {
        reset({
            ...user,
            soDt: user?.soDT,
        })
    }, [user, reset])



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-20'>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Tài khoản"
                name="taiKhoan"
                error={errors?.taiKhoan?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mật Khẩu"
                name="matKhau"
                error={errors?.matKhau?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Họ và tên"
                name="hoTen"
                error={errors?.hoTen?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Email"
                name="email"
                error={errors?.email?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Số điện thoại"
                name="soDt"
                error={errors?.soDt?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mã nhóm"
                name="maNhom"
                error={errors?.maNhom?.message}
                register={register}
            />
            <Input
                className="[&>label]:text-black mt-20 [&>input]:bg-transparent [&>input]:border [&>input]:border-black/50 [&>input]:text-black/50 cursor-none pointer-events-none"
                label="Mã loại người dùng"
                name="maLoaiNguoiDung"
                error={errors?.maLoaiNguoiDung?.message}
                register={register}
            />
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </form>
    )
}
