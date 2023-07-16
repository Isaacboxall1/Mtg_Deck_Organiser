# Magic: The Gathering Collection Organizer and Tracker

This project is an application designed to help Magic: The Gathering (MTG) enthusiasts track and manage their collection. Built with the robust technology stack of Next.js, React, Node.js, Supabase, Jest, React Testing Library and deployed on Netlify, the app aims to be an all-in-one solution for managing your MTG inventory, deck creation, and detailed card tracking. 

## Features

The following features have been implemented:

- **Collection Management**: Users can see a list of cards in their collection, which is populated from the user's database. You can sort this list by color, rarity, and supertype. A graphical overview of the users collection can be viewed, with details such as color and type splits, total value of collection, and number of cards. Card details are displayed, including color, mana cost, name, image, average price, and both super and subtypes.
- **Bulk Addition**: Users can add cards in bulk to their collection. Just enter the quantity followed by the name of the card, and the system checks against the database to confirm its validity. Any errors, such as unrecognized cards, are returned to the user.
- **Front-end and Back-end Integration**: The front-end and back-end systems have been successfully linked, allowing for seamless interaction and data transfer.
- **Login and Authentication**: Users can create an account and login to the system, with authentication handled by Supabase.
- **Continuous Integration**: Github Actions has been implemented to ensure that the code is always in a working state, with unit tests run on every push to the repository.
- **Search Functionality**: Users can search for cards to add to their collection, with optional advanced search allowing results to be filtered by color, rarity, and both super and subtypes.

![](https://github.com/Isaacboxall1/Share_Button_Component/blob/main/public/sharebutton.gif)


Future goals include:

- **Deck Creation and Sharing**: Users will be able to create and share decklists, with detailed information such as mana curve, color split, and card types displayed in easy-to-understand graphs.
- **TensorFlow Object Detection**: A stretch goal for the project is to integrate TensorFlow's object detection, enabling users to add cards to their collection simply by pointing their camera at the card.

## Upcoming Enhancements

- Implement styling with CSS for a better user interface and experience.
- Expand unit testing to ensure reliability and robustness of the system.
- Enable users to add and display decklists, enhancing the deck building experience.
- Create a database table to track decks and their corresponding cards.
- Profile Creation Page that Allows users to create a profile with their name, location, and a profile picture.

## Technologies Used

- Next.js
- React
- CSS Modules
- Node.js
- Supabase
- PostgreSQL
- Jest
- Github Actions
- React Testing Library
- Netlify

## Learning Experience

This project was a great learning experience for me. I have been able to further my understanding of a wide variety of technologies, including React Hooks, Node.js, Supabase, CSS Modules, React Testing Library, and Github Actions. I Have also learned the ins and outs of Next.js, which I have found to be a very powerful and useful framework, especially with features such as built in page routing. An experience I've really enjoyed getting to grips with is structuring and querying a large relational database, with multiple foreign keys for each table. I have also learned a lot about context and local storage when managing authentication and user data throughout this project. 

## Local Setup

To run this project locally:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Start the development server using `npm run dev`
## Author

- Isaac Boxall [LinkedIn](https://www.linkedin.com/in/isaac-boxall-310788138/)

