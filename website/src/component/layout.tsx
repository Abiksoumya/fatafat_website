import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../App.css";
import Header from "./header";
import Tables from "./tables";
import Info from "./info";
import OldResult from "./old.result";

export default function Layout () {

    return(
        <>
      <Header />
        <Tables />
        <Info />
    </>
    )
}