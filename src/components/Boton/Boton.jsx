
import './Boton.css'
export default function Boton({handleClick}) {
   
  return (
    <div class="d-grid gap-2">
        <button
            type="button"
            className='btn btn-primary'
            onClick={handleClick}
        >
           Soy un botón
        </button>
    </div>
    
  )
}
