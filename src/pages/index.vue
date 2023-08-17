<script setup>
const colors = [
  "bg-rose-400",
  "bg-pink-400",
  "bg-fuchsia-400",
  "bg-purple-400",
  "bg-slate-400",
  "bg-orange-400",
  "bg-blue-400",
  "bg-sky-400",
  "bg-green-400",
  "bg-yellow-400",
];
const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const url = useURL();
const keyword = useState("keyword");
const { data: navData } = await useFetch(`${url}/api/getAllSites`, {
  method: "POST",
  server: false,
  transform: (data) => data.data,
  query: {
    keyword,
  },
});
</script>
<template>
  <div p-4>
    <div
      rounded
      drop-shadow
      flex
      items-center
      flex-col
      mb-5
      md:flex-row
      bg-light-100
      v-for="item in navData"
    >
      <template v-if="item.data?.length">
        <div class="md:w-20%" mr-3 p-4 text-center font-bold text-4>
          {{ item.title }}
        </div>
        <div class="md:w-80%" p-2 flex flex-wrap text-3.5>
          <a
            :href="ele.path"
            target="_blank"
            color-light-500
            drop-shadow
            rounded
            p-2
            px-5
            m-2
            border
            border-solid
            cursor-pointer
            v-for="(ele, index) in item?.data"
            :key="index"
            :class="randomColor()"
            :title="ele.introduction"
          >
            {{ ele.name }}
          </a>
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
