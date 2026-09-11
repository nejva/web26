<script>
    import { login } from "./remote";
</script>


<form {...login}>
<!-- TODO: stoppa på korrekta input-fält, ett för username och ett för password
↪→ -->
    <input {...login.fields.username.as("text")}>
    <input {...login.fields.password.as("password")}>
    <button>login</button>
</form>
