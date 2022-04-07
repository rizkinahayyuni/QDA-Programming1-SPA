<template>
	<section id="footer">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text">
					<p> © 2022 BPKB - Rizkina</p>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
	props: {
		showLinks: {
			required: false,
			default: false,
			type: Boolean
		}
	},
	data(){
		return {
		}
	}
}
</script>

<style scoped>
	#footer {
		padding-top: 100px;
	}
</style>
