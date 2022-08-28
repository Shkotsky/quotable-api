import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import SearchForm from "../components/SearchForm";
import Stack from "react-bootstrap/Stack";
import Loading from "../components/Loading";
function SearchQuote() {
  const [search, setSearch] = useState("a");

  const { data, loading } = useFetch(`search/quotes?query=${search}`);

  const getQuote = (value) => {
    if (value === "") {
      setSearch("a");
    } else {
      setSearch(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="container my-5">
      <SearchForm
        getQuote={getQuote}
        handleSubmit={handleSubmit}
        search={search}
      />

      {loading ? (
        <Loading />
      ) : (
        <Stack className="align-items-center d-flex text-center" gap={5}>
          {data.results.map((quote) => {
            const { _id, author, content } = quote;
            return (
              <section className="quote " key={_id}>
                <div className="quote-card">
                  <div className="quote-message">
                    <p>{content}</p>
                  </div>
                  <hr />
                  <div className="quote-author">{author}</div>
                </div>
              </section>
            );
          })}
        </Stack>
      )}
    </main>
  );
}

export default SearchQuote;
