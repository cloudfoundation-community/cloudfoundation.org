<template>
  <div class="pillar-category">
    <MaturityModelBlock
      v-for="item in blocks"
      :key="item.link"
      :block-data="item"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCloudFoundationMaturityModel } from "../../plugins/cfmm/client";

import MaturityModelBlock from "./MaturityModelBlock.vue";
import { MaturityModelDisplayOptions } from "./MaturityModelDisplayOptions";

interface Props {
  ids: string[];
}

const props = defineProps<Props>();
const cfmm = useCloudFoundationMaturityModel();
 
const blocks = computed(() => {
  const model = cfmm.value;

  return model.queryBlocksSorted(props.ids);
});
</script>

<style lang="scss" scoped>
@import "./maturity-model";

.pillar-category {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
}
</style>
