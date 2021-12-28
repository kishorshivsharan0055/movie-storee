import {
  DataSearch,
  MultiList,
  ReactiveBase,
  ReactiveList,
  ResultCard,
} from "@appbaseio/reactivesearch";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ReactiveBase
      url="https://KheuWOeu6:63aa1cd7-5628-425c-90d7-6680efea1e55@scary-machine-qjxpseq-arc.searchbase.io"
      app="test-appp"
      credentials="KheuWOeu6:63aa1cd7-5628-425c-90d7-6680efea1e55"
      enableAppbase
    >
      <Navbar />
      {/* other components will go here. */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            margin: "10px",
          }}
        >
          <MultiList
            componentId="genresfilter"
            dataField="genres.keyword"
            className="h-10"
            title="Filter by genres"
            aggregationSize={5}
            showCheckbox
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "66%" }}>
          <DataSearch
            style={{
              marginTop: "35px",
            }}
            componentId="searchbox"
            dataField={[
              "genres",
              "genres.autosuggest",
              "original_title",
              "original_title.autosuggest",
            ]}
            fieldWeights={[3, 1, 5, 1]}
            placeholder="Search for genres or movie"
          />
          <ReactiveList
            componentId="results"
            dataField="name"
            size={6}
            pagination={true}
            react={{
              and: ["searchbox", "ratingsfilter", "genresfilter"],
            }}
            style={{ textAlign: "center" }}
            render={({ data }) => (
              <ReactiveList.ResultCardsWrapper>
                {data.map((item: any) => (
                  <ResultCard key={item._id}>
                    <ResultCard.Image
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${item.poster_path})`,
                      }}
                      src=""
                    />
                    <ResultCard.Title
                      dangerouslySetInnerHTML={{
                        __html: item.original_title,
                      }}
                    />
                  </ResultCard>
                ))}
              </ReactiveList.ResultCardsWrapper>
            )}
          />
        </div>
      </div>
    </ReactiveBase>
  );
}

export default App;
