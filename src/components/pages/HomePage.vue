<template>
    <section class="hero-banner bg-light py-5">
        <div class="container">
            <div class="row row align-items-center">
                <div class="col-lg-4 offset-lg-1 order-lg-1">
                    <img src="/static/hero-img.png" class="img-fluid" alt="Web Development">
                </div>
                <div class="col-lg-6 ml-3">
                    <h1 class="mt-3">Bangga Punya Kantong Belanja</h1>
                    <p class="lead text-secondary my-5">
                        Ayo menjadi bagian dari masyarakat yang Cinta Linkungan dengan mengurangi konsumsi kantong plastik 
                        sekali pakai dan beralih menggunakan kantong belanja. Mari kita mulai dengan mengikuti campaign ini!
                    </p>
                    <router-link class="btn btn-outline-secondary btn-lg border" :to="{ name: 'ActionPage' }">Ambil Aksi</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
        }
    }
};
</script>

<style>
.hero-banner h1 {
    font-size: 48px;
}
.hero-banner .btn {
    position: relative;
    overflow: hidden;
    z-index: 9;
}
.hero-banner .btn-primary {
    color: #2f2f41;
    background-color: rgba(1, 164, 121, 0.1);
    border-color: #01a479;
}
.hero-banner .btn:before {
    content: "";
    background: #74B27F;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    -webkit-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    -ms-transition: all 0.5s ease-in-out 0s;
    -o-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}
.hero-banner .btn:hover:before {
    width: 100%;
}
.hero-banner img {
    width: 400px;
    height: auto;
}
</style>
