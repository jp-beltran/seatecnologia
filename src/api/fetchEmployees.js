export const fetchEmployeesAPI = async () => {
    const response = await fetch("http://localhost:3000/employees");
    if (!response.ok) {
        throw new Error("Falha ao buscar funcionários");
    }
    return await response.json();
};

export const fetchEmployeeById = async (id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    if (!response.ok) {
        throw new Error("Falha ao buscar funcionário");
    }
    return await response.json();
};

export const addEmployeeAPI = async (employee) => {
    const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });
    if (!response.ok) {
        throw new Error("Falha ao adicionar funcionário");
    }
    return await response.json();
};

export const editEmployeeAPI = async (employee) => {
    console.log("🚀 ~ editEmployeeAPI ~ employee id:", employee.id);
    try {
        const response = await fetch(
            `http://localhost:3000/employees/${employee.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employee),
            }
        );

        return await response.json();
    } catch (err) {
        throw new Error(err.message);
    }
};

export const deleteEmployeeAPI = async (id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Falha ao deletar funcionário");
    }
    return id;
};
