const message = document.getElementById('message')
const container = document.getElementById('container')
const sane = 'sane'
const insane = 'insane'
const calm = 'calm'
const wild = 'wild'
const friendship = 'friendship'
const none = 'none'
const ponies = [
	{
		name: 'Twilight Sparkle',
		image:
      'https://vignette.wikia.nocookie.net/the-princess/images/e/e5/Mlp_fim_twilight_sparkle_happy_vector_3_by_luckreza8-db4ql0m.png/revision/latest?cb=20180411192543',
		sane: sane,
		magic: calm,
		goal: friendship,
	},
	{
		name: 'Pinkie Pie',
		image:
      'https://vignette.wikia.nocookie.net/mlp/images/9/92/Canterlot_Castle_Pinkie_Pie_1.png/revision/latest?cb=20110915190145',
		sane: insane,
		magic: wild,
		goal: 'laughter',
	},
	{
		name: 'Rarity',
		image:
      'https://vignette.wikia.nocookie.net/mlpfimroleplay/images/2/22/Rarity2.png/revision/latest?cb=20161221214903',
		sane: insane,
		magic: none,
		goal: 'beauty',
	},
	{
		name: 'Fluttershy',
		image:
      'https://vignette.wikia.nocookie.net/p__/images/a/ac/My_first_attempt_at_vectoring_mlp_fim_fluttershy_by_sonarfoobthegreat-d5el31e.png/revision/latest?cb=20130520181345&path-prefix=protagonist',
		sane: insane,
		magic: calm,
		goal: friendship,
	},
	{
		name: 'Rainbow Dash',
		image: 'https://i.pinimg.com/originals/1f/f7/74/1ff774556152193ceee3bf5f0a9a16bf.png',
		sane: sane,
		magic: none,
		goal: 'victory',
	},
	{
		name: 'Applejack',
		image:
      'https://vignette.wikia.nocookie.net/international-entertainment-project/images/2/2c/Applejack_%28My_Little_Pony_Friendship_Is_Magic%29.png/revision/latest?cb=20160110163205',
		sane: sane,
		magic: none,
		goal: friendship,
	},
	{
		name: 'Princess Celestia',
		image:
      'https://vignette.wikia.nocookie.net/loveinterest/images/c/cc/Princess_celestia.png/revision/latest?cb=20150302154625',
		sane: 'unknown',
		magic: 'unknown',
		goal: 'unknown',
	},
	{
		name: 'Princess Luna',
		image:
      'https://vignette.wikia.nocookie.net/p__/images/1/13/Luna.png/revision/latest?cb=20161122231248&path-prefix=protagonist',
		sane: insane,
		magic: wild,
		goal: 'darkness',
	},
	{
		name: 'Spike',
		image: 'https://i.pinimg.com/originals/18/ea/52/18ea52af8ddd2e1b129f57ad23e81542.png',
		sane: insane,
		magic: wild,
		goal: friendship,
	},
	{
		name: 'Apple Bloom',
		image:
      'https://vignette.wikia.nocookie.net/mlp/images/0/08/Castle_Creator_Apple_Bloom.png/revision/latest?cb=20120205140653',
		sane: sane,
		magic: none,
		goal: 'cookies!',
	},
	{
		name: 'Zecora',
		image:
      'https://vignette.wikia.nocookie.net/infinite-loops/images/a/ae/Zecora.png/revision/latest?cb=20140701035228',
		sane: sane,
		magic: wild,
		goal: 'nature',
	},
	{
		name: 'Ursa Minor',
		image:
      'https://vignette.wikia.nocookie.net/my-little-pony-portugal/images/c/c3/Tumblr_m5hfb01M3k1qc5ffho1_1280_%281%29.png/revision/latest?cb=20140413122717',
		sane: sane,
		magic: wild,
		goal: 'food',
	},
]

function isDangerous(item) {
	return item.sane === insane && item.magic === wild && item.goal !== friendship
}

function isSafe(item) {
	return (
		item.sane === sane && item.goal === friendship && (item.magic === calm || item.magic === none)
	)
}

ponies.forEach(function(item) {
	const ponyDangerCheck = isDangerous(item)
	const ponySafeCheck = isSafe(item)
	console.log(ponySafeCheck)
	const ponyCard = document.createElement('div')
	const ponyText = document.createElement('div')
	const image = document.createElement('img')
	image.src = item.image

	ponyText.classList.add('text-center', 'm-b')
	ponyCard.classList.add('card', 'standard-border', 'm-t', 'bg-white')
	image.classList.add('text-center', 'avatar')

	{
		if (ponyDangerCheck == true) {
			ponyCard.classList.remove('bg-white')
			ponyCard.classList.add('bg-danger')
		} else if (ponySafeCheck == true) {
			ponyCard.classList.remove('bg-white')
			ponyCard.classList.add('bg-safe')
		}
	}

	ponyText.innerHTML = item.name
	image.innerHTML = item.image

	ponyCard.append(ponyText)
	ponyCard.append(image)
	container.append(ponyCard)
})
