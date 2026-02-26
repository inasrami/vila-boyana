<script setup>
import { ref, computed } from 'vue'

const base = import.meta.env.BASE_URL

// Update the arrays here:
const roomImages = [
    base + 'images/staq1.jpg',
    base + 'images/staq2.jpg',
    // ...
]

const hotelImages = [
    base + 'images/hotel1.jpg',
    // ...
]
// ...
</script>