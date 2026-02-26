<script setup>
import { ref } from 'vue'

const base = import.meta.env.BASE_URL

const rooms = ref([
    {
        title: 'Единична стая',
        // Update the image paths here:
        image: base + 'images/edinichna.jpg', 
        // ...
    },
    // ... update the rest of the rooms array
])
</script>