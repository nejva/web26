<script>
    import { getMessages, createMessage } from "./remote";

    let { params } = $props();
</script>

<ul>
    {#each await getMessages(params.id) as message}
    <!-- TODO visa meddelande -->
    <li>{message}</li>
    {/each}
</ul>

<form {...createMessage}>
    <input {...createMessage.fields.id.as("hidden", params.id)} />
    <input {...createMessage.fields.message.as("text")} />
</form>
