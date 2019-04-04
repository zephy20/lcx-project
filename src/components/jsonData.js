import david from "../assets/images/advisors/david.jpg";
import don from "../assets/images/advisors/don.jpg";
import jimmy from "../assets/images/advisors/jimmy.jpg";
import klaus from "../assets/images/advisors/klaus.jpg";
import miko from "../assets/images/advisors/miko.jpg";
import plamen from "../assets/images/advisors/plamen.jpg";
import shoucheng from "../assets/images/advisors/shoucheng.jpg";
import yat from "../assets/images/advisors/yat.jpg";

import bitcoinexchangeguide from "../assets/images/partners/bitcoinexchangeguide.jpg";
import btcmanager from "../assets/images/partners/btcmanager.jpg";
import ccn from "../assets/images/partners/ccn.jpg";
import cointelegraph from "../assets/images/partners/cointelegraph.jpg";
import crowdfundinsider from "../assets/images/partners/cointelegraph.jpg";
import cryptoglobe from "../assets/images/partners/cryptoglobe.jpg";
import nzz from "../assets/images/partners/nzz.jpg";
import rheinzeitung from "../assets/images/partners/rheinzeitung.jpg";
import standard from "../assets/images/partners/standard.jpg";
import volksblatt from "../assets/images/partners/volksblatt.png";
import wr from "../assets/images/partners/wr.png";

import binance from "../assets/images/wallets/binance.png";
import bittrex from "../assets/images/wallets/bittrex.png";
import coinbase from "../assets/images/wallets/coinbase.png";
import kraken from "../assets/images/wallets/kraken.png";

function getData() {
  let data = {
    advisors: [
      {
        advisor: david,
        name: "David Mikkelsen Troensegaard",
        description: "Founder at Refugees United"
      },
      {
        advisor: don,
        name: "Don Tapscott",
        description:
          'Leading Authority in Blockchain and Author of "The Blockchain Revolution"'
      },
      {
        advisor: jimmy,
        name: "Jimmy Wales",
        description: "Founder at Wikipedia"
      },
      {
        advisor: klaus,
        name: "Klaus Lovgreen",
        description: "Owner at Evershift"
      },
      {
        advisor: miko,
        name: "Miko Matsumura",
        description:
          "Founder Evercoin, Venture Partner at Bitbull Ventures, Investor at Pantera Capital"
      },
      {
        advisor: plamen,
        name: "Plamen Russev",
        description:
          "Executive Chariman of Webit.Foundation, Investor, Blockchain advisor, Philanthropist"
      },
      {
        advisor: shoucheng,
        name: "Prof. Dr. Shoucheng Zhand",
        description: "Stanford Professor and Chairman at DHVC"
      },
      {
        advisor: yat,
        name: "Yat Siu",
        description: "Founder & CEO at Outblaze"
      }
    ],
    partners: [
      { partner: bitcoinexchangeguide },
      { partner: btcmanager },
      { partner: ccn },
      { partner: cointelegraph },
      { partner: crowdfundinsider },
      { partner: cryptoglobe },
      { partner: nzz },
      { partner: rheinzeitung },
      { partner: standard },
      { partner: volksblatt },
      { partner: wr }
    ],
    wallets: [
      {
        wallet: binance
      },
      {
        wallet: bittrex
      },
      {
        wallet: coinbase
      },
      {
        wallet: kraken
      }
    ]
  };
  return data;
}
let data = getData();
export default data;
