import ico_items from '../assets/IcoItems.svg';
function IcoItems() {
    return (  
        <div className='flex flex-col justify-center items-center m-2'>
            <img src={ico_items} alt="" className='w-16 h-16 [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))] ' />
            <h1>TEXTO</h1>
        </div>
    );
}

export default IcoItems;