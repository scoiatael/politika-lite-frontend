import {Decision, ID, Resources, PowerCenters} from "../Domain/domain";

type NewDecisions = Decision[];

interface DecisionExpired {
    id: ID;
}

interface WorldState {
    resources: Resources;
    power_centers: PowerCenters;
}

type OnNewDecisions = (payload: NewDecisions) => void;
type OnWorldState = (payload: WorldState) => void;
type OnDecisionExpired = (payload: DecisionExpired) => void;

interface ChoiceMade {
    decision: ID;
    choice: ID;
}

export class Backend {
    private webSocket: WebSocket;

    constructor(
        readonly url: string,
        readonly onNewDecisions: OnNewDecisions,
        readonly onDecisionExpired: OnDecisionExpired,
        readonly onWorldState: OnWorldState) {
        this.webSocket = new WebSocket(url);
        this.webSocket.addEventListener("message", (message) => this.onMessage(message));
    }

    public sendChoiceMade(choiceMade: ChoiceMade) {
        this.webSocket.send(JSON.stringify({
            type: "choice_made",
            payload: choiceMade,
        }));
    }

    private onMessage(message: MessageEvent) {
        const {data} = message;
        const {type, payload} = JSON.parse(data);
        switch (type) {
            case "new_decisions":
            return this.onNewDecisions(payload as NewDecisions);
            case "world_state":
            return this.onWorldState(payload as WorldState);
            case "decision_expired":
            return this.onDecisionExpired(payload as DecisionExpired);
        }
    }
}
