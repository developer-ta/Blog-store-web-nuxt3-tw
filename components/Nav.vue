<template>
  <div>
    <header class="flex items-cente justify-between h-20 px-[5%] lg:px-[15%]">
      <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
        <span class="text-primary"> C</span>
      </NuxtLink>

      <nav class="flex items-centre space-x-7 text-gray-600">
        <template v-for="(n, i) in links" :key="`NavLink-${i}`">
          <NuxtLink class="inline-block nav-link group" :to="n.link">
            <div class="flex flex-row items-centre space-x-2">
              <Icon :icon="n.icon" class="w-4 h-6"></Icon>
              <span class="font-medium"> {{ n.name }} </span>
            </div>

            <div class="transition-hover"></div>
          </NuxtLink>
        </template>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links = [
  { name: "Blog", icon: "carbon:blog", link: "/" },

  { name: "March", icon: "ion:shirt-outline", link: "/" },
];
</script>
