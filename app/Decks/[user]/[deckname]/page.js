"use client";

import DisplayListShort from "@/app/components/ListFormattedByType/DisplayList/DisplayListShort";
import styles from "./deckname.module.css";
import CardDisplayShort from "@/app/components/globals/CardDisplayShort";
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
    commander: false,
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

  const [exampleDeck, setExampleDeck] = useState([
    exampleCard,
    exampleCard2,
    exampleCard,
    exampleCard3,
    exampleCard,
  ]);
  
  const [formattedDeck, setFormattedDeck] = useState([]);

  useEffect(() => {
    const formattedDeck = formatIntoTypes(exampleDeck);
    setFormattedDeck(formattedDeck);
  }, [exampleDeck]);

  return (
    <div className={styles.PageContainer}>
      <h1>
        {" "}
        This Deck Displays the deck titled {params.deckname}. Created by the
        user named {params.user}
      </h1>
      <div>
        {formattedDeck.map((type, index) => {
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
