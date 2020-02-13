import React from 'react';
import { Container } from 'react-bootstrap';
import { Banner } from '../../components/Banner';
import './index.css';

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const phoneNumberDisplay = process.env.REACT_APP_PHONE_NUMBER_DISPLAY;

export const OrderingAndDelivering = () => (
  <div className="content ordering-delivering">
    <Banner
      imgUrl="/images/banner-3.jpg"
      text="Tilaus- ja toimitusehdot"
    ></Banner>
    <Container>
      <p className="paragraph-header">Tilaus- ja toimitusehdot:</p>
      <p>
        Tuotteet valmistetaan aina laktoosittomista raaka-aineista
        mahdollisuuksia mukaan, mutta osa esim. täytekakun täytteistä sisältää
        laktoosia (mm. valkosuklaa). Teen tilauksesta myös gluteenittomat,
        maidottomat ja munattomat tuotteet. Huomioithan kuitenkin, että samassa
        tilassa käsitellään normaaleja tuotteita (gluteenia sisältävät, maidot,
        pähkinät...), joten tuotteissa saattaa olla jäämiä näistä. Tämän vuoksi
        en voi taata esim. täyttä gluteenittomuutta tuotteille. Ilmoitathan aina
        mahdolliset allergiat tilauksen yhteydessä!
      </p>
      <p>
        En valmista lisenssoituja hahmoja (mm. Frozen, My Little Pony, Ryhmä
        Hau, Pipsa Possu jne.) kakkuihin. Tällaiset kakut voidaan toteuttaa
        esim. koristeeksi käyvällä lelulla.
      </p>
      <p>
        Leivonnaiset valmistetaan käsityönä elintarvikehuoneistoksi hyväksytyssä
        kotikeittiössä Nokialla. Toimin yksin, joten tilaus kannattaa jättää
        hyvissä ajoin. Toisinaan pystyn ottamaan tilauksia vastaan lyhyelläkin
        varoitusajalla, joten kannattaa aina kysyä. Jätäthän tilauksen
        tekstiviestillä/WhatsAppilla numeroon{' '}
        <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a> tai
        sähköpostilla{' '}
        <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
          &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
        </a>
      </p>
      <p>
        Alustava kysely ei ole vahvistettu varaus, joten otathan tämän huomioon
        tilausta tehdessäsi. Tilaus tulee aina vahvistaa vastaamalla
        sähköpostitse lähetettyyn tilausvahvistukseen.
      </p>
      <p>
        Tilauksen voi perua 4 päivää ennen noutoa. Tätä myöhemmistä
        peruutuksista veloitamme 50% tilauksen hinnasta. Tilatusta ja noutamatta
        jääneestä tuotteesta veloitamme koko summan. Toisinaan peruutus tulee
        ylitsepääsemättömän esteen (oma tai perheenjäsenen sairastuminen) vuoksi
        leipurin toimesta. Tällainen peruutus ilmoitetaan tilaajalle
        mahdollisimman ajoissa ja tilaus pyritään ohjaamaan eteenpäin eikä siitä
        veloiteta mitään. Huomioithan, että emme myöskään maksa korvauksia
        tällaisista peruutuksista.
      </p>
      <p>
        Tilaukset noudetaan sovittuna ajankohtana leipomolta. Noudatathan
        sovittua ajankohtaa ja ilmoitat, mikäli siihen tulee muutoksia.
        Noutoaika on yleensä juhlapäivän aamuna taikka edellisenä iltana. Kakut
        maksetaan noudettaessa käteisellä (tasaraha) tai kortilla. Myös
        laskutusmahdollisuus. Lasku tulee olla maksettuna ennen noutoa.
      </p>
      <p>
        Luovutuksen jälkeen vastuu kakun oikeaoppisesta säilytyksestä ja
        kuljetuksesta siirtyy asiakkaalle. Kuljetuksessa kannattaa huomioida
        tasainen alusta (auton takatila/jalkatila). Kesällä kakut on hyvä
        suojata kuumalta (kylmälaukut/kylmäkallet jne.), jotta kylmäketju ei
        pääse katkeamaan.
      </p>
      <p>Pidätän oikeudet muutoksiin.</p>
    </Container>
  </div>
);
