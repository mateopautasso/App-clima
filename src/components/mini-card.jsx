import './mini-card.css';

export function MiniCard({day, icon}) {
    return (
        <div className='mini-card'>
            <h5>
                {day}
            </h5>
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className='temp'>
                <p>20°C</p>
                <p>16°C</p>
            </div>
        </div>
    )
}