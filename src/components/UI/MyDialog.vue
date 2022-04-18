<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <!--//? Здесь будет рпасполагаться контентная часть -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins"

export default {
  name: "my-dialog",
  mixins: [mixins]
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background: whitesmoke;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 50px;
}
</style>
