<template>
  <input 
    class="input" 
    type="text"
    :value="modelValue" @input="updateInput"
>
</template>

<script>
import mixinInput from "@/mixins/mixinInput"

export default {
  name: 'my-input',
  mixins: [mixinInput]
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid rgb(9, 12, 145);
  padding: 10px;
  margin-top: 15px;
}

</style>