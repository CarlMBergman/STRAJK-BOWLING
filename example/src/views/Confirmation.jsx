import './Confirmation.scss';
import { useLocation } from 'react-router-dom';

import Top from '../components/Top/Top';
import Navigation from '../components/Navigation/Navigation';
import Input from '../components/Input/Input';

function Confirmation() {
    const { state } = useLocation();

    return (
        <section data-id='confirmation' className='confirmation'>
            <Navigation />
            <Top title="See you soon!" />
            { state ?
                <form className='confirmation__details'> 
                    <Input dataid='confirmation__date-time' label="When" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.when.replace('T', ' ') }
                    disabled="disabled" />
                    <Input dataid='confirmation__bowlers' label="Who" type="text"  customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.people }
                    disabled="disabled" />
                    <Input dataid='confirmation__lanes' label="Lanes" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.lanes }
                    disabled="disabled" />
                    <Input dataid='confirmation__number' label="Booking number" type="text" customClass="confirmation__input"
                    defaultValue={ state.confirmationDetails.id }
                    disabled="disabled" />
                    <article className='confirmation__price'>
                        <p>Total:</p>
                        <p data-id='confirmation__price'>{ state.confirmationDetails.price } sek</p>
                    </article>
                    <button className='button confirmation__button'>Sweet, let's go!</button>
                </form> : <h2 data-id='confirmation__no-booking' className='confirmation__no-booking'>Inga bokning gjord!</h2>
            }
        </section>
    )
}

export default Confirmation;