<<<<<<< HEAD
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
=======
import ico_items from '../assets/iconItem.svg';
function IcoItems() {
    return (  
        <div className='flex flex-col justify-center items-center m-2'>
            <img src={ico_items} alt="" className='w-16 h-16 [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))] rounded-3xl 
            mb-2
            ' />
            <h1>TEXTO</h1>
>>>>>>> 8d5098449d70f51ac586ba3b13ac1196dcb161d3
        </div>
            
    );
}

export default IcoItems;