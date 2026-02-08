// Kanji learning data - 20 levels, 10 quizzes each
const kanjiData = {
  level1: [
    {
      id: 1,
      mnemonic: "Ten Person becomes Tree",
      keywords: ["Ten", "Person", "Tree"],
      variants: [
        { kanji: "十", meaning: "ten", reading: "juu", hiragana: "じゅう" },
        { kanji: "人", meaning: "person", reading: "hito", hiragana: "ひと" }
      ],
      result: { kanji: "木", meaning: "tree", reading: "ki", hiragana: "き" },
      options: [
        { kanji: "十", meaning: "ten", reading: "juu", hiragana: "じゅう" },
        { kanji: "人", meaning: "person", reading: "hito", hiragana: "ひと" },
        { kanji: "大", meaning: "big", reading: "dai", hiragana: "だい" },
        { kanji: "小", meaning: "small", reading: "shou", hiragana: "しょう" },
        { kanji: "月", meaning: "moon", reading: "tsuki", hiragana: "つき" },
        { kanji: "日", meaning: "sun", reading: "hi", hiragana: "ひ" }
      ]
    },
    {
      id: 2,
      mnemonic: "The Sun and the Moon together becomes Bright",
      keywords: ["Sun", "Moon", "Bright"],
      variants: [
        { kanji: "日", meaning: "sun", reading: "nichi" },
        { kanji: "月", meaning: "moon", reading: "tsuki" }
      ],
      result: { kanji: "明", meaning: "bright", reading: "mei" },
      options: [
        { kanji: "日", meaning: "sun", reading: "hi" },
        { kanji: "月", meaning: "moon", reading: "tsuki" },
        { kanji: "火", meaning: "fire", reading: "nichi" },
        { kanji: "水", meaning: "water", reading: "mizu" },
        { kanji: "木", meaning: "tree", reading: "ki" },
        { kanji: "山", meaning: "mountain", reading: "yama" }
      ]
    },
    {
      id: 3,
      mnemonic: "To be a Woman or a Child is Good",
      keywords: ["Woman", "Child", "Good"],
      variants: [
        { kanji: "女", meaning: "woman", reading: "onna" },
        { kanji: "子", meaning: "child", reading: "ko" }
      ],
      result: { kanji: "好", meaning: "good", reading: "kou" },
      options: [
        { kanji: "女", meaning: "woman", reading: "onna" },
        { kanji: "子", meaning: "child", reading: "ko" },
        { kanji: "男", meaning: "man", reading: "otoko" },
        { kanji: "母", meaning: "mother", reading: "haha" },
        { kanji: "父", meaning: "father", reading: "chichi" },
        { kanji: "王", meaning: "king", reading: "ou" }
      ]
    },
    {
      id: 4,
      mnemonic: "We harvested Rice and cooked it with Fire in Autumn",
      keywords: ["Rice", "Fire", "Autumn"],
      variants: [
        { kanji: "禾", meaning: "rice", reading: "ka" },
        { kanji: "火", meaning: "fire", reading: "hi" }
      ],
      result: { kanji: "秋", meaning: "autumn", reading: "aki" },
      options: [
        { kanji: "禾", meaning: "rice", reading: "ka" },
        { kanji: "火", meaning: "fire", reading: "hi" },
        { kanji: "木", meaning: "tree", reading: "ki" },
        { kanji: "林", meaning: "forest", reading: "hayashi" },
        { kanji: "森", meaning: "woods", reading: "mori" },
        { kanji: "竹", meaning: "bamboo", reading: "take" }
      ]
    },
    {
      id: 5,
      mnemonic: "Take One Big leap into Heaven",
      keywords: ["One", "Big", "Heaven"],
      variants: [
        { kanji: "一", meaning: "one", reading: "ichi" },
        { kanji: "大", meaning: "big", reading: "dai" }
      ],
      result: { kanji: "天", meaning: "heaven", reading: "ten" },
      options: [
        { kanji: "一", meaning: "one", reading: "ichi" },
        { kanji: "大", meaning: "big", reading: "dai" },
        { kanji: "犬", meaning: "dog", reading: "inu" },
        { kanji: "猫", meaning: "cat", reading: "neko" },
        { kanji: "魚", meaning: "fish", reading: "sakana" },
        { kanji: "馬", meaning: "horse", reading: "uma" }
      ]
    },
    {
      id: 6,
      mnemonic: "Put your Hand above your Eye and Look",
      keywords: ["Hand", "Eye", "Look"],
      variants: [
        { kanji: "手", meaning: "hand", reading: "te" },
        { kanji: "目", meaning: "eye", reading: "me" }
      ],
      result: { kanji: "看", meaning: "look", reading: "kan" },
      options: [
        { kanji: "手", meaning: "hand", reading: "te" },
        { kanji: "目", meaning: "eye", reading: "me" },
        { kanji: "耳", meaning: "ear", reading: "mimi" },
        { kanji: "鼻", meaning: "nose", reading: "hana" },
        { kanji: "足", meaning: "foot", reading: "ashi" },
        { kanji: "頭", meaning: "head", reading: "atama" }
      ]
    },
    {
      id: 7,
      mnemonic: "Grind Stone with a Few times to make Sand",
      keywords: ["Stone", "Few", "Sand"],
      variants: [
        { kanji: "石", meaning: "stone", reading: "ishi" },
        { kanji: "少", meaning: "few", reading: "shou" }
      ],
      result: { kanji: "砂", meaning: "sand", reading: "suna" },
      options: [
        { kanji: "石", meaning: "stone", reading: "ishi" },
        { kanji: "少", meaning: "few", reading: "shou" },
        { kanji: "水", meaning: "water", reading: "mizu" },
        { kanji: "川", meaning: "river", reading: "kawa" },
        { kanji: "海", meaning: "sea", reading: "umi" },
        { kanji: "雨", meaning: "rain", reading: "ame" }
      ]
    },
    {
      id: 8,
      mnemonic: "The Gate to your mind opens when use your Ear to Listen",
      keywords: ["Gate", "Ear", "Listen"],
      variants: [
        { kanji: "門", meaning: "gate", reading: "mon" },
        { kanji: "耳", meaning: "ear", reading: "mimi" }
      ],
      result: { kanji: "聞", meaning: "listen", reading: "kiku" },
      options: [
        { kanji: "門", meaning: "gate", reading: "mon" },
        { kanji: "耳", meaning: "ear", reading: "mimi" },
        { kanji: "口", meaning: "mouth", reading: "kuchi" },
        { kanji: "目", meaning: "eye", reading: "me" },
        { kanji: "手", meaning: "hand", reading: "te" },
        { kanji: "足", meaning: "foot", reading: "ashi" }
      ]
    },
    {
      id: 9,
      mnemonic: "My Heart is Blue I am so in my Feelings",
      keywords: ["Heart", "Blue", "Feeling"],
      variants: [
        { kanji: "忄", meaning: "heart(left variant)", reading: "kokoro" },
        { kanji: "青", meaning: "blue", reading: "ao" }
      ],
      result: { kanji: "情", meaning: "feeling", reading: "jou" },
      options: [
        { kanji: "忄", meaning: "heart(left variant)", reading: "kokoro" },
        { kanji: "青", meaning: "blue", reading: "ao" },
        { kanji: "赤", meaning: "red", reading: "aka" },
        { kanji: "白", meaning: "white", reading: "shiro" },
        { kanji: "黒", meaning: "black", reading: "kuro" },
        { kanji: "黄", meaning: "yellow", reading: "ki" }
      ]
    },
    {
      id: 10,
      mnemonic: "Through the Roof a Pig fell into my House",
      keywords: ["Roof", "Pig", "House"],
      variants: [
        { kanji: "宀", meaning: "roof", reading: "べん" },
        { kanji: "豕", meaning: "pig", reading: "いのこ" }
      ],
      result: { kanji: "家", meaning: "house", reading: "ie" },
      options: [
        { kanji: "宀", meaning: "roof", reading: "べん" },
        { kanji: "豕", meaning: "pig", reading: "いのこ" },
        { kanji: "宅", meaning: "house", reading: "taku" },
        { kanji: "室", meaning: "room", reading: "shitsu" },
        { kanji: "庭", meaning: "garden", reading: "niwa" },
        { kanji: "門", meaning: "gate", reading: "mon" }
      ]
    }
  ],
   level2: [
    {
      id: 1,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "十", meaning: "ten", reading: "juu" },
        { kanji: "人", meaning: "person", reading: "hito" },
        { kanji: "木", meaning: "tree", reading: "ki" },
        { kanji: "日", meaning: "sun", reading: "hi" },
        { kanji: "月", meaning: "moon", reading: "tsuki" }
      ]
    },
    {
      id: 2,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "明", meaning: "bright", reading: "mei" },
        { kanji: "火", meaning: "fire", reading: "hi" },
        { kanji: "水", meaning: "water", reading: "mizu" },
        { kanji: "山", meaning: "mountain", reading: "yama" },
        { kanji: "大", meaning: "big", reading: "dai" }
      ]
    },
    {
      id: 3,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "女", meaning: "woman", reading: "onna" },
        { kanji: "子", meaning: "child", reading: "ko" },
        { kanji: "好", meaning: "good", reading: "kou" },
        { kanji: "男", meaning: "man", reading: "otoko" },
        { kanji: "小", meaning: "small", reading: "shou" }
      ]
    },
    {
      id: 4,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "秋", meaning: "autumn", reading: "aki" },
        { kanji: "木", meaning: "tree", reading: "ki" },
        { kanji: "林", meaning: "forest", reading: "hayashi" },
        { kanji: "森", meaning: "woods", reading: "mori" },
        { kanji: "竹", meaning: "bamboo", reading: "take" }
      ]
    },
    {
      id: 5,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "口", meaning: "mouth", reading: "kuchi" },
        { kanji: "鳥", meaning: "bird", reading: "tori" },
        { kanji: "鳴", meaning: "sing", reading: "naku" },
        { kanji: "犬", meaning: "dog", reading: "inu" },
        { kanji: "猫", meaning: "cat", reading: "neko" }
      ]
    },
    {
      id: 6,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "手", meaning: "hand", reading: "te" },
        { kanji: "目", meaning: "eye", reading: "me" },
        { kanji: "耳", meaning: "ear", reading: "mimi" },
        { kanji: "足", meaning: "foot", reading: "ashi" },
        { kanji: "頭", meaning: "head", reading: "atama" }
      ]
    },
    {
      id: 7,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "石", meaning: "stone", reading: "ishi" },
        { kanji: "砂", meaning: "sand", reading: "suna" },
        { kanji: "川", meaning: "river", reading: "kawa" },
        { kanji: "海", meaning: "sea", reading: "umi" },
        { kanji: "雨", meaning: "rain", reading: "ame" }
      ]
    },
    {
      id: 8,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "門", meaning: "gate", reading: "mon" },
        { kanji: "聞", meaning: "listen", reading: "kiku" },
        { kanji: "看", meaning: "look", reading: "kan" },
        { kanji: "鼻", meaning: "nose", reading: "hana" },
        { kanji: "魚", meaning: "fish", reading: "sakana" }
      ]
    },
    {
      id: 9,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "心", meaning: "heart", reading: "kokoro" },
        { kanji: "青", meaning: "blue", reading: "ao" },
        { kanji: "赤", meaning: "red", reading: "aka" },
        { kanji: "白", meaning: "white", reading: "shiro" },
        { kanji: "黒", meaning: "black", reading: "kuro" }
      ]
    },
    {
      id: 10,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "家", meaning: "home", reading: "ie" },
        { kanji: "室", meaning: "room", reading: "shitsu" },
        { kanji: "庭", meaning: "garden", reading: "niwa" },
        { kanji: "父", meaning: "father", reading: "chichi" },
        { kanji: "母", meaning: "mother", reading: "haha" }
      ]
    }
  ],
  level3: [],
  level4: [],
  level5: [],
  level6: [],
  level7: [],
  level8: [],
  level9: [],
  level10: [],
  level11: [],
  level12: [],
  level13: [],
  level14: [],
  level15: [],
  level16: [],
  level17: [],
  level18: [],
  level19: [],
  level20: []
};