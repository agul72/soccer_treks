import { iInterestHighlight } from "../../services/teams/iTeam";

import s from "./team.module.scss";

interface Props {
  highlights: iInterestHighlight[],
}

function Highlights({ highlights }: Props): JSX.Element {
  return (
    <div>
      <div><h3>Highlights:</h3></div>
      {highlights.map((highlight: iInterestHighlight, index: number) =>
        <div key={index}>
          <div className={s.place}>
            <div className={s.plaseImageWrapper}>
              <img src={'/assets/images/places/' + highlight.image}
                alt="Photo" className={s.image} />
            </div>
            <div>
              <div><strong>{highlight.name}</strong></div>
              <div><a href={highlight.link} target="_blank">Go to {highlight.name} site</a></div>
              <div>{highlight.description}</div>
            </div>
          </div>
        </div>)
      }
    </div>)
}

export default Highlights;