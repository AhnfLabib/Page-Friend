<template>
    <div class="bookList">
        <BookCard
            v-for="book in books"
            :title="book.title"
            @selected="captureSelected">
            <template #bookImg>
                <div><img class="autoMargin" :src="book.image" alt=""></div>
            </template>

        </BookCard>

    </div>

</template>

<script>
import BookCard from './BookCard.vue';

export default {
    components: {
        BookCard
    },
    data() {
        return {
            numCount: 0,
            bookSelected: null,
            books: [
            {
                title: "Hum",
                image: 'src/assets/hum.jpg'

            },
            {
                title: "Mistborn: The Final Empire",
                image: 'src/assets/mist.jpg'

            },
            {
                title: "Feel-Good Productivity",
                image: 'src/assets/feel.jpg'

            },
            {
                title: "The Fisherman",
                image: 'src/assets/fish.jpg'

            },
            {
                title: "The Great Gatsby",
                image: 'src/assets/gatsby.jpg'

            },
            {
                title: "American Psycho",
                image: 'src/assets/american-psycho.jpg'

            },
            {
                title: "Invisible Man",
                image: 'src/assets/invisible.jpg'

            },
            {
                title: "1984",
                image: 'src/assets/1984.avif'

            },
            {
                title: "Game Of Thrones",
                image: 'src/assets/GOT.jpg'

            },
            {
                title: "The Goldfinch",
                image: 'src/assets/gold.jpg'

            }
        ]

        }
    },
    methods: {
        captureSelected(bookSelected) {
            alert("'" + bookSelected + "' " + "book request submitted.");
        }
    }
}
</script>



