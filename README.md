
# Online Library System

An online library management app built with React, Redux, and Tailwind CSS. Users can browse books, view book details, and add new books. The app uses dummy data stored in `localStorage` and includes features like search, category filtering, and dynamic routing.

---

## Features

- **Home Page**
  - Displays book categories: *Fiction*, *Non-Fiction*, *Sci-Fi*
  - Highlights a few popular books per category
  - Fixed navigation bar

- **Browse Books**
  - Filter books by category via dropdown or dynamic route (`/books/:category`)
  - Search books by title or author
  - Responsive grid layout of books

- **Book Details**
  - View full details of a selected book
  - Displays similar books from the same category

- **Add Book**
  - Form with input validation
  - Adds a book to the local store and displays it in Browse
  - Stored using Redux and localStorage

- **404 Page**
  - Gracefully handles undefined routes

---

## Technologies Used

- React (with Vite)
- Redux Toolkit
- Tailwind CSS
- localStorage (for persistent data)
- React Router v6

---

## File Structure

src/
│
├── components/         # Reusable UI components
│   ├── bookCard.jsx
│   ├── bookSection.jsx
│   └── navbar.jsx
│
├── pages/              # Page components
│   ├── Home.jsx
│   ├── browseBooks.jsx
│   ├── bookDetails.jsx
│   ├── addBook.jsx
│   └── 404_NotFound.jsx
│
├── redux/              # Redux setup
│   ├── bookSlice.js
│   ├── store.js
│   └── books.js        # Dummy book data
│
├── styles.css          # Tailwind import
├── App.jsx             # Main app router
└── main.jsx            # React DOM root

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/online-library.git
cd online-library
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## Notes

- Tailwind CSS is integrated via the official [Vite + Tailwind setup](https://tailwindcss.com/docs/guides/vite).
- Book data is preserved in `localStorage` — refreshing the page won't clear your library.
- If needed, you can reset by clearing `localStorage` from the browser dev tools.

---

## Credits

This project was built as part of a learning experience to practice:

- State management with Redux
- Routing with React Router
- Styling with Tailwind CSS
- Component-based architecture in React
