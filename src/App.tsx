import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import AboutMe from "./routes/AboutMe";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import Layout from "./components/Layout";
import StarField from './components/StarField'; // StarField component

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Layout>
              <Home />
            </Layout>
          </>
        ),
      },
      {
        path: "/skills",
        element: (
          <>
            <Layout>
              <Skills />
            </Layout>
          </>
        ),
      },
      {
        path: "/about-me",
        element: (
          <>
            <Layout>
              <AboutMe />
            </Layout>
          </>
        ),
      },
      {
        path: "/projects",
        element: (
          <>
            <Layout>
              <Projects />
            </Layout>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Layout>
              <Contact />
            </Layout>
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="relative min-h-screen">
    <StarField />
    <RouterProvider router={router} />
  </div>
  )
}


export default App;
