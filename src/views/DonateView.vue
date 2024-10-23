<template>
  <div>
    <h1 class="mainTitle">Do you want to donate a book too?</h1>
    <form @submit.prevent="submitForm">
      <div class="paragraph">
        <label for="name">Book Name:</label>
        <input class="inputFields" type="text" v-model="name" id="name" required />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    submitForm() {
      alert(`${this.name} is submitted`);
    },
  },
};
</script>