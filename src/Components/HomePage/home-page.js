import { Link } from 'react-router-dom';
import './home.css'


function Home() {

    return (
        <div className='home-wrapper'>
            <div className="sub-layer-1">
                <h1 className="header">Keep Tabs of your Daily Activites</h1>
                <div className="sub-layer-1-contnent">
                    <p>Even though every task is essential, some task or engagement shouldn't be missed.
                        Keep track of such task or activities and have them attended to.
                    </p>
                    <Link to='/todos' className='btn'>Get started
                    <i className="fa fa-long-arrow-right pl-3" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    );
}
 
export default Home;