const message = document.getElementById('message')
const container = document.getElementById('container')
const ponies = [
{
name: 'Twilight Sparkle', 
image: 'https://vignette.wikia.nocookie.net/the-princess/images/e/e5/Mlp_fim_twilight_sparkle_happy_vector_3_by_luckreza8-db4ql0m.png/revision/latest?cb=20180411192543', 
sane: 'sane',
magic: 'calm',
goal: 'frienship'},
{
name: 'Pinkie Pie', 
image: 'https://vignette.wikia.nocookie.net/mlp/images/9/92/Canterlot_Castle_Pinkie_Pie_1.png/revision/latest?cb=20110915190145',
sane: 'insane',
magic: 'wild',
goal: 'laughter'},
{
name: 'Rarity', 
image: 'https://vignette.wikia.nocookie.net/mlpfimroleplay/images/2/22/Rarity2.png/revision/latest?cb=20161221214903',
sane: 'insane',
magic: 'none',
goal: 'beauty'},
{
name: 'Fluttershy', 
image: 'https://vignette.wikia.nocookie.net/p__/images/a/ac/My_first_attempt_at_vectoring_mlp_fim_fluttershy_by_sonarfoobthegreat-d5el31e.png/revision/latest?cb=20130520181345&path-prefix=protagonist',
sane: 'insane',
magic: 'calm',
goal: 'friendship'},
{
name: 'Rainbow Dash', 
image: 'https://i.pinimg.com/originals/1f/f7/74/1ff774556152193ceee3bf5f0a9a16bf.png',
sane: 'sane',
magic: 'none',
goal: 'victory'},
{
name: 'Applejack', 
image: 'https://vignette.wikia.nocookie.net/international-entertainment-project/images/2/2c/Applejack_%28My_Little_Pony_Friendship_Is_Magic%29.png/revision/latest?cb=20160110163205',
sane: 'sane',
magic: 'none',
goal: 'friendship'},
{
name: 'Princess Celestia', 
image: 'https://vignette.wikia.nocookie.net/loveinterest/images/c/cc/Princess_celestia.png/revision/latest?cb=20150302154625',
sane: 'unknown',
magic: 'unknown',
goal: 'unknown'},
{
name: 'Princess Luna', 
image: 'https://vignette.wikia.nocookie.net/p__/images/1/13/Luna.png/revision/latest?cb=20161122231248&path-prefix=protagonist',
sane: 'insane',
magic: 'wild',
goal: 'darkness'},
{
name: 'Spike', 
image: 'https://i.pinimg.com/originals/18/ea/52/18ea52af8ddd2e1b129f57ad23e81542.png',
sane: 'insane',
magic: 'wild',
goal: 'friendship'},
{
name: 'Apple Bloom', 
image: 'https://vignette.wikia.nocookie.net/mlp/images/0/08/Castle_Creator_Apple_Bloom.png/revision/latest?cb=20120205140653',
sane: 'sane',
magic: 'none',
goal: 'cookies!'}
]


ponies.forEach(function(item) {
    function Monster () {
        return pony.sane === 'insane' && pony.magic === 'wild' && pony.goal !== 'friendship'
    }
    console.log (pony)

    const pony_card = document.createElement('div')
    const image = document.createElement('img')
    image.src = item.image

    image.classList.add('text-center', 'avatar')
    pony_card.classList.add('card', 'standard-border', 'm-t', 'row')

    pony_card.innerHTML = item.name
    image.innerHTML = item.image
    
    pony_card.append(image)
    container.append(pony_card)
})

// function Monster (pony) {
//     return pony.sane === 'insane' && pony.magic === 'wild' && pony.goal !== 'friendship'
// }

const pony_test = Monster ('pony')
console.log (pony_test)



// function greet(name) {
//     return 'Hello, ' + name + '!'
// }

// function canDrink(age) {
//     return age >= 18
// }

// const greeting = greet('Dima')
