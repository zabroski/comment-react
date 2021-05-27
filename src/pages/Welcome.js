import { Route } from 'react-router-dom';

const Welcome = () => {
    return (
        <section>
             <h1>Welcome Page</h1>
             <Route path='/Welcome/new-user'></Route>
             <p>Welcome, new user!</p>
        </section>
       
    );
}
export default Welcome;