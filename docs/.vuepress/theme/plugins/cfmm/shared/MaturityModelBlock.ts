export interface MaturityModelBlock {
  id: string;
  pillar: string;
  journeyStage: string;
  scope: string;
  title: string;
  link: string;
  summary: string;

  /**
   * Tool2Block ids describing how the tool implements the block
   */
  tools: string[];

  /**
   * CFMM block ids of blocks this block depends on.
   */
  dependsOn: string[];

  /**
   * CFMM block ids enabled by this block. This is the reverse side of the "dependsOn" relation.
   */
  enables: string[];

  /**
   * CFMM block ids of blocks this block recommends to implement alongside.
   */
  recommended: string[];
}
