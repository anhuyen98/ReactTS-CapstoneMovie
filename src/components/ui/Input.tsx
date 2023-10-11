
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'


type InputProps = {
    value?: string | number | readonly string[] | undefined,
    label?: string
    id?: string
    type?: HTMLInputTypeAttribute
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>
    error?: string
    placeholder?: string
    className?: string
    name?: string
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
    value,
    label,
    id,
    register,
    type = 'text',
    error,
    placeholder,
    className = '',
    name = '',
    onChange
}: InputProps) => {
    return (
        <div className={className}>
            {!!label && (
                <label className="text-white" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
            value={value}
                id={id}
                placeholder={placeholder}
                type={type}
                className="p-10 mt-8 w-full text-white rounded-6 bg-[#333]"
                {...register?.(name)}
                onChange={onChange}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    )
}
