import { HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from 'react-hook-form';

type InputProps = {
    label?: string,
    id?: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>,
    error?: string,
    className?: string
    name?: string
}

export const Input = ({ label, id, placeholder, type = 'text', register, error, className = '', name = '' }: InputProps) => {
    return (
        <div className={className}>
            {!!label && <label className="text-white" htmlFor={id}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                className="p-2 my-2 w-full text-white rounded-[6px] bg-[#333]"
                {...register?.(name)}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    )
}
