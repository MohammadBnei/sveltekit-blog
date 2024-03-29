<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { page } from '$app/stores'
  import { browser } from '$app/env'
  import { posts as storedPosts, tags as storedTags } from '$lib/stores/posts'
  import Head from '$lib/components/head.svelte'
  import Flex from '$lib/components/layouts/_flex.svelte'
  import Footer from '$lib/components/footer.svelte'
  import Post from '$lib/components/index_post.svelte'
  import Profile from '$lib/components/index_profile.svelte'
  import IconTrash from '~icons/heroicons-outline/trash'

  let allPosts: Urara.Post[]
  let allTags: string[]
  let loaded: boolean
  let [posts, tags, years] = [[], [], []]

  $: storedPosts.subscribe(
    storedPosts => (allPosts = (storedPosts as Urara.Post[]).filter(post => !post.flags?.includes('hidden')))
  )

  $: storedTags.subscribe(storedTags => (allTags = storedTags as string[]))

  $: if (posts.length > 1) years = [new Date(posts[0].published ?? posts[0].created).toJSON().substring(0, 4)]

  $: if (tags) {
    if (loaded) posts = !tags ? allPosts : allPosts.filter(post => tags.every(tag => post.tags?.includes(tag)))
    if (browser && window.location.pathname === '/')
      window.history.replaceState({}, '', tags.length > 0 ? `?tags=${tags.toString()}` : `/`)
  }

  onMount(() => {
    if (browser) {
      tags = $page.url.searchParams.get('tags') ? $page.url.searchParams.get('tags').split(',') : []
      loaded = true
    }
  })
</script>

<Head />

<Flex>
  <div slot="left" class="xl:max-w-sm xl:ml-auto">
    <Profile />
  </div>
  <div slot="right" class="xl:max-w-sm">
    {#if allTags && Object.keys(allTags).length > 0}
      <div
        class="collapse-content flex md:block overflow-x-auto md:overflow-x-hidden overflow-y-hidden max-h-24 my-auto md:max-h-fit max-w-fit md:max-w-full md:mb-4">
        {#each allTags as tag}
          <button
            id={tag}
            on:click={() => (tags.includes(tag) ? (tags = tags.filter(tagName => tagName != tag)) : (tags = [...tags, tag]))}
            class:!btn-secondary={tags.includes(tag)}
            class:shadow-lg={tags.includes(tag)}
            class="btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 my-8 md:my-1 mx-1">
            #{tag}
          </button>
        {/each}
      </div>
    {/if}
  </div>
  <div slot="center">
    {#key posts}
      <!-- {:else} is not used because there is a problem with the transition -->
      {#if loaded && posts.length === 0}
        <div
          in:fly={{ x: 100, duration: 200, delay: 400 }}
          out:fly={{ x: -100, duration: 200 }}
          class="bg-base-300 text-base-content shadow-inner text-center md:rounded-box p-10 -mb-2 md:mb-0 relative z-10">
          <div class="prose items-center">
            <h2>
              Not found: [{#each tags as tag, i}
                '{tag}'{#if i + 1 < tags.length},{/if}
              {/each}]
            </h2>
            <button on:click={() => (tags = [])} class="btn btn-secondary">
              <IconTrash class="inline-block w-6 h-6 mr-2" />
              tags = []
            </button>
          </div>
        </div>
      {/if}
      <main
        class="flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10"
        itemprop="mainEntityOfPage"
        itemscope
        itemtype="https://schema.org/Blog">
        {#each posts as post, index}
          {@const year = (post.published ?? post.created).substring(0, 4)}
          <div
            in:fly={{ x: index % 2 ? 100 : -100, duration: 200, delay: 400 }}
            out:fly={{ x: index % 2 ? -100 : 100, duration: 200 }}>
            {#if !years.includes(year)}
              <div class="divider my-8 md:mt-0">
                {years.push(year) && year}
              </div>
            {/if}
            <Post {post} />
          </div>
        {/each}
      </main>
      {#if loaded}
        <div
          class="sticky bottom-0 md:static md:mt-8"
          in:fly={{ x: posts.length + (1 % 2) ? 100 : -100, duration: 200, delay: 400 }}
          out:fly={{ x: posts.length + (1 % 2) ? -100 : 100, duration: 200 }}>
          <div class="divider mt-0 mb-8 hidden lg:flex" />
          <Footer />
        </div>
      {/if}
    {/key}
  </div>
</Flex>
