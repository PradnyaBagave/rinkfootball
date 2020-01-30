<template>
	<b-row>
		<b-col cols="12">
			<b-jumbotron>
				<b-row>
					<b-col cols="12">
						<b-card
							no-body
							>
									<b-media>
										<b-row>
											<b-col
												v-if="image"
												cols="12"
												sm="4"
												class="mb-4">
												<div
													class="add-button"
													:style="{ 'background-image': 'url(' + '/uploads/' + image.image + ')' }">
												</div>
											</b-col>
										</b-row>
									</b-media>
						</b-card>
					</b-col>
				</b-row>
			</b-jumbotron>
		</b-col>
	</b-row>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const uploadButtonTitle = 'Select image'

export default {
	name: 'Dashboard',
	components: {
		PulseLoader,
	},
	computed: {
		...mapGetters({
			user: 'user',
		})
	},
	data () {
		return {
			image: {},
			
			errors: [],
			uploadButtonTitle: uploadButtonTitle,
			file: '',
			loadingText: '',
			loading: false
		}
	},
	created () {
		axios.defaults.headers.common['Authorization'] = localStorage.getItem(
			'jwtToken'
		)
		this.getimage()
	},
	methods: {
		getimage () {
			axios.get(`http://localhost:3000/uploads/findone`, {
				params: {
					user: this.user.userId
				}
			})
				.then(response => {
                    this.image = response.data
                    if(response.data==null){
                        this.$store.dispatch('setNoImage',true)
                    }
				})
				.catch(e => {
                    this.errors.push(e)
                    this.$store.dispatch('setNoImage',true)
				})
		}
		}
}
</script>

<style>
	
	.add-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 200px;
        width: 200px;
		background: #f2f2f3;
		background-size: cover;
		background-position: 50% 50%;
	}

	.remove-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 15px;
    	right: 15px;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		opacity: 0;
		transition: all 0.3s ease-in;
	}

	.remove-button:hover {
		opacity: 1;
	}
</style>
