import { ADS } from "../../services/ads";
import AdItem from "./AdItem";

import s from "./ads.module.scss";


function Ads() {

  function getAds() {
    if (ADS.length) {
      return (
        <div>
          {ADS.map((adItem, index) => {
            return <AdItem adItem={adItem} key={index}/>
          })}
        </div>
      )
    } else {
      return "Your Ad lives HERE"
    }
  }

  return (
    <div id={s.ads__wrapper}>
      {getAds()}
    </div>
  )
}

export default Ads;