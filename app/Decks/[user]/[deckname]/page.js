export default function UserDeckDisplay({ params }) {
  return (
    <div>
      <h1> This Deck Displays the deck titled {params.deckname}. Created by the user named {params.user}</h1>
    </div>
  );
}
