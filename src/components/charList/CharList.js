import MarvelService from '../../services/MarvelService';
import { Component } from 'react';

import './charList.scss';
import Spinner from '../spinner/Spinner';

class CharList extends Component {

    state = {
        char: {},
        loading: true
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateList();
    }

    updateList = () => {
        this.marvelService
        .getAllCharacters()
        .then(this.onCharLoaded)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false})
    }

    render() {
        const {char, loading} = this.state;
        const spinner = loading ? <Spinner/> : null;
        const list = !loading ? <List char={char}/> : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {spinner}
                    {list}

                    {/* <li className="char__item char__item_selected">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li> */}

                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

const List = ({char}) => {
    return char.map(item => {
        let imageThumbnail = <img src={item.thumbnail} alt={item.name} />

        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imageThumbnail = <img src={item.thumbnail} alt={item.name} style={{objectFit: 'contain'}}/>
        } 

        return (
            <li key={item.id} className="char__item">
                {imageThumbnail}
                <div className="char__name">{item.name}</div>
            </li>
        )
    });
}

export default CharList;