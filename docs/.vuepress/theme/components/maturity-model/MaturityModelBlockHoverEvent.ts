import { MaturityModelBlock } from "../../plugins/cfmm/shared";

export interface MaturityModelBlockHoverEvent {
  type: "hover" | "leave";
  block: MaturityModelBlock;
}
