import { getLanguage} from '../../redux/selectors'
import { useSelector } from 'react-redux';

import SearchHistory from './SearchHistory';
import Section from '../Section/Section';

export default function SectionSwitch() {
    const language = useSelector(getLanguage);

    switch (language) {
        case 'en':
        return <Section title="Search History">
        <SearchHistory/>
        </Section>;
        
        case  'ru':
        return <Section title="История поиска">
        <SearchHistory/>
        </Section>;
        
        case  'ua':
        return <Section title="Історія пошуку">
        <SearchHistory/>
        </Section>;

        default:
        return;}}