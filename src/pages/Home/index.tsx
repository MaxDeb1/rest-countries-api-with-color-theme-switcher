import Filter from '../../components/Filter/Filter';
import SearchInput from '../../components/Inputs/SearchInput';
import Results from '../../components/Results/Results';

import "./style.scss";

const Home = () => {
    return (
        <main>
            <section className='filters-container'>
                <SearchInput />
                <Filter />
            </section>
            <Results />
        </main>
    );
};

export default Home;