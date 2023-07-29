export default function UserDecks({ params }) {
  return (
    <div>
      <h1>
        This page displays all decks for the profile with username {params.user}
      </h1>
    </div>
  );
}
