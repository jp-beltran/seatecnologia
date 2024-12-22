import ico_items from '../assets/ico_items.svg';
function IcoItems() {
    return (  
        <div className='flex flex-col justify-center items-center m-2 '>
            <img 
                src={ico_items} 
                alt="Ícone de item" 
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} 
                className='w-16 h-16 rounded-3xl mb-2' 
            />
            <h1 className='text-[#4FA1C1] text-sm font-medium'>Item 1</h1>


        </div>
    );
}

export default IcoItems;