import React from 'react';
import {useFormContext} from "react-hook-form";

type GenericInputProps = {
    label: string
    name: string
    rules?: RegistrationOptions
}

const GenericInput = ({label, name, rules}:GenericInputProps) => {
    const {
        register,
        formState: {errors}
    } = useFormContext();

    const errorMessage = errors?.[name]?.message

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                placeholder="e. g. Jane Apleseed"
                {...register(name, rules)}
            />

            {errorMessage && <span className={"validation"}>
              {errorMessage}
            </span>}
        </div>
    );
};

export default GenericInput;