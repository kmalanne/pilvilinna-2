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
      <h3>
        VALIKOIMA JA HINNASTO (alkaen 1.9.2020), kaikki hinnat sisältävät alv
        14%
      </h3>
      <div className="item-header">
        <p>
          Uniikit täytekakut <span>alk. 70€</span>
        </p>
      </div>
      <p>
        Täytekakut valmistetaan käsityönä asiakkaan toiveiden mukaan. Kakuissa
        on täytteenä runsaat rahka- tai tuorejuustopohjaiset liivatteella
        hyydytetyt mousset. 10 hengen kakussa 1 maku ja 20- 30 hengen kakuissa
        1-2 makua. Kuorrutteena on maustettu marenkivoikreemi ellei muuta
        toivota. Pohjaksi voit valita vaalean- tai kaakaopohjan. Kakkujen
        korkeus on noin 10-12cm.
      </p>
      <ul>
        <li>
          noin 10 h (halkaisija 15cm) <strong>70,00€</strong>
        </li>
        <li>
          noin 20 h (halkaisija 23cm) <strong>90,00€</strong>
        </li>
        <li>
          noin 30 h (halkaisija 25cm) <strong>120,00€</strong>
        </li>
      </ul>
      <p>
        Kakkumenu (suosituimmiksi nousseet yhdistelmät valintaasi helpottamaan):
      </p>
      <ul>
        <li>
          Vadelman viettelys (vaalea pohja, vadelma- ja valkosuklaamousse)
        </li>
        <li>
          Isoäidin mustikkapiirakka (vaalea pohja, mustikka-kardemumma- ja
          vaniljamousse)
        </li>
        <li>
          Tropiikin kutsu (vaalea pohja, mansikka-lime- ja mango-ananasmousse)
        </li>
        <li>Sweet and sour (vaalea pohja, kinuski- ja sitruunamousse)</li>
        <li>
          Metsäretkellä (vaalea pohja, vaniljamousse puolukoilla ja
          kinuskimousse)
        </li>
        <li>
          Haaveideni kakku (oma valintainen pohja ja 1- 2 täytettä toiveidesi
          mukaan)
        </li>
      </ul>
      <div className="item-header">
        <p>
          Keksipohjaiset moussekakut <span>55€</span>
        </p>
      </div>
      <p>
        Halkaisijaltaan 22-24cm, riittävyys noin 12 henkeä. Halutessasi voit
        vaihtaa keksipohjan mutakakkupohjaan <strong>+5€</strong>
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
      <ul>
        <li>vadelma-valkosuklaa</li>
        <li>tuplasuklaa (tumma- ja valkosuklaa)</li>
        <li>maapähkinä-suklaa</li>
        <li>suklaa-nutella</li>
        <li>mustikka-sitruuna</li>
        <li>banaani-kinuski</li>
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
      </ul>
      <div className="item-header">
        <p>
          Cookiet <span>1,00€/kpl</span>
        </p>
      </div>
      <ul>
        <li>suklaahippu</li>
        <li>suklaa</li>
      </ul>
      <div className="item-header">
        <p>
          Macarons <span>1,30€/kpl</span>
        </p>
      </div>
      <p>
        Tilauserä noin 25 kpl (myös minimitilaus) yhtä väriä/makua, hinta{' '}
        <strong>32,50€</strong>
      </p>
      <ul>
        <li>sitruuna</li>
        <li>lime</li>
        <li>nutella</li>
        <li>suolakinuski</li>
        <li>mustaherukka</li>
        <li>suklaa</li>
      </ul>
      <div className="item-header">
        <p>
          Voileipäkakut <span>alk. 90€</span>
        </p>
      </div>
      <p>
        Voileipäkakut valmistetaan itsetehtyyn leipään, halkaisija noin 25cm,
        riittävyys noin 20 henkeä
      </p>
      <ul>
        <li>
          kinkku/kalkkuna <strong>90€</strong>
        </li>
        <li>
          texmex broileri (sisältää laktoosia) <strong>90€</strong>
        </li>
        <li>
          lämminsavulohi <strong>95€</strong>
        </li>
        <li>
          kylmäsavuporo <strong>95€</strong>
        </li>
        <li>
          kasvis <strong>90€</strong>
        </li>
      </ul>
      <p>
        Pilvilinnan lautturi; laktoositon saaristolaisleipä{' '}
        <strong>7,00€</strong> kpl, <strong>12,00€</strong> 2 kpl
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
