import { IAdItem } from "../../services/ads";
import s from "./ads.module.scss";

interface Props {
  adItem: IAdItem,
}

export default function AdItem({ adItem }: Props) {

  return (
    <a href={adItem.link} target="_blank">
      <div className={s.image__wrapper}>
        <img src={"/assets/images/ads/" + adItem.image}
          alt='image' className={s.image} />
      </div>
      <div className={s.text}>{adItem.text}</div>
    </a>
  )
}