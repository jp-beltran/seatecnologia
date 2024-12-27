import dayjs from "dayjs";

export const validateCPF = async (_, value) => {
    if (!value) return Promise.reject("Por favor, insira seu CPF!");

    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(value)) {
        return Promise.reject("CPF inválido!");
    }

    return Promise.resolve();
};

export const validateRG = async (_, value) => {
    if (!value) return Promise.reject("Por favor, insira seu RG!");

    const rgPattern = /^\d{2}\.\d{3}\.\d{3}-\d$/;
    if (!rgPattern.test(value)) {
        return Promise.reject("RG inválido!");
    }

    return Promise.resolve();
};

export const validateName = async (_, value) => {
    if (!value) return Promise.reject();

    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(value)) {
        return Promise.reject("Nome inválido!");
    }

    return Promise.resolve();
};

export const validateBirthDate = async (_, value) => {
    const years = dayjs().diff(dayjs(value), "year");

    if (!value) return Promise.reject();

    if (years < 18) {
        return Promise.reject(
            "A data de nascimento deve corresponder a um usuário maior de 18 anos."
        );
    }

    return Promise.resolve();
};

export const validateRole = async (_, value) => {
    if (!value) return Promise.reject();
    return Promise.resolve();
};
