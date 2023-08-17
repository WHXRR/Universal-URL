<script setup></script>
<template>
  <div flex flex-col h-screen overflow-hidden>
    <LayoutsHeader />
    <div flex-1 bg-gray-100 overflow-hidden overflow-y-auto>
      <div class="w-100% md:w-80%" mx-auto box-border>
        <slot />
      </div>
    </div>
    <LayoutsFooter />
  </div>
</template>
<style lang="scss" scoped></style>
