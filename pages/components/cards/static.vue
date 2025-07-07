<script lang="ts" setup>
import type { Card } from '~/types'
import ProductCard from '~/components/cards/static/ProductCard.vue'
import ImageCard from '~/components/cards/static/ImageCard.vue'
import {
  productCardCodes,
  imageCardCodes,
} from '~/assets/code-examples/cards/card-codes'
import PortfolioCard from '~/components/cards/static/PortfolioCard.vue'
import BlogCard from '~/components/cards/static/BlogCard.vue'
import {
  blogCardCodes,
  portfolioCardCodes,
} from '~/assets/code-examples/cards/card-codes'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Product Card', path: '#product-card' },
      { name: 'Image Card', path: '#image-card' },
      { name: 'Portfolio Card', path: '#portfolio-card' },
      { name: 'Blog Card', path: '#blog-card' },
    ],
  },
]

const ProductCardCard: Card = {
  title: 'Product Card',
  text: 'A card for showcasing products with image, price, and button.',
  codeTitle: 'ProductCard.vue',
  code: productCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const ImageCardCard: Card = {
  title: 'Image Card',
  text: 'A card with a focus on an image, title, and description.',
  codeTitle: 'ImageCard.vue',
  code: imageCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const PortfolioCardCard: Card = {
  title: 'Portfolio Card',
  text: 'A card for portfolio projects with a like button, rating, and tags.',
  codeTitle: 'PortfolioCard.vue',
  code: portfolioCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}

const BlogCardCard: Card = {
  title: 'Blog Card',
  text: 'A card for blog posts with a like button, author, and date.',
  codeTitle: 'BlogCard.vue',
  code: blogCardCodes,
  content: { type: 'text', props: { class: '' }, children: '' },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="product-card">
      <CodeCard
        :card="ProductCardCard"
        :component="ProductCard"
        :is-code-preview="true"
      />
    </div>
    <div id="image-card">
      <CodeCard
        :card="ImageCardCard"
        :component="ImageCard"
        :is-code-preview="true"
      />
    </div>
    <div id="portfolio-card">
      <CodeCard
        :card="PortfolioCardCard"
        :component="PortfolioCard"
        :is-code-preview="true"
      />
    </div>
    <div id="blog-card">
      <CodeCard
        :card="BlogCardCard"
        :component="BlogCard"
        :is-code-preview="true"
      />
    </div>
  </div>
</template>
