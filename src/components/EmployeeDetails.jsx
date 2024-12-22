import EmployeeImg from "../assets/employee_details_img.svg"

function EmployeeDetails() {
    return (  
        <div className="w-1/3  bg-white p-6 rounded-[20px] flex flex-col ">
            <h1 className="self-stretch text-[color:var(--Medium-gray,#959595)] text-base  font-normal w-[412px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.
            </h1>
            <img src={EmployeeImg} alt="Foto do funcionário" className="mt-10 w-[142px] h-[159px]" />
        </div>
    );
}

export default EmployeeDetails;