import { MaturityModelBlock } from "../../plugins/cfmm/shared";

export interface MaturityModelDisplayOptions {
  selectedTool?: string;
  selectedScopes?: string[];
  selectedStages?: string[];

  /**
   * Always show block descriptions (instead of just on hover)
   */
  showDescription?: boolean;

  /**
   * Show individual block selection controls
   */
  showControls?: boolean;

  /**
   *
   */
  hideUnselected?: boolean;

  
  highlightedBlock?: MaturityModelBlock;

  /**
   * Block ids by recursive levels of dependencies (1st level, 2nd level, etc.)
   */
  highlightedBlockDependencies: string[][];
}
