<script>
	import { useCompletion } from 'ai/svelte';

	const { input, handleSubmit, completion } = useCompletion({
		api: '/api/completion'
	});

	const placholders = [
		'The primary purpose of the EC2 instance (e.g., web server, application server, database server).',
		'The expected load in terms of number of users, traffic, and data processing volume.',
		"The type of applications you'll be running and any specific performance requirements for those applications.",
		'Your requirements for memory, compute (CPU), storage (type and capacity), and networking (bandwidth).',
		'Any preference for instance pricing options, such as on-demand, reserved instances, or spot instances.',
		'If there are any specific AWS services or technologies that need to be integrated with the EC2 instance.',
		'The importance of scalability and flexibility for your project’s future growth.',
		'Any particular compliance or security requirements.',
		'The maximum acceptable cost range you are considering for the EC2 instance deployment.'
	];
</script>

<div class="container h-2/3 mx-auto flex justify-center items-center">
	<form on:submit={handleSubmit}>
		<!-- <input type="text" bind:value={$input} placeholder="Describe your business..." />
		<button type="submit">Generate Slogan</button> -->
		<div class="space-y-10 text-center flex flex-col items-center max-w-[50vw]">
			<h2 class="h2">What kind of project do you need an EC2 instance for?</h2>
			<label class="label">
				<textarea
					class="textarea"
					rows="4"
					cols="50"
					bind:value={$input}
					placeholder={'e.g. ' + placholders[Math.floor(Math.random() * placholders.length)]}
				/>
			</label>
			<button type="submit" class="btn btn-md variant-filled">I'm Feeling Lucky</button>
			<p>{$completion}</p>
		</div>
	</form>
</div>

<style lang="postcss">
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
