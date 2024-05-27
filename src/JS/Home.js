import { ReactComponent as ImageBanner } from '../assets/ImageBanner.svg';
import '../App.css'

function Home(){
    return(
        <body>
            <div className='Ho'>
            <ImageBanner />
            </div>
            <hr className='homeLinha'></hr>
            <div className='local'>
                <h1>Localizar local de descarte correto.</h1>

            </div>
        </body>
    )
}

export default Home;