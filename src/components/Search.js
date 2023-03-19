import React, { useState } from "react";
//Customs Hooks
import { useStateValue } from "../Hooks/StateProvider";
import { actionTypes } from "../Hooks/reducer";
//Css and Icons
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const history = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history("/search");
  };

  return (
    <>
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputiIcon" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search__button">
            <Button type="submit" variant="outline" onClick={search}>
              Google Search
            </Button>
            <Button variant="outline">I'm Feeling Luck</Button>
          </div>
        ) : (
          <div className="search__button">
            <Button
              type="submit"
              className="search__buttonsHidden"
              variant="outline"
              onClick={search}
            >
              Google Search
            </Button>
            <Button className="search__buttonsHidden" variant="outline">
              I'm Feeling Luck
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
