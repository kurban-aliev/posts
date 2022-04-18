<template>
  <!--С помощью changeInput отслеживаем изменения значения в списке и также делаем двухсторонее связывание v-model -->
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import mixinSelect from "@/mixins/mixinSelect";

export default {
  name: "my-select",
  mixins: [mixinSelect],
};
</script>

<style>
select {
  margin: 5px 6px 0 0;
}
</style>
