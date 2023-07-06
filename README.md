# Magic: The Gathering Collection Organizer and Tracker

This project is a robust application designed to help Magic: The Gathering (MTG) enthusiasts track and manage their collection. Built with the robust technology stack of Next.js, React, Node.js, Supabase, Jest, React Testing Library and deployed on Netlify, the app aims to be an all-in-one solution for managing your MTG inventory, deck creation, and detailed card tracking. 

## Features

The following features have been implemented:

- **Collection Management**: Users can see a list of cards in their collection, which is populated from the user's database. You can sort this list by color, rarity, and supertype. Card details are displayed, including color, mana cost, name, image, average price, and both super and subtypes.
- **Bulk Addition**: Users can add cards in bulk to their collection. Just enter the quantity followed by the name of the card, and the system checks against the database to confirm its validity. Any errors, such as unrecognized cards, are returned to the user.
- **Front-end and Back-end Integration**: The front-end and back-end systems have been successfully linked, allowing for seamless interaction and data transfer.

Future goals include:

- **Deck Creation and Sharing**: Users will be able to create and share decklists, with detailed information such as mana curve, color split, and card types displayed in easy-to-understand graphs.
- **TensorFlow Object Detection**: A stretch goal for the project is to integrate TensorFlow's object detection, enabling users to add cards to their collection simply by pointing their camera at the card.

## Upcoming Enhancements

- Implement styling with CSS for a better user interface and experience.
- Expand unit testing to ensure reliability and robustness of the system.
- Develop a search functionality to allow users to search the database for individual cards based on partial name or card attributes.
- Enable users to add and display decklists, enhancing the deck building experience.
- Create a database table to track decks and their corresponding cards.

## Technologies Used

- Next.js
- React
- Node.js
- Supabase
- Jest
- Github Actions
- React Testing Library
- Netlify

## Local Setup

To run this project locally:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the development server using `npm run dev`

## Contribution

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](<Your GitHub Issue page>) if you want to contribute.

## Author

- Isaac Boxall

[!linkedIn](https://www.linkedin.com/in/isaac-boxall-310788138/)