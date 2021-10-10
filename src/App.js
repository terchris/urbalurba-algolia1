import React, { Component } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
  Panel
} from "react-instantsearch-dom";
import "./App.css";
import Stats from "./Stats.js";
import RangeSlider from "./RangeSlider.js";
import Content from "./Content";
import Facet from "./Facet";

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="XJ6GHMNAHP"
        apiKey="a691c1e7ecf89587d7c25dc316e29b91"
        indexName="dev_urbalurba"
      >
        <main className="search-container">
          <Configure
            hitsPerPage={5}
            attributesToSnippet={["description:24"]}
            snippetEllipsisText=" [...]"
          />
          <div className="right-panel">
            <div id="hits">
              {/* Uncomment the following widget to add hits list */}
              <Content />
            </div>
            <div id="searchbox">
              {/* Uncomment the following widget to add a search bar */}
              <SearchBox
                translations={{
                  placeholder: "Finn organisasjoner og prosjekter"
                }}
              />
            </div>
            <div id="stats">
              {/* Uncomment the following widget to add search stats */}
              {/* <Stats /> */}
            </div>
            <div id="pagination">
              {/* Uncomment the following widget to add pagination */}
              {/* <Pagination /> */}
            </div>
          </div>
          <div className="left-panel">
            <div id="categories">
              {/* Uncomment the following widget to add categories list */}
              {/* <Panel header="Categories">
                <Facet attribute="categories" />
              </Panel> */}
            </div>
            <div id="brands">
              {/* Uncomment the following widget to add brands list */}
              {/* <Panel header="Brands">
                <Facet
                  attribute="brand"
                  searchable={true}
                  translations={{ placeholder: "Search for other..." }}
                />
              </Panel> */}
            </div>
            <div id="price">
              {/* Uncomment the following widget to add price */}
              {/* <Panel header="Price">
                <RangeSlider attribute="price" />
              </Panel> */}
            </div>
          </div>
        </main>
      </InstantSearch>
    );
  }
}

export default App;
