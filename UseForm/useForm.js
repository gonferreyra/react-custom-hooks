import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    // desestructuramos del event el target, y el name y value del target
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialState);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
