<template>
  <label :class="labelClass">{{ label }}</label>
  <input
    :type="type"
    :class="inputClass"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style></style>
