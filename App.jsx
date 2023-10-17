// import Counter from "./components/Counter";
import Home from "./pages/Home";

// const { BrowserRouter, createBrowserRouter, Link } = window.ReactRouterDOM;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// console.log('aaa', ReactRouterDOM.createBrowserRouter)
// window.createRouter = ReactRouterDOM.createBrowserRouter;
// const router = ReactRouterDOM.createBrowserRouter([
//   {
//     path: "/",
//     element: Home,
//   },
// ]);

// const router = ReactRouterDOM.createBrowserRouter([
//   {
//     path: "/",
//     element: <div>dfsadfsdsf</div>,
//   },
//   // {
//   //   path: "/cv",
//   //   element: <Cv />,
//   // },
//   // {
//   //   path: "/login",
//   //   element: <Login />,
//   // },
//   // {
//   //   path: "/*",
//   //   element: <NotFound />,
//   // },
// ]);

// function Root() {
//   // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
//   // component below are unchanged
//   return (
//     <ReactRouterDOM.Routes>
//       <ReactRouterDOM.Route path="/" element={<Home />} />
//     </ReactRouterDOM.Routes>
//   );
// }

// const router = ReactRouterDOM.createBrowserRouter([
//   { path: "*", Component: Root },
// ]);

export default () => {
  return (
    <div>
      <h1>counterele mele</h1>
      <Home></Home>

      {/* <BrowserRouter>
      </BrowserRouter> */}

      {/* 
      <Counter text="numar de pere" />
      <Counter text="numar de banane" />
      <Counter text="numar de banane" />
      <Counter text="numar de banane" />
      <Counter text="numar de banane" /> */}
    </div>
  );
};
