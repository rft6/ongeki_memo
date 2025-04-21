<template>
    <div>
        <div class="header">オンゲキ譜面研究メモ</div>
        <div class="container">
            <div class="level">15</div>
            <div class="title">
                <nuxt-link to="/15/I_Wanna">I Wanna</nuxt-link>
                <nuxt-link to="/15/LAMIA">LAMIA</nuxt-link>
                <nuxt-link to="/15/Scythe_of_Death">Scythe of Death</nuxt-link>
            </div>

            <div class="level">14+</div>
            <div class="title">
                <nuxt-link to="/14plus/Ai_C">Ai C</nuxt-link>
                <nuxt-link to="/14plus/Don't_Fight_The_Music">Don't Fight The Music</nuxt-link>
                <nuxt-link to="/14plus/Titania">Titania</nuxt-link>
            </div>

            <div class="level">14</div>
            <div class="title">
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.container {
    text-align: left;
}

.header {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 20px;
}

.level {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
}

.title {
    font-size: 14px;
    margin: 2px 0 2px 20px;
    display: flex;
    flex-direction: column;
}

.title a {
    text-decoration: none;
    color: blue;
    margin: 2px 0;
    display: inline-block;
    width: fit-content;
}
</style>