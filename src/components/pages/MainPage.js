import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
import CharSearchForm from "../CharSearchForm/CharSearchForm";

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
      setSelectedChar(id);
  }

  return (
    <>
      <RandomChar/>
      <div className="char__content">
          <CharList onCharSelected={onCharSelected}/>
          <div>
            <ErrorBoundary>
                <CharInfo charId={selectedChar}/>
            </ErrorBoundary>
            <ErrorBoundary>
                <CharSearchForm />
            </ErrorBoundary>
          </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision"/>
    </>
  )
}

export default MainPage;