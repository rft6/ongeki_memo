<template>
  <div class="container">
    <h5 class="title">{{ title }}</h5>
    <p class="comment" v-text="comment"></p>
    <div class="image-container">
      <div class="image-wrapper">
        <p class="image-title">元譜面</p>
        <div class="image-box">
          <img :src="imageSrc1" alt="元譜面" class="image" />
        </div>
      </div>
      <div class="image-wrapper">
        <p class="image-title">組み替え後</p>
        <div class="image-box">
          <img :src="imageSrc2" alt="組み替え後" class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  comment: String,
  image1: String,
  image2: String
});
// NuxtのbaseURLを取得
const config = useRuntimeConfig();
const baseURL = config.public.baseURL || "/";

// スラッシュ重複を防ぐ処理
const normalizePath = (path) => {
  if (!path) return "";
  return `${baseURL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
};

// baseURLを適用した画像パスを作成
const imageSrc1 = computed(() => normalizePath(props.image1));
const imageSrc2 = computed(() => normalizePath(props.image2));
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding-left: 0;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.comment {
  font-size: 1rem;
  margin-bottom: 20px;
  white-space: pre-line; /* 改行を反映 */
}

.image-container {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.image-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.image-box {
  width: 650px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>
