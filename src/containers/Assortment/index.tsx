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
      <h4>
        VALIKOIMA JA HINNASTO (alkaen 1.1.2020), kaikki hinnat sisältävät alv
        14%
      </h4>
      <p className="paragraph-header">Uniikit täytekakut</p>
      <p>
        Täytekakut valmistetaan käsityönä asiakkaan toiveiden mukaan. Kakuissa
        on täytteenä runsaat rahka- tai tuorejuustopohjaiset liivatteella
        hyydytetyt mousset. 10 hengen kakussa 1 maku ja 20-30 hengen kakuissa
        1-2 makua. Kuorrutteena on maustettu marenkivoikreemi ellei muuta
        toivota. Kakkujen korkeus on noin 10-12cm.
      </p>
      <ul>
        <li>
          noin 10 h (halkaisija 15cm) alk. <strong>65,00€</strong>
        </li>
        <li>
          noin 20 h (halkaisija 23cm) alk. <strong>85,00€</strong>
        </li>
        <li>
          noin 30 h (halkaisija 25cm) alk. <strong>105,00€</strong>
        </li>
      </ul>
      <p>
        Lopullisen hinnan kakullesi saat, kun tiedän toiveesi. Aikaa vievät
        sokerimassakoristeet taikka muuten runsaat koristelut (esim. runsaasti
        aitoja kukkia) nostavat kakun hintaa.
      </p>
      <p>
        Kakkumenu (suosituimmiksi nousseet yhdistelmät valintaasi helpottamaan):
      </p>
      <ul>
        <li>
          Vadelman viettelys (vaalea pohja, vadelma- ja valkosuklaamousse)
        </li>
        <li>
          Isoäidin mustikkapiirakka (vaalea pohja, mustikka-kardemumma- ja
          valkosuklaa TAI vaniljamousse)
        </li>
        <li>
          Tropiikin kutsu (vaalea pohja, mansikka-lime- ja mango-ananasmousse)
        </li>
        <li>
          Suklaata rakkaalleni (kaakaopohja, maitosuklaa- ja valkosuklaamousset)
        </li>
        <li>
          Metsäretkellä (vaalea pohja, vaniljainen puolukkamousse ja
          kinuskimousse)
        </li>
        <li>
          Haaveideni kakku (oma valintainen pohja; vaalea, kaakao tai mehevä
          suklaa ja 1- 2 täytettä toiveidesi mukaan)
        </li>
      </ul>
      <p className="paragraph-header">
        Kreemikakut alk. <strong>65€</strong>
      </p>
      <p>
        Tiivispohjainen täytekakku, jonka välissä ja kuorrutteena maustettu
        voipohjainen kreemi
      </p>
      <ul>
        <li>maapähkinä-suklaa</li>
        <li>vadelma-timjami</li>
        <li>porkkana</li>
      </ul>
      <p className="paragraph-header">
        Keksipohjaiset moussekakut alk. <strong>45€</strong>
      </p>
      <p>
        Tehdään halkaisijaltaan 24cm vuokaan, riittävyys noin 12-15 h.
        Halutessasi voit vaihtaa keksipohjan mutakakkupohjaan +5€
      </p>
      <p className="paragraph-header">Kuppikakut/ minikuppikakut</p>
      <p>
        Minimitilaus 12 kpl normaali / 24 kpl mini <strong>45€</strong>, teeman
        mukainen koristelu <strong>+5€</strong>
      </p>
      <ul>
        <li>vadelma-valkosuklaa</li>
        <li>tuplasuklaa</li>
        <li>maapähkinä-suklaa</li>
        <li>nutella</li>
        <li>mustikka-sitruuna</li>
        <li>banaani-kinuski</li>
      </ul>
      <p className="paragraph-header">
        Pilvet (maustetut isot marengit) <strong>0,75€</strong> kpl
      </p>
      <ul>
        <li>tumma suklaa</li>
        <li>mokka-suklaa</li>
        <li>piparminttu-suklaa</li>
        <li>turkinpippuri</li>
      </ul>
      <p className="paragraph-header">
        Cookiet <strong>1,00€</strong> kpl
      </p>
      <ul>
        <li>suklaahippu</li>
        <li>suklaa</li>
      </ul>
      <p className="paragraph-header">
        Macarons <strong>1,30€</strong> kpl
      </p>
      <p>Minimitilaus 20 kpl per väri/maku</p>
      <ul>
        <li>sitruuna</li>
        <li>lime</li>
        <li>nutella</li>
        <li>suolakinuski</li>
        <li>mustaherukka</li>
        <li>suklaa</li>
      </ul>
      <p className="paragraph-header">Voileipäkakut</p>
      <p>
        Voileipäkakut valmistetaan itsetehtyyn leipään, halkaisija noin 25cm,
        riittävyys 20-25 h
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
      <p>Teen myös muita makeita ja suolaisia leivonnaisia, kysy tarjousta!</p>
    </Container>
    <Gallery images={images}></Gallery>
    <div style={{ backgroundColor: 'red' }}>Kakkugalleria</div>
  </div>
);
