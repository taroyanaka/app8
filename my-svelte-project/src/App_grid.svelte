<script>
	let a = "a";

</script>

<style>
.target {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
	opacity: 0.1;
	height: 100vh;

}
.target_item {
	font-size: 0.5rem;
    border: 1px solid black;
    /* background-color: lightgray; */
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
}

/* <div class="target">
    {#each Array(12).fill().map((_, i) => i) as row}
        {#each Array(12).fill().map((_, j) => j) as col}
            <div class="target_item">{row},{col}</div>
        {/each}
    {/each}
</div> */

</style>

