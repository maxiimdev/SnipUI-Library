<script lang="ts" setup>
import {
  annotationCode,
  collapsibleArticleSnippetCode,
  copiedArticle,
  interactiveCollapsibleCode,
  readAloundCode,
  truncatedQuoteSnippetCode,
} from '~/assets/css/code-examples/text/articles-snippets'
import Annotation from '~/components/text/articles/Annotation.vue'
import CollapsibleArticle from '~/components/text/articles/CollapsibleArticle.vue'
import Copied from '~/components/text/articles/Copied.vue'
import InteractiveCollapsible from '~/components/text/articles/InteractiveCollapsible.vue'
import TruncatedQuote from '~/components/text/articles/TruncatedQuote.vue'
import Voice from '~/components/text/articles/Voice.vue'
import type { Card } from '~/types'

definePageMeta({
  layout: 'sidebar',
})

useState('right-sidebar-text').value = 'On This Page'

useState('right-sidebar-items').value = [
  {
    items: [
      { name: 'Static Quote', path: '#styled-quote' },
      { name: 'Hover Collapsible', path: '#collapsible-article' },
      { name: 'Click Collapsible', path: '#interactive-collapsible' },
      { name: 'Highlighted Text', path: '#highlighted-text' },
      { name: 'Annotated Text', path: '#annotated-text' },
      { name: 'Read Aloud', path: '#read-aloud' },
    ],
  },
]

const truncatedQuoteSnippet: Card = {
  title: 'Static Quote Block',
  text: 'A static quote with decorative quotation marks and attribution, styled for article layouts with text wrapping.',
  codeTitle: 'TruncatedQuote.vue',
  code: truncatedQuoteSnippetCode,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif w-96',
    },
    children:
      'The only way to do great work is to love what you do. — Steve Jobs',
  },
}

const collapsibleArticleSnippet: Card = {
  title: 'Hover Collapsible Card',
  text: 'An article excerpt that expands on hover, featuring a subheading and clean card design for seamless text display.',
  codeTitle: 'CollapsibleArticle.vue',
  code: collapsibleArticleSnippetCode,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif text-gray-700 w-96',
      subheading: 'On Courage: ',
    },
    children:
      '"Inspiration: Success is not the absence of obstacles, but the courage to push through them."',
  },
}

const InteractiveCollapsibleArticleSnippet: Card = {
  title: 'Click Collapsible Card',
  text: 'An article excerpt with a subheading, decorative underline, and two lines with an ellipsis, expandable/collapsible by clicking.',
  codeTitle: 'InteractiveCollapsible.vue',
  code: interactiveCollapsibleCode,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif text-gray-700 w-96',
      subheading: 'On Courage: ',
    },
    children:
      'Inspiration: Success is not the absence of obstacles, but the courage to push through them. It’s about finding the strength to keep moving forward, even when the path seems daunting.',
  },
}

const copiedArticleText: Card = {
  title: 'Highlighted Text Card',
  text: 'An article excerpt where users can highlight text with a mouse and copy it with a button, styled for article layouts.',
  codeTitle: 'HighlightedText.vue',
  code: copiedArticle,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif text-gray-700 w-96',
      text: 'Innovation distinguishes between a leader and a follower.',
    },
    children: 'Innovation distinguishes between a leader and a follower.',
  },
}

const readAloudSnippet: Card = {
  title: 'Read Aloud Card',
  text: 'An article excerpt with a text-to-speech feature, allowing users to listen to the content with a clean, accessible design.',
  codeTitle: 'ReadAloud.vue',
  code: readAloundCode,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif text-gray-700 w-96',
      text: 'Creativity is intelligence having fun.',
    },
    children: 'Creativity is intelligence having fun.',
  },
}

const annotationSnippet: Card = {
  title: 'Annotation Card',
  text: 'An article excerpt with clickable words that reveal contextual annotations in a tooltip, styled for clarity.',
  codeTitle: 'Annotation.vue',
  code: annotationCode,
  content: {
    type: 'text',
    props: {
      class: 'text-lg font-serif text-gray-700 w-96',
    },
    children: 'The paradigm shift in technology is remarkable.',
  },
}
</script>

<template>
  <div class="flex flex-col gap-20">
    <div id="styled-quote">
      <CodeCard
        :card="truncatedQuoteSnippet"
        :is-code-preview="true"
        :component="TruncatedQuote"
      />
    </div>
    <div id="collapsible-article">
      <CodeCard
        :card="collapsibleArticleSnippet"
        :is-code-preview="true"
        :component="CollapsibleArticle"
      />
    </div>
    <div id="interactive-collapsible">
      <CodeCard
        :card="InteractiveCollapsibleArticleSnippet"
        :is-code-preview="true"
        :component="InteractiveCollapsible"
      />
    </div>
    <div id="highlighted-text">
      <CodeCard
        :card="copiedArticleText"
        :is-code-preview="true"
        :component="Copied"
      />
    </div>
    <div id="annotated-text">
      <CodeCard
        :card="annotationSnippet"
        :is-code-preview="true"
        :component="Annotation"
      />
    </div>
    <div id="read-aloud">
      <CodeCard
        :card="readAloudSnippet"
        :is-code-preview="true"
        :component="Voice"
      />
    </div>
    
  </div>
</template>
