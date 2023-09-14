import { Routes, Route   } from "react-router-dom";
import { Container } from "./App.styled";
import SharedLayout from "../SharedLayout/SharedLayout";
import { lazy } from "react";
const Home = lazy(() => import("../../pages/Home"));
const Catalog = lazy(() => import("../../pages/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites"));
const CarDetails = lazy(() => import("../../pages/CarDetails"));
const NotFound = lazy(() => import("../../pages/NotFound"));



export const App = () => {
    return (
        <Container>    
            <Routes>
             <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/catalog:id" element={<CarDetails/>} />
                    <Route path="*" element={<NotFound/>} />
             </Route>

            </Routes>
            </Container>
    )
}

