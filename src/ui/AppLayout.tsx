import React, { type JSX } from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

export default function AppLayout() : JSX.Element {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
  return (
    <div className="min-h-dvh h-full">
        {isLoading && <Loader />}
      <Header />
      <main className="min-h-dvh h-full">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}
