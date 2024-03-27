import { FC, useEffect } from "react";
import { Footer, Header } from "../sections";
import { Outlet } from "react-router-dom";
import { useGetProvenance } from "../hooks";
import { useCasinoStore } from "../store/casinoStore";
import { getDataCasino } from "../services/dataCasino";
import axios from "axios";
import { Loader } from "../common/components";

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  const { setDataCasino, dataCasino } = useCasinoStore();

  useGetProvenance();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const casinoData = await getDataCasino();
        setDataCasino(casinoData.data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.log(error.response.data.displayMessage);
        }
      }
    };

    fetchData();
  }, []);

  if (dataCasino == null) return <Loader />;
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
