<script setup>
import { ref, reactive, onMounted } from "vue";

import products from "../database/products.js";

let productsData = reactive(products);

console.log(productsData);

let filteredCompany = ref("");

onMounted(() => {
  filteredCompany.value = products;
});

function filtersPrdoductsByCompany(company) {
  let filter = [];
  if (company === "All") {
    filter = products;
  } else {
    products.filter((product) => {
      if (product.company === company) {
        filter.push(product);
      }
    });
  }
  filteredCompany.value = filter;

  console.log(filteredCompany.value);
}

const searchQuery = ref("");

function searchByProductName() {
  filteredCompany.value = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
}
</script>

<template>
  <section>
    <h1 class="text-4xl font-bold text-center my-10 underline">Products Filters</h1>
    <div class="flex space-x-8 pl-20">
      <div class="flex flex-col space-y-4 w-1.5/12">
        <input
          @input="searchByProductName()"
          v-model="searchQuery"
          class="border-2 border-black px-2 rounded py-2"
          type="text"
          placeholder="search..."
        />
        <div class="flex flex-col space-y-2 text-xl font-semibold">
          <h2 class="underline">Company Name</h2>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('All')">All</h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Ikea')">Ikea</h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Marcos')">
            Marcos
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Caressa')">
            Caressa
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Liddy')">
            Liddy
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Lorena')">
            Lorena
          </h4>

          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Jaxon')">
            Jaxon
          </h4>

          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Thompson')">
            Thompson
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Nexa')">Nexa</h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Havencrest')">
            Havencrest
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('ChicHaven')">
            ChicHaven
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('MingleMoods')">
            MingleMoods
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('GourmetGrove')">
            GourmetGrove
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Luxuria')">
            Luxuria
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Eleganza')">
            Eleganza
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Barrique')">
            Barrique
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('LuxeLiving')">
            LuxeLiving
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('HarborHome')">
            HarborHome
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('VividSpaces')">
            VividSpaces
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Amberton')">
            Amberton
          </h4>
          <h4 class="cursor-pointer" @click="filtersPrdoductsByCompany('Crestwood')">
            Crestwood
          </h4>
        </div>
      </div>

      <section>
        <p class="mb-8">Total Products : {{ filteredCompany.length }}</p>
        <div class="w-10.5/12 flex flex-wrap">
          <div v-for="(company, index) in filteredCompany" :key="index" class="mb-8 mr-4">
            <img class="w-[250px] rounded mb-4" :src="company.image" alt="" />
            <div class="text-center flex flex-col space-y-2">
              <h4>{{ company.name }}</h4>
              <h4>{{ company.price }}</h4>
              <h4>{{ company.company }}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
