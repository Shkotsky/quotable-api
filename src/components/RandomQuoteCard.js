import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import Button from "react-bootstrap/Button";

function RandomQuoteCard() {
  const bgColors = [
    "skyBlue",
    "blush",
    "paleYellow",
    "gentleGreen",
    "buff",
    "mutedTeal",
  ];

  const { data: quote, getData: getRandomQuote, loading } = useFetch("random");

  const handleNewQuote = () => {
    getRandomQuote();
    const color = bgColors[Math.floor(Math.random() * bgColors.length)];
    document.body.className = `${color} colorTransition`;
  };

  if (loading) {
    return (
      <main className="quote centered">
        <div className="quote-card">
          <Loading />
        </div>
        <footer className="quote-footer"></footer>
      </main>
    );
  }

  if (!quote) {
    return <h2>No Quote To Display...</h2>;
  } else {
    return (
      <main className="quote centered">
        <div className="quote-card">
          <div className="quote-message">
            <p>{quote.content}</p>
          </div>
          <hr />
          <div className="quote-author">{quote.author}</div>
        </div>
        <footer className="quote-footer">
          <Button onClick={handleNewQuote} variant="primary">
            New Quote
          </Button>
        </footer>
      </main>
    );
  }
}

export default RandomQuoteCard;
