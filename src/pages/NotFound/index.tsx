import { useNavigate } from "react-router-dom";
import './style.scss';

const NotFound = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    return (
        <div className='container'>
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist.
            How you got here is a mystery. But you can click the button below
            to go back to the homepage.
            </p>
            <button className="btn white" onClick={routeChange}>HOME</button>
        </div>
    );
};

export default NotFound;