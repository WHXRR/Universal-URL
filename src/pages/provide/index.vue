<script setup>
import urlRegex from "url-regex";
const url = useURL();
const sitesClassification = await useFetch(
  `${url}/api/getSitesClassification`,
  {
    method: "POST",
    transform: (data) => data.data,
  }
)?.data;

const formData = reactive({
  classificationID: "",
  classificationName: "",
  siteName: "",
  introduction: "",
  siteUrl: "",
});
const isValidUrl = (url) => {
  return urlRegex({ exact: true, strict: false }).test(url);
};
const submit = async () => {
  if (
    formData.classificationID === "" ||
    !formData.siteName ||
    !formData.siteUrl
  ) {
    return alert("请填写完整");
  }
  if (formData.classificationID === 0 && !formData.classificationName) {
    return alert("请输入分类名称");
  }
  if (!isValidUrl(formData.siteUrl)) {
    return alert("请输入正确的网址");
  }
  const { data } = await useFetch(`${url}/api/addSite`, {
    method: "POST",
    transform: (data) => data.data,
    body: formData,
  });
};
</script>
<template>
  <div flex justify-center bg-light-100 p-4 w-full>
    <div w-full mx-auto flex flex-col style="max-width: 300px">
      <div mb-4 flex items-center gap-2 text-3.6 font-bold>
        <div class="w-20%" text-right>选择分类</div>
        <select
          flex-1
          p-2
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          outline-none
          cursor-pointer
          v-model="formData.classificationID"
        >
          <option
            :value="item.id"
            v-for="item in sitesClassification"
            :key="item.id"
          >
            {{ item.title }}
          </option>
          <option :value="0">没有想要的分类，重新创建</option>
        </select>
      </div>
      <div
        mb-4
        flex
        items-center
        gap-2
        text-3.6
        font-bold
        v-if="formData.classificationID === 0"
      >
        <div class="w-20%" text-right>分类名称</div>
        <input
          flex-1
          type="text"
          p-2
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          outline-none
          v-model="formData.classificationName"
        />
      </div>
      <div mb-4 flex items-center gap-2 text-3.6 font-bold>
        <div class="w-20%" text-right>网站名称</div>
        <input
          flex-1
          type="text"
          p-2
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          outline-none
          v-model="formData.siteName"
        />
      </div>
      <div mb-4 flex items-center gap-2 text-3.6 font-bold>
        <div class="w-20%" text-right>网站介绍</div>
        <input
          flex-1
          type="text"
          p-2
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          outline-none
          v-model="formData.introduction"
        />
      </div>
      <div mb-4 flex items-center gap-2 text-3.6 font-bold>
        <div class="w-20%" text-right>网址</div>
        <input
          flex-1
          type="text"
          p-2
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          outline-none
          v-model="formData.siteUrl"
        />
      </div>
      <div mb-4 flex items-center gap-2 text-3.6 font-bold>
        <div class="w-20%" text-right></div>
        <button
          flex-1
          bg-dark-300
          color-light-300
          rounded-1.4
          border-2
          b-solid
          b-dark-300
          p-2
          cursor-pointer
          @click="submit"
        >
          submit
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
