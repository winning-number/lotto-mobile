import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ShowNumbers',
	components: {
	},
	props: {
		ball1: { type: Number, required: true },
		ball2: { type: Number, required: true },
		ball3: { type: Number, required: true },
		ball4: { type: Number, required: true },
		ball5: { type: Number, required: true },
		luckyBall: { type: Number, required: true },
	},
	setup(){
		return
	},
	methods: {
	}
})
