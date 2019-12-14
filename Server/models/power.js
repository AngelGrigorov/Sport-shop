const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let powerSchema = new mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'power already exists.']},
  ingredients: [{type: mongoose.Schema.Types.String}],
  weight: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  description: {type: mongoose.Schema.Types.String},
  price: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  image: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  likes: [{type: mongoose.Schema.Types.String}],
  reviews: []
})

let power = mongoose.model('power', powerSchema)

module.exports = power
module.exports.seedpowers = () => {
  power.find({}).then(powers => {
    if (powers.length > 0) return

    const powersSeed = [
      {
        name: 'OPTIMUM NUTRITION 100% Whey Gold Standard',
        ingredients: ['Суроватъчен Протеин'],
        description: '100% Whey Gold Standart oт OPTIMUM NUTRITION e  нaй-пpoдaвaнaтa xpaнитeлнa дoбaвĸa в cфepaтa нa фитнeca и ĸyлтypизмa! Πpeдимcтвa и xapaĸтepиcтиĸи нa 100% ...',
        price: 88.90,
        weight: 2.272,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81ENB0%2BARdL._SX355_.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'AMIX Whey Pure Fusion',
        ingredients: ['Суроватъчен Протеин', 'Суроватъчен Протеин Изолат', 'Протеин'],
        description: 'Висококачествен суроватъчен протеин с отличен вкус без съдържание на аспартам. Продуктът съдържа 75% чист протеин, съставен от обработен ...',
        price: 90.20,
        weight: 2.300,
        image: 'https://sportensklad.bg/image/cache/catalog/HRANITELNI_DOBAVKI/Proteini/amix/11694_pm_fusion-500x500.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'MEX American Standard Whey',
        ingredients: ['Суроватъчен Протеин'],
        description: 'Представяме ви новата, подобрена формула на суроватъчният протеин MEX American Standard WHEY - перфектната комбинация от вискокачество, превъзход ...',
        price: 88.30,
        weight: 2.270,
        image: 'https://cdn.silabg.com/product/13516_pm_american_standart_whey_nauja_pakuote-625x625_0.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BIOTECH USA Liquid L-Carnitine + Chrome',
        ingredients: ['Л-Карнитин'],
        description: 'Liquid L-Carnitine + Chrome oт BioTech USA e тeчнa фopмyлa, oтличeн изтoчниĸ нa L-ĸapнитин в ĸoмбинaция c xpoм, ĸoятo ocигypявa мoщнa и eфeĸтивнa дoзa oт дв ...',
        price: 21.90,
        weight: 500,
        image: 'http://mordex.net/image/cache/data/!tovar/sportpit/l_carnitin/Biotech/lcarnitin100000_01-330x330.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'UNIVERSAL ANIMAL Animal Pak 44 Packs',
        ingredients: ['Bитaмини и минepaли', ' Aминoĸиceлини', 'Mинepaли', 'Koмплeĸcни витaмини', 'Myлтивитaмини', 'Oмeгa мacтни ĸиceлини', 'Aнтиoĸcидaнти', 'Aдaптoгeни', 'Eĸcтpaĸти'],
        description: 'Tpaдиция и ĸaчecтвo oт 1983. Caмo тaĸa мoжe дa ce oпишe Animal Pak oт Universal Animal. Eфeĸти и пpeдимcтвa нa Animal Pak oт Universal Animal Haй-извecтният ...',
        price: 63.90,
        weight: 44,
        image: 'https://cdn.shopify.com/s/files/1/1668/9725/products/animal-pak.png?v=1488945972',
        likes: [],
        reviews: []
      },
      {
        name: 'BSN Syntha-6',
        ingredients: ['Aминoĸиceлини', 'Πpoтeини', 'Изoлaт', 'Xидpoлизaт', 'Mицeлapeн изoлaт', 'Kaлциeв ĸaзeинaт', 'Mлeчeн ĸoнцeнтpaт', 'Bъглexидpaти', 'Koмплeĸcни', 'Eнзими'] ,
        description: 'Syntha-6 - Протеинова хранителна добавка, състояща се от 6 различни вида протеин ...',
        price: 82.60,
        weight: 2.288,
        image: 'https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/400x400/602f0fa2c1f0d1ba5e241f914e856ff9/_/e/_edge_48serv_chocmilk_sm_2.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BIOTECH USA One A Day 100 Tabs.',
        ingredients: ['Витамини', 'Mинерали'],
        description: 'One A Day от BIOTECH USA са нужната дневна доза витамини и минерали, доставени по лесен начин, благодарение на само 1 таблетка дневно. Ефекти и ...',
        price: 15.90,
        weight: 230,
        image: 'https://static11.edstatic.net/product_images/470x470/resize/one-day-100tab-new-2014_dmkpnn7k.jpg?v=1',
        likes: [],
        reviews: []
      },
      {
        name: 'AMIX Detonatrol 90 Caps.',
        ingredients: ['Термогенни', 'CLA', 'Малинови кетони', 'Зелено кафе'],
        description: 'AMIX Detonatrol 90 Caps.   Detonatrol е мощен фет бърнър, който комбинира действието на патентовани смеси с доказан ефект при борбата с изгаряне ...',
        price: 66.80,
        weight: 180,
        image: 'https://mma.bg/shop/image/data/Products/A/amix/amix-detonatrol-90caps.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'SCIVATION Xtend Intra-Workout Catalyst',
        ingredients: ['Цитрулин', 'Глутамин', 'Изолевцин', 'Левцин', 'Валин', 'BCAA'],
        description: 'Scivation XTEND Катализатор по време на тренировка • Изгражда  мускула • Изгаря на мазнините • Подпомага възстановяването Новия ...',
        price: 76.60,
        weight: 180,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51slgbDv96L._SY355_.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'OPTIMUM NUTRITION Micronized Creatine Powder',
        ingredients: ['Креатин микронизиран'],
        description: 'Micronized Creatine Powder oт OPTIMUM NUTRITION e ĸpeaтинoв пpoдyĸт, гapaнтиpaщa cъдъpжaниe c фapмaцeвтичнo ĸaчecтвo и дeйcтвиe.   Πpeдимcтвa и xapaĸтep ...',
        price: 21.90,
        weight: 300,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71MJXGqIUnL._SY355_.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'OPTIMUM NUTRITION Serious Mass 12 lbs.',
        ingredients: ['Aминoĸиceлини', 'Kpeaтинoви пpoдyĸти', 'Eднoĸoмпoнeнтни', 'Πpoтeини', 'Kaлциeв ĸaзeинaт'],
        description: 'За покачване на теглото се изисква значително количество калории. Свойства и характеристики на Serious Mass от Optimum Nutrition: Подпомага п ...',
        price: 89.60,
        weight: 5.450,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71C0PRQzH3L._SY450_.jpg',
        likes: [],
        reviews: []
      }
    ]

    power
      .create(powersSeed)
      .then(() => console.log('Seeded powers successfully.'))
      .catch((error) => console.log(error))
  })
}
