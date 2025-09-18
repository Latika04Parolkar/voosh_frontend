# 💬 Voosh RAG-Powered Chatbot – Frontend

This is the **React frontend** for the Voosh chatbot built using a Retrieval-Augmented Generation pipeline over news data.

---

## 🌐 Tech Stack Used

| Area       | Technology          |
|------------|---------------------|
| Framework  | React (Vite)        |
| Styling    | SCSS (SASS)         |
| State      | React Hooks         |
| API Comm.  | Axios               |
| Live Dev   | Vite                |

---

## 📁 Folder Structure

```
voosh_frontend/
├── src/
│   ├── components/
│   │   └── Chat.jsx           # Chat UI with session + reset
│   ├── styles/
│   │   └── Chat.scss          # SCSS styles for chat
│   ├── App.jsx                # Main app container
│   ├── main.jsx               # Vite entry
├── public/
│   └── index.html             # HTML template
├── package.json
├── vite.config.js
└── README.md
```

---

## 💻 Features

- Chat interface with user + bot messages
- React SCSS-based styling
- REST API integration via Axios
- Reset session button
- Chat history restored per session
- (Optional) Streaming responses (future improvement)

---

## 📦 Install & Run Frontend

```bash
# Install deps
npm install

# Start local dev server
npm run dev
```

Visit 👉 http://localhost:5173

---

## 🔌 API Integration

The frontend communicates with:

| Endpoint            | Method | Purpose                          |
|---------------------|--------|----------------------------------|
| `/chat`             | POST   | Send message & receive reply     |
| `/chat/history/:id` | GET    | Fetch session chat history       |
| `/chat/reset`       | POST   | Clear session history            |

---

## 🧠 Chat Flow

1. On mount, frontend fetches chat history from `/chat/history/:userId`
2. User sends a message → `/chat` is called
3. Response is shown in the UI
4. Reset button clears session via `/chat/reset`

---

## 🔧 Config Notes

- API Base URL is configured in Axios (`src/api.js`)
- Each user gets a `userId` (randomly generated) and stored in `localStorage` for session persistence

---

## 🧹 Future Improvements

- Add typing animation or streaming
- Add socket support (optional)
- Mobile responsive UI
- Add loading indicator
- Add avatars for messages

---

## 🧑‍💻 Developer Notes

- Clean folder structure
- Minimal styling using SCSS
- Axios used for backend calls
- `localStorage` used for session tracking

---

## 🔗 Links

- Backend: [voosh_backend](https://github.com/Latika04Parolkar/voosh_backend)
