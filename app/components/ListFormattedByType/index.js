import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchUserCards } from "@/utility/database/supabase/fetchusercollection";
import ListHeadings from "../globals/ListHeadings";
import styles from "./listformattedbytype.module.css";
import { superTypeSplit } from "@/utility/functions/formatToStats";
import ListStats from "./ListStats";
import GroupToggle from "../globals/GroupToggle";
import { useAuth } from "@/app/components/ContextProvider";

// TO DO
// add a search bar to search for cards by name
// add a button to sort by quantity
// add a button to sort by value
// style the page

export default function ListFormattedByType() {
  const [sortCriteria, setSortCriteria] = useState("type");
  const [collection, setCollection] = useState([]);
  const [updateNeeded, setUpdateNeeded] = useState(false);
  const [typeStats, setTypeStats] = useState([]);
  const [uniqueNum, setUniqueNum] = useState(0);

  const router = useRouter();
  const { user } = useAuth();

  // when the sort criteria is changed, the collection will be fetched and formatted by the new criteria
  useEffect(() => {
    console.log(user?user[0]?.id: 'no user id')
    async function fetchAndFormat() {

      if(!user) { 
        router.push('/Login')
        return;
      }
      let unsortedCollection = await fetchUserCards(
        user[0]?.id
      );
      let resortedCollection = formatByCriteria(sortCriteria, [
        ...unsortedCollection,
      ]);
      setUniqueNum(unsortedCollection.length);
      let sortedTypeStats = formatByCriteria("type", [...unsortedCollection]);
      let typeStats = superTypeSplit(sortedTypeStats);
      console.log(resortedCollection);
      setTypeStats(typeStats);
      setCollection([...resortedCollection]);
    }
    fetchAndFormat();
  }, [sortCriteria, updateNeeded]);

  // when a change is made to a card in the deck or a card is added, updateNeeded will be set to true
  // this will call the api to get the new collection and update the collection state
  // this will also set updateNeeded to false, so that the api call is not made again
  useEffect(() => {
    setUpdateNeeded(false);
  }, [updateNeeded]);

  return (
    <div id={styles.displaylistparent}>
      <ListStats
        collection={collection}
        typeStats={typeStats}
        uniqueNum={uniqueNum}
      />
      <GroupToggle
        setSortCriteria={setSortCriteria}
        sortCriteria={sortCriteria}
      />
      <div className={styles.leftalignedrow}>
        <ListHeadings />
        {collection?.map((type, index) => {
          return type.cards.length < 1 ? null : (
            <div key={index} className={styles.typegroup}>
              <h2 className={styles.listheader}>{type.name}</h2>
              <DisplayList
                cardArray={type.cards}
                setUpdateNeeded={setUpdateNeeded}
                setCollection={setCollection}
                collection={collection}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
