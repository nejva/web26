<script lang="ts">
    import {addForums, getForums, deleteForums} from "./forums.remote";

</script>

<ul>
    {#each await getForums() as forum}
    {@const remove = deleteForums.for(forum.name)}
    <li>
        <a href="/forums/{forum.name}">{forum.name}</a>

        <form {...remove}>
            <button>delete</button>
        </form>
    </li>
    {/each}
</ul>

<form {...addForums}>
    <input {...addForums.fields.name.as("text")}>
    <button>add</button>
</form>
