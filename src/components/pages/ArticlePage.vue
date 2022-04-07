<template>
    <div>
        <h1 class="my-4">Article
            <small>Campaign BPKB</small>
        </h1>
        <div class="card mb-4">
            <img class="card-img-top" src="https://via.placeholder.com/750x150" alt="Card image cap">
            <div class="card-body">
            <h2 class="card-title">Kantong Belanja Pakai Ulang, Alternatif Kantong Plastik</h2>
            <p class="card-text">Pada kesempatan ini kita akan membahas mengenai kantong belanja selaku tema atau gerakan yang kita pakai pada program campaign ini. Pasti sudah tidak sabar kan ? yuk kita ulas di sini.</p>
            <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Baca Selengkapnya</router-link>
            </div>
            <div class="card-footer text-muted">
            Posted on February 15, 2022 by
            <a href="#">Rizkina</a>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top" src="https://via.placeholder.com/750x150" alt="Card image cap">
            <div class="card-body">
            <h2 class="card-title">Sejarah, Jenis-Jenis, Dampak, dan Bahaya Kantong Plastik</h2>
            <p class="card-text">Teman-teman pasti pernah berpikir tentang siapa sih pencipta plastik? Nahh, kenapa sih si penemu ini menciptakan plastik ? pertanyaan yang bagus teman-teman. Yuk kita ulas satu persatu pertanyaan tersebut.</p>
            <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Baca Selengkapnya</router-link>
            </div>
            <div class="card-footer text-muted">
            Posted on January 13, 2022 by
            <a href="#">Widi</a>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top" src="https://via.placeholder.com/750x150" alt="Card image cap">
            <div class="card-body">
            <h2 class="card-title">Launching Website #BanggaPunyaKantongBelanja</h2>
            <p class="card-text">Hai teman-teman, selamat datang di website kami BPKB. Website ini adalah salah satu media yang kami gunakan untuk mengenalkan program campaign #BanggaPunyaKantongBelanja.</p>
            <router-link class="btn btn-primary" :to="{ name: 'BlogPage' }">Baca Selengkapnya</router-link>
            </div>
            <div class="card-footer text-muted">
            Posted on February 11, 2022 by
            <a href="#">Arun</a>
            </div>
        </div>
    </div>
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
</style>
