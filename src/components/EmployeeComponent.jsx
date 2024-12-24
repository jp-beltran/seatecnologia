import ellipsis from '../assets/ellipsis.svg'
function EmployeeComponent(){
    return (
        <div className="flex-row justify-between">
            <div className="w-full flex flex-row justify-between bg-[#649FBF33] rounded-[20px] ">
                <div className="flex flex-col p-6 gap-3">
                        <h1 className='ml-2'>NOME NOME NOME</h1>
                    

                    <div className="flex flex-row gap-3">
                        <h3 className='p-1 px-4 bg-[#649FBF] rounded-[20px] text-white'>000.000.000-00</h3>
                        <h3 className='p-1 px-4 bg-[#649FBF] rounded-[20px] text-white'>Ativo</h3>
                        <h3 className='p-1 px-4 bg-[#649FBF] rounded-[20px] text-white'>Cargo 2</h3>
                    </div>

                </div>

                <div>
                <button className='bg-[#649FBF] h-full w-15 flex items-center justify-center rounded-r-[20px] cursor-pointer' onClick={()=>{}}>
                    <img src={ellipsis} alt="" />
                </button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent;