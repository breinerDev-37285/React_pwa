import { useState, ChangeEvent } from 'react'

export const useForm = <T>(init:T) => {

    const [ value, setValue ] = useState(init)

    const reset = () => setValue(init)

    const handleInputChange = (ev:ChangeEvent<HTMLInputElement>) => {
        const target = ev.target
        const { value, type, checked, files, name } = target
        let val:any = value 

        switch(type){
            case 'checkbox':
                val = checked
                break 
            case 'file':
                val = files
                break
        }

        setValue((prev) => ({
            ...prev,
            [name]: val
        }))
    }

    return {
        value, 
        ...value,
        reset,
        handleInputChange
    }
}
