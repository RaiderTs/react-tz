import { useSelector } from 'react-redux';

// import s from './favoritesPage.module.css';

const FavoritesPage = () => {
    const storeData = useSelector(state => state.favoriteReducer);
    console.log(storeData);
    return (
        <>
            <h1>Favorite Page</h1>
        </>
    )
}


export default FavoritesPage;