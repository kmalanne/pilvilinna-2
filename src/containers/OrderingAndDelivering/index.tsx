import React from 'react';
import { Container } from 'react-bootstrap';
import { Banner } from '../../components/Banner';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const OrderingAndDelivering = () => (
  <div className="ordering-delivering">
    <Banner
      imgUrl="/images/banner-3.jpg"
      text="Tilaus- ja toimitusehdot"
    ></Banner>
    <Container>
      <h3>Tilaus- ja toimitusehdot:</h3>
      <p>
        Leivonnaiset valmistetaan käsityönä elintarvikehuoneistoksi hyväksytyssä
        kotikeittiössä Nokialla. Toimin yksin, joten tilaus kannattaa jättää
        hyvissä ajoin. Toisinaan pystyn ottamaan tilauksia vastaan lyhyelläkin
        varoitusajalla, joten kannattaa aina kysyä. Jätäthän tilauksen
        ensisijaisesti sähköpostilla{' '}
        <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
          &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
        </a>{' '}
        tai tekstiviestillä/WhatsAppilla numeroon{' '}
        <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
      </p>
      <p>
        Tilauksen voi perua 4 päivää ennen noutoa. Tätä myöhemmistä
        peruutuksista veloitan 50% tilauksen hinnasta. Tilatusta ja noutamatta
        jääneestä tuotteesta veloitan koko summan. Toisinaan peruutus tulee
        ylitsepääsemättömän esteen (oma tai perheenjäsenen sairastuminen) vuoksi
        leipurin toimesta. Tällainen peruutus ilmoitetaan tilaajalle
        mahdollisimman ajoissa ja tilaus pyritään ohjaamaan eteenpäin eikä siitä
        veloiteta mitään. Huomioithan, että en myöskään maksa korvauksia
        tällaisista peruutuksista.
      </p>
      <p>
        Tilaukset noudetaan sovittuna ajankohtana leipomolta. Noudatathan
        sovittua ajankohtaa ja ilmoitat, mikäli siihen tulee muutoksia.
        Noutoaika on yleensä juhlapäivän aamuna. Kakut maksetaan noudettaessa
        kortilla tai käteisellä (tasaraha). Myös laskutusmahdollisuus. Lasku
        tulee olla maksettuna ennen noutoa.
      </p>
      <p>
        Luovutuksen jälkeen vastuu kakun oikeaoppisesta säilytyksestä ja
        kuljetuksesta siirtyy asiakkaalle. Esim. täyte- ja moussekakut
        säilytetään jääkaapissa (6 astetta tai alle) tarjoiluun saakka.
        Kuljetuksessa kannattaa huomioida tasainen alusta (auton
        takatila/jalkatila). Kesällä kakut on hyvä suojata kuumalta
        (kylmälaukut/kylmäkallet jne.), jotta kylmäketju ei pääse katkeamaan.
      </p>
      <p>Pidätän oikeudet muutoksiin.</p>
    </Container>
  </div>
);
