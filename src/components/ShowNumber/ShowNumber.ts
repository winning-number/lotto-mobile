import { defineComponent } from 'vue';

export class ballsNames {
	static ball1 = 1
	static ball2 = 2
	static ball3 = 3
	static ball4 = 4
	static ball5 = 5
	static luckyBall = 6
}

export default defineComponent({
	name: 'ShowNumber',
	components: {},
	computed: {
		ballsValues: function() {
			return (id: number): any => {
				let value = 0
				switch (id) {
					case ballsNames.ball1: {
						value = this.ball1
						break;
					}
					case ballsNames.ball2: {
						value = this.ball2
						break;
					}
					case ballsNames.ball3: {
						value = this.ball3
						break;
					}
					case ballsNames.ball4: {
						value = this.ball4
						break;
					}
					case ballsNames.ball5: {
						value = this.ball5
						break;
					}
					default: {
						value = this.luckyBall
						break;
					}
				}
				return "--sn-ball-value: '"+value.toString()+"';"
			}
		}
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
	data(){
		return {
			ballsNames
		}
	},
	methods: {}
})
