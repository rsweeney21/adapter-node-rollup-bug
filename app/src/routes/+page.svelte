<script lang="ts">
    import type { PageData } from './$types.js';

    export let data: PageData;
</script>

<h1>Welcome to SvelteKit {data.user.name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
