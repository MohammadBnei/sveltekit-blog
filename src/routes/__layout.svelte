<script lang="ts" context="module">
  export const prerender = true
  export const load = async ({ url, fetch }) => ({
    props: {
      path: url.pathname,
      res: await (await fetch('/posts.json')).json()
    }
  })
</script>

<script lang="ts">
  import { fly } from 'svelte/transition'
  import { genTags } from '$lib/utils/posts'
  import { posts, tags } from '$lib/stores/posts'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import '../app.css'
  export let res: Urara.Post[]
  export let path: string
  posts.set(res)
  tags.set(genTags(res))
</script>

<Head />

<Header {path} />

{#key path}
  <div
    class="bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16"
    in:fly={{ y: 100, duration: 200, delay: 200 }}
    out:fly={{ y: -100, duration: 200 }}>
    <slot />
  </div>
{/key}
