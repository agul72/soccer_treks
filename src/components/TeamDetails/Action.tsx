import { iAction } from "../../services/teams/iTeam";

import s from "./team.module.scss";

interface Props {
    action: iAction,
}

function Action({ action }: Props): JSX.Element {
    return (
        <div className={s.actionWrapper}>
            {/* <h2>Action</h2> */}
            <div>{action.narrative}</div>
            <div className={s.actionContainer}>
                <a href={action.scheduleLink} target="_blank">
                    <button>Schedule</button>
                </a>
                <a href={action.ticketSalesLink} target="_blank">
                    <button>Buy ticket</button>
                </a>
            </div>
        </div>
    )
}

export default Action;