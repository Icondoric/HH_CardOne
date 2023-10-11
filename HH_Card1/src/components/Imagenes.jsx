import React from 'react'
import 'Imagenes.css'
function imagen(props) 
{
    const image=props.image;
    return(
        <section>
            <img src={image.imgUrl} alt={image.imgUrl} />
        </section>
    )
    
}