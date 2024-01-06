<div class="container h-2/3 mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center max-w-[50vw]">
		<h2 class="h2">What kind of project do you need an EC2 instance for?</h2>
		<label class="label">
			<textarea
				class="textarea"
				rows="4"
				cols="50"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
		</label>
		<button class="btn btn-md variant-filled">I'm feeling lucky</button>
	</div>
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
