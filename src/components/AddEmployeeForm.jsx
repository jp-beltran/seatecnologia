import back_arrow from '../assets/back_arrow.svg'
import IsActive from './IsActive';
import EmployeeDetailsForm from './EmployeeDetailsForm';
function AddEmployeeForm() {
    return ( 
        <div className="w-1/2 bg-white rounded-3xl "> 
            <div className="bg-[#4FA1C1] w-full h-14 flex justify-start items-center rounded-t-3xl px-6 py-3 gap-4">
                <img src={back_arrow} alt="Voltar" />
                <h1 className="text-3xl text-white">Adicionar Funcionário</h1>
            </div>

            <div className='p-6 flex flex-col gap-3 '>
                <IsActive/>
                <EmployeeDetailsForm/>

            </div>
        </div>
     );
}

export default AddEmployeeForm;