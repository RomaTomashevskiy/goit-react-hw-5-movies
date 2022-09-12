import { useState } from "react";
import {Form , Input , Button} from './SearchBar.styled'

const SearchBar = ({onSubmit }) => {
    const [searchFilm, setSearchFilm] = useState('');   

    const handleChangeInput = e => {
        setSearchFilm(e.target.value);
    };

    const handleSubminForm = e => {
        e.preventDefault();
        if (!searchFilm.trim()) return alert('ERROR');
        
        onSubmit(searchFilm);
        setSearchFilm('');
    };



    return (
        <Form onSubmit={handleSubminForm}>
            <Input  type="text" value={searchFilm} onChange={handleChangeInput} />
            <Button type='submit '>Search</Button>
        </Form>
    );
};

export default SearchBar;