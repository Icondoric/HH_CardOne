import './Styles/button.css'

function button(props)
{
    const more=props.more
    return(
        <section className='stars'> 
            <button onClick={() => handleLearnMore()}className='star-button'>Learn Morte</button>
        </section>
    )
}
export default button

