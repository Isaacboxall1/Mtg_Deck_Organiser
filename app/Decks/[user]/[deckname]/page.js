"use client";

import DisplayListShort from "@/app/components/ListFormattedByType/DisplayList/DisplayListShort";
import styles from "./deckname.module.css";
import { useEffect, useState } from "react";
import { formatIntoTypes } from "@/utility/functions/formatIntoTypes";

export default function UserDeckDisplay({ params }) {
  const exampleCard = {
    card_id: "1234",
    card_name: "Charging Badger",
    quantity: 2,
    type: "Creature",
    mana_cost: "{1}{G}{W}",
    price: 0.25,
    card_image: "",
    commander: false,
    sideboard: false,
  };
  const exampleCard2 = {
    card_id: "1234",
    card_name: "Nissa, Harbinger of Example Cards",
    quantity: 4,
    type: "Legendary Planeswalker",
    mana_cost: "{3}{G}{G}",
    price: 0.25,
    card_image: "",
    commander: true,
    sideboard: false,
  };
  const exampleCard3 = {
    card_id: "1234",
    card_name: "Karn, Overpowered planeswalker",
    quantity: 4,
    type: "Planeswalker",
    mana_cost: "{3}{G}{G}{3}",
    price: 0.25,
    card_image: "",
    commander: false,
    sideboard: false,
  };
  const exampleCard4 = {
    card_id: "1234",
    card_name: "Gabi PooPoo",
    quantity: 1,
    type: "Instant",
    mana_cost: "{3}{B}{B}",
    price: 0.25,
    card_image: "",
    commander: false,
    sideboard: false,
  };

  const [exampleDeck, setExampleDeck] = useState([
    exampleCard,
    exampleCard2,
    exampleCard,
    exampleCard3,
    exampleCard4,
  ]);

  const [formattedDeck, setFormattedDeck] = useState([]);
  const [commander, setCommander] = useState([]);

  useEffect(() => {
    const commander = exampleDeck.filter((card) => card.commander === true);
    setCommander(commander);
  }, [exampleDeck]);

  useEffect(() => {
    const formattedDeck = formatIntoTypes(
      exampleDeck.filter((card) => card.commander == false)
    );
    setFormattedDeck(formattedDeck);
  }, [exampleDeck]);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        This Deck Displays the deck titled {params.deckname}. Created by the
        user named {params.user}
      </h1>
      <div className={styles.deckContainer}>
        <div>
          <h1>Commander</h1>
          {<DisplayListShort cardArray={commander} />}
        </div>
        {formattedDeck.filter(type => type.cards.length>0).map((type, index) => {
          return (
            <div key={index}>
              <h2>{type.name}</h2>
              <DisplayListShort cardArray={type.cards} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
