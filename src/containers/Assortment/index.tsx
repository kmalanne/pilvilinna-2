import React from 'react';
import { Container } from 'react-bootstrap';
import { Banner } from '../../components/Banner';
import { Gallery } from '../../components/Gallery';
import './index.css';

const images = [
  {
    previewURL: '/images/pilvilinnanleipomo-1.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-1.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-2.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-2.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-3.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-3.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-4.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-4.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-5.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-5.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-6.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-6.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-7.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-7.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-8.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-8.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-9.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-9.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-10.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-10.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-11.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-11.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-12.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-12.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-13.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-13.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-14.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-14.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-15.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-15.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-16.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-16.jpg',
  },
];

export const Assortment = () => (
  <div className="content assortment">
    <Banner imgUrl="/images/banner-1.jpg" text="Valikoima ja hinnasto"></Banner>
    <Container>
      <h3>VALIKOIMA JA HINNASTO, kaikki hinnat sisältävät alv 14%</h3>
      <div className="item-header">
        <p>
          Uniikit täytekakut <span>alk. 70€</span>
        </p>
      </div>
      <p>
        Täytekakut valmistetaan käsityönä asiakkaan toiveiden mukaan. Kakuissa
        on täytteenä rahka- tai tuorejuustopohjaiset liivatteella hyydytetyt
        mousset. Pienemmissä kakuissa 1 maku ja isommissa kakuissa 2 makua.
        Kuorrutteena on maustettu marenkivoikreemi ellei muuta toivota. Pohjaksi
        voit valita vaalean- tai kaakaopohjan. Hinta sisältää peruskoristelun.
        Hyvin runsaista taikka aikaa vievistä koristeluista hinta erikseen.
      </p>
      <ul>
        <li>
          7-9 henkeä <strong>70,00€</strong>
        </li>
        <li>
          10-12 henkeä <strong>75,00€</strong>
        </li>
        <li>
          18-20 henkeä <strong>100,00€</strong>
        </li>
        <li>
          25-30 henkeä <strong>125,00€</strong>
        </li>
      </ul>
      <p>
        Kakkumenu 18-20 hengen ja noin 25 hengen kakkuihin (soveltaen pienempiin
        kakkuihin)
      </p>
      <ul>
        <li>
          Vadelman viettelys (vaalea pohja, vadelmamousse ja valkosuklaamousse
          valkosuklaarouheella)
        </li>
        <li>
          Isoäidin mustikkapiirakka (vaalea pohja, mustikka-kardemummamousse ja
          vaniljamousse mustikoilla)
        </li>
        <li>
          Tropiikin kutsu (vaalea pohja, mansikka-limemousse ja mango-
          ananasmousse (kesäisin mangomousse mansikoilla))
        </li>
        <li>
          Sweet and sour (vaalea pohja, sitruunamousse ja kinuskimousse
          suolaisella maitosuklaarouheella)
        </li>
        <li>
          Kinuskin kuiskaus (vaalea pohja, kinuskimousse vadelmilla ja
          vadelmamousse)
        </li>
        <li>
          Metsäretkellä (vaalea pohja, vaniljamousse puolukoilla ja
          kinuskimousse)
        </li>
        <li>
          Lakritsin lumo (vaalea pohja, lakritsimousse vadelmilla ja
          vadelmamousse)
        </li>
        <li>
          Haaveista totta (oma valintainen pohja ja 1-2 täytettä toiveidesi
          mukaan)
        </li>
      </ul>
      <div className="item-header">
        <p>
          Keksipohjaiset moussekakut <span>alk. 50€</span>
        </p>
      </div>
      <p>
        Moussekakuissa on rahka- tai tuorejuustopohjaiset liivatteella
        hyydytetyt mousset ja keksipohja. Maut vastaavia kuin täytekakuissa.
      </p>
      <ul>
        <li>
          n. 10 henkeä <strong>50,00€</strong>
        </li>
        <li>
          n. 15 henkeä <strong>75,00€</strong>
        </li>
      </ul>
      <div className="item-header">
        <p>
          Pilvilinnan suklaakakku <span>65€</span>
        </p>
      </div>
      <p>
        Maailman paras suklaakakku, jossa mehevän suklaisen pohjan välissä
        kirsikkahilloa ja mascarpone-suklaamoussea sekä päällä täydellinen
        suklaakuorrute.
      </p>
      <p>
        Voit myös ostaa Pilvilinnan suklaakakun reseptin (toimitetaan
        sähköpostiin) hintaan <strong>7,90€</strong>
      </p>
      <div className="item-header">
        <p>
          Kuppikakut / minikuppikakut <span>45€</span>
        </p>
      </div>
      <p>
        Minimitilaus 12 kpl normaali / 24 kpl mini, teeman mukainen koristelu{' '}
        <strong>+5€</strong>
      </p>
      <p>Makuina muun muassa:</p>
      <ul>
        <li>vadelma-valkosuklaa</li>
        <li>suklaa</li>
        <li>suklaa-valkosuklaa</li>
        <li>minttusuklaa</li>
        <li>maapähkinä-suklaa</li>
        <li>suklaa-Nutella</li>
        <li>mustikka-sitruuna</li>
        <li>banaani-kinuski</li>
        <li>Biscoff</li>
      </ul>
      <div className="item-header">
        <p>
          Pilvet (maustetut isot marengit) <span>0,75€/kpl</span>
        </p>
      </div>
      <ul>
        <li>tumma suklaa</li>
        <li>mokka-suklaa</li>
        <li>piparminttu-suklaa</li>
        <li>turkinpippuri</li>
        <li>vadelma</li>
      </ul>
      <div className="item-header">
        <p>
          Cookiet <span>1,20€/kpl</span>
        </p>
      </div>
      <ul>
        <li>suklaahippu</li>
        <li>suklaa</li>
      </ul>
      <div className="item-header">
        <p>
          Macarons <span>1,50€/kpl</span>
        </p>
      </div>
      <p>
        Tilauserä 22kpl/maku, väri valittavissa toiveiden mukaan) hinta{' '}
        <strong>36€</strong>
      </p>
      <ul>
        <li>sitruuna</li>
        <li>lime</li>
        <li>mustaherukka</li>
        <li>suolakinuski</li>
        <li>suklaa</li>
        <li>Nutella</li>
        <li>Biscoff</li>
      </ul>
      <div className="item-header">
        <p>
          Voileipäkakut <span>alk. 100€</span>
        </p>
      </div>
      <p>
        Voileipäkakut valmistetaan pyöreinä itsetehtyyn leipään. Saatavilla vain
        yksi koko, jonka riittävyys noin 18-20 henkeä.
      </p>
      <ul>
        <li>
          kinkku <strong>100€</strong>
        </li>
        <li>
          kalkkuna <strong>100€</strong>
        </li>
        <li>
          texmex broileri (sisältää laktoosia) <strong>100€</strong>
        </li>
        <li>
          lämminsavulohi <strong>110€</strong>
        </li>
        <li>
          kylmäsavuporo <strong>110€</strong>
        </li>
        <li>
          kasvis <strong>100€</strong>
        </li>
      </ul>
      <div className="item-header">
        <p>Pilvilinnan lautturi</p>
      </div>
      <p>
        Laktoositon saaristolaisleipä <strong>7,00€</strong> kpl,{' '}
        <strong>12,00€</strong> 2 kpl
      </p>
      <div className="info-text-container">
        <p>
          <strong>
            Teen myös muita makeita ja suolaisia leivonnaisia, kysy tarjousta!
          </strong>
        </p>
        <p>
          Lisäksi voit pyytää tarjousta juhlajärjestelyistä- tai avusta. Olen
          ollut mm. koristelemassa juhlapaikkoja ja auttelemassa juhlissa
          (kahvin keitto, tarjoilu, siistiminen).
        </p>
        <p>
          {' '}
          Tuotteet valmistetaan aina laktoosittomista raaka-aineista
          mahdollisuuksien mukaan, mutta osa esim. täytekakun täytteistä
          sisältää laktoosia (mm. valkosuklaa). Teen tilauksesta myös
          gluteenittomia sekä tarvittaessa jonkin verran maidottomia ja
          munattomia leivonnaisia. Huomioithan kuitenkin, että samassa tilassa
          käsitellään normaaleja tuotteita (gluteenia sisältävät viljat, maidot,
          pähkinät...), joten tuotteissa saattaa esiintyä jäämiä. Ilmoitathan
          aina mahdolliset ruokavaliot/ allergiat tilauksen yhteydessä!
        </p>
        <p>
          {' '}
          En valmista lisenssoituja hahmoja (mm. Frozen, My Little Pony, Ryhmä
          Hau, Pipsa Possu jne.) kakkuihin tai kyseisiä kakkuja. Teemaa voidaan
          mukailla kakuissa ja halutessaan asiakas voi itse lisätä kakkuun esim.
          koristeeksi käyvän lelun tai muun koristeen.
        </p>
      </div>
    </Container>
    <Container className="gallery-container">
      <Gallery images={images}></Gallery>
    </Container>
  </div>
);
