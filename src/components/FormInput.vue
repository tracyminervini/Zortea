<template>
  <label :class="labelClass">{{ label }}</label>
  <input :type="type" :class="inputClass" :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      require: true,
      default: "text",
    },
    label: {
      type: String,
      require: true,
      default: "",
    },
    labelClass: {
      type: String,
      require: true,
      default: "",
    },
    inputClass: {
      type: String,
      require: true,
      default: "",
    },
    placeholder: {
      type: String,
      require: false,
      default: ""
    },
    value: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style></style>
