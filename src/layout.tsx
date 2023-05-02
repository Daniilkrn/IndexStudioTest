import { useState , useEffect, } from 'react';
import styled from 'styled-components';
import './styles/app.scss'
import './styles/error.scss'
import Card from './components/Card/Card';
import axios from "axios"
import {ReactComponent as FirstO} from '../src/images/1or.svg'
import {ReactComponent as SecO} from '../src/images/2or.svg'
import ScrollToTOP from './components/UI/ScrollToTop';
import Error from './components/Error/Error';
import CardContent from './components/Card/CardContent';
import HeaderLoader from './components/Loader/headerLoader';
import FooterLoader from './components/Loader/footerLoader';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setDefaultFO, setDefaultSO } from './store/reducers2/oriantationSlice';
// import FetchErrorLoad from './components/Error/FetchErrorLoad';
import Loader from './components/UI/loader';
import { RootState } from './store/store';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
`
const Main = styled.main`
  width: 100%;
`
const Footer = styled.footer`
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const FooterContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items:center;
`
const CardsContainer = styled.div`
  width: 968px;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: center;
`
const Header = styled.header`
  width:100%;
  height:100px;
  margin: 0px;
  padding: 0;
  display: flex;
  justify-content: center;
`
const HeaderContainer = styled.div`
  width:1280px;
  height:auto;
  display: flex;
  flex-direction:row;
  justify-content: flex-end;
  align-items: center;
`
const OrBtns = styled.div`
  padding: 16px 34px;
  border-radius: 1em;
`
export type Post = {
  id: string,
  seen: boolean,
  price: number,
  title: string,
  address: string,
  about: string,
  createdAt: string
}

type Items = {
  items: []
}

function Layout() {
  
  const dispatch = useDispatch();

  const rtkFirstO = useSelector<RootState>(state => state.cardOriantation.flagFirstOriantaion)
  const rtlSecO = useSelector<RootState>(state => state.cardOriantation.flagSecondOriantaion)
  
  const [title,setTitle] = useState<Post[]>([])
  // const [photo, setPhoto] = useState([])
  const [allData,setAllData] = useState(false)
  const [sizeFetch,setSizeFetch] = useState(true)

  const [currentPage,setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [fetchError, SetFetchError] = useState(false)
  const [fetchErrorLoad,SetFetchErrorLoad] = useState(false)

  const [, setIsOpenLazy] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollBtn,setScrollBtn] = useState(false)
  const [headerNonFix,setHeaderNonFix] = useState(true)

  /*Header*/
  const [secO_State,setO_State] = useState<any>(rtlSecO)
  const [firstO,setFisrtO_State] = useState<any>(rtkFirstO)
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  
  useEffect(() => {
    if(!sizeFetch) {
      setAllData(true)
    }
    if(scrollPosition >= 100){
      setScrollBtn(true)
      setHeaderNonFix(false)
    } else {
      setHeaderNonFix(true)
      setScrollBtn(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);
  
  useEffect(() => {
    if(fetching){
      try{
        axios.get<Items>(`https://testguru.ru/frontend-test/api/v1/items?page=${currentPage}`, {
          params : {
            size: 20,
          }
        })
            .then(response => {
              setTitle([...title, ...response.data.items])
              if(response.status === 200) {
                /* Пустой массив данных */
                // response.data.items = new Array(0)
                if(response.data.items.length === 0) setSizeFetch(false)
                if(response.data.items.length === 0 && currentPage === 1) SetFetchError(true)
              }
            })
            .catch(function (error){
              SetFetchError(true)
            })
            .finally(()=>{
                setFetching(false)
            })
      } catch (error) {
        if(axios.isAxiosError(error)){
          console.log(error.response?.data.errText,'error');
        } else if(error instanceof Error){
          console.log(error)
        }
      }
    }
  }, [fetching])
  return (
    <AppWrapper className="App">
      {fetchError ? null :
      <Header className={headerNonFix ? "headerNonFix" : "header"}>
        <HeaderContainer className='header_container'> 
          <OrBtns className={!headerNonFix ? "OrBtns" : ""} >
          {fetching  && currentPage === 1 ? <HeaderLoader/> : 
          <>
            <FirstO className={firstO ? 'firstO active' : 'firstO'} onClick={()=>{
              setO_State(false)
              setFisrtO_State(true)
              dispatch(setDefaultFO(true))
              dispatch(setDefaultSO(false))
            }}></FirstO>
            <SecO className={secO_State ? 'secondO active' : 'secondO'} onClick={()=>{
              setO_State(true)
              setFisrtO_State(false)
              dispatch(setDefaultFO(false))
              dispatch(setDefaultSO(true))
            }}></SecO>
          </>
          } 
          </OrBtns>
        </HeaderContainer>
      </Header>
      }
      { fetchError ? 
        <Error/> :
        <Main className={headerNonFix ? "main" : "mainNonFix"}>
        <CardsContainer className='cardsContainer'>
          {
            fetching && currentPage === 1 ?  
              [...new Array(20)].map((_,idx)=> <Card key={idx} secO_State={secO_State}></Card>)
              :
              title && 
              title.map(el => 
              <CardContent key={el.id} el={el} secO_State={secO_State}></CardContent>  
              )         
          }
        </CardsContainer>
      { scrollBtn ? <ScrollToTOP/> : null }
        </Main>
      }
      {allData ? null :
      <Footer>
        <FooterContainer>
          {fetchErrorLoad ? 
          <div className='error load'>
            <p>Ошибка при загрузке</p>
            <p className='load'style={{
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '16px',
                textAlign: 'right',
                color: '#00A0AB',
            }} onClick={()=>{
              setFetching(true)
          }}>Повторить попытку</p>
          </div> :
          <button className="getMoreData" onClick={()=>{
            setIsOpenLazy(true)
            setCurrentPage(prevState => prevState + 1)
            setFetching(true)
          }}>{title.length === 0 ? <FooterLoader/> : 
             (
              fetching && !fetchError ? <Loader/> :
              (
                !sizeFetch ? null : 'Посмотреть ещё'
              ) 
             )
          }
          </button>
          }
        </FooterContainer>
      </Footer>
      }
    </AppWrapper>
  );
}

export default Layout;