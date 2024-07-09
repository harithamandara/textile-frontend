<template>
    <div class="home">
        <h1>Welcome to our Textile Website</h1>
        <p>Explore our wide range of textile products and find the perfect fit for your needs.</p>
        <button @click="browseProducts">Browse Products</button>
    </div>
</template>

<script>

export default {
    methods: {
        browseProducts() {
            // Add your logic here to navigate to the products page
        }
    },
    name: 'HomePage'
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 100px;
}

h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

p {
    font-size: 18px;
    margin-bottom: 30px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>