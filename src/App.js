import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component Import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import StartFromTop from "./components/StartFromTop";

// Stying Css Import
import "./styles/App.css";

const Main = lazy(() => import("./pages/Main"));

const About = lazy(() => import("./pages/About"));
const GroupOfCompany = lazy(() => import("./pages/GroupOfCompany"));
const Achievements = lazy(() => import("./pages/Achievements"));
const QualityPolicy = lazy(() => import("./pages/QualityPolicy"));

const PharmaAndApiIntermediate = lazy(() =>
  import("./pages/Products/PharmaAndApiIntermediate")
);
const PigmentIntermediate = lazy(() =>
  import("./pages/Products/PigmentIntermediate")
);
const DyeIntermediate = lazy(() => import("./pages/Products/DyeIntermediate"));
const ProductDetail = lazy(() => import("./pages/Products/ProductDetail"));

const WeExport = lazy(() => import("./pages/WeExport"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

function App() {
  return (
    <>
      <BrowserRouter>
        <StartFromTop />
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/about" element={<About />} />
            <Route path="/groupOfCompany" element={<GroupOfCompany />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/qualityPolicy" element={<QualityPolicy />} />

            <Route
              path="/Products/pharma"
              element={<PharmaAndApiIntermediate />}
            />
            <Route path="/products/pigment" element={<PigmentIntermediate />} />
            <Route path="/products/dye" element={<DyeIntermediate />} />
            <Route
              path="/products/productDetail/:id"
              element={<ProductDetail />}
            />

            <Route path="/weExport" element={<WeExport />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
