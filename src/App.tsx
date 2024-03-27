import { useEffect } from 'react'
import { Club, Events, Footer, Header, Hero,  Map,  Message,  Promotions,  Register,  Services, Social } from './sections'
import { getDataCasino } from './services/dataCasino';
import { useCasinoStore } from './store/casinoStore';
import axios from 'axios';
import { Loader, ModalKeops, ModalPolitics, ModalRegister, ModalTerms, Toast } from './common/components';
import { useGetProvenance } from './hooks';

function App() {

  const {setDataCasino, dataCasino} = useCasinoStore()

 useGetProvenance()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const casinoData = await getDataCasino();
        setDataCasino(casinoData.data)
      } catch (error) {
        if(axios.isAxiosError(error) && error.response)
        {
            console.log( error.response.data.displayMessage);
        }
      }
    };

    fetchData();
  }, []);

  if(dataCasino == null ) return <Loader/>
  

  return (
    <main>
      <Header/>
      <Hero/>
      <Services/>
      <Message/>
      <Club/>
      <Promotions/>
      <Events/>
      <Register/>
      <Map/>
      <Social/>
      <Footer/>
      {/*Alertas */}
      <Toast/>
      {/*Modals */}
      <ModalPolitics/>
      <ModalTerms/>
      <ModalRegister/>
      <ModalKeops/>
    </main>
  )
}

export default App
