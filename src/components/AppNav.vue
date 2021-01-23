<template>
      <div class="app-nav">
          <BaseDataWithIcon variant="large">
              <template v-slot:icon><IconHome /></template>

              <template v-slot:value></template>
          </BaseDataWithIcon>
      </div>
</template>

<script lang="ts">
import IconHome             from './icons/IconHome';
import BaseDataWithIcon     from './common/BaseDataWithIcon';

  export default {
    name: 'AppNav',
    components: { IconHome, BaseDataWithIcon

    }
  }
</script>

<style lang="scss">
.app-nav {
    border-right: rem(1) solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: rem(10) 0;
}
</style>
