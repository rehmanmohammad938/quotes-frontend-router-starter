// ============================================================
// routes.jsx
//
// All route definitions live here instead of inline in main.jsx.
// Navbar renders once, above <Routes>, so it shows on every page
// no matter which route is active.
// ============================================================

// TODO (Part 1): bring in what you need from react-router to define
//   routes. Docs: https://reactrouter.com/start/declarative/routing
import { Routes, Route } from "react-router";
// TODO (Part 2): bring in the Navbar component
import { Navbar } from "./components/Navbar.jsx";
// TODO (Part 1): bring in the Home page
import { Home } from "./pages/Home.jsx";
// TODO (Part 3): bring in the QuoteDetail page
import { QuoteDetail } from "./pages/QuoteDetail.jsx";
// TODO (Part 4): bring in the AddQuote page
import { AddQuote } from "./pages/AddQuote.jsx";
// TODO (Part 5): bring in the NotFound page
import { NotFound } from "./pages/NotFound.jsx";

function AppRoutes() {
  return (
    <>
      {/* TODO (Part 2): render the navbar here, above your routes,
          so it shows no matter which page is active */}
      <Navbar />
      {/*
        TODO: define your routes below. */}
        <Routes>
        {/*Part 1 — Home renders at the root path "/". This is an
          "index" route: it renders at the parent's own path
          instead of a sub-path.*/}
          <Route index element={<Home />} />
        {/*Part 3 — QuoteDetail renders at a dynamic path that captures
          an id from the URL (a "path parameter").*/}
          <Route path="/quotes/:id" element={<QuoteDetail />} />
        {/*Part 4 — AddQuote renders at a fixed path.*/}
          <Route path="/quotes/new" element={<AddQuote />} />
        {/*Part 5 — NotFound catches anything that didn't match any
          route above. It must come LAST, or it swallows every
          route below it.

        Docs: https://reactrouter.com/start/declarative/routing
      */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
