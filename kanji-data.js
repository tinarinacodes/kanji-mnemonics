// Kanji learning data - 20 levels, 10 quizzes each
const kanjiData = {
  level1: [
    {
      id: 1,
      mnemonic: "Ten + Person becomes Tree",
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
      mnemonic: "Sun + Moon becomes Bright",
      keywords: ["Sun", "Moon", "Bright"],
      variants: [
        { kanji: "日", meaning: "sun", reading: "hi", hiragana: "ひ" },
        { kanji: "月", meaning: "moon", reading: "tsuki", hiragana: "つき" }
      ],
      result: { kanji: "明", meaning: "bright", reading: "mei", hiragana: "めい" },
      options: [
        { kanji: "日", meaning: "sun", reading: "hi", hiragana: "ひ" },
        { kanji: "月", meaning: "moon", reading: "tsuki", hiragana: "つき" },
        { kanji: "火", meaning: "fire", reading: "hi", hiragana: "ひ" },
        { kanji: "水", meaning: "water", reading: "mizu", hiragana: "みず" },
        { kanji: "木", meaning: "tree", reading: "ki", hiragana: "き" },
        { kanji: "山", meaning: "mountain", reading: "yama", hiragana: "やま" }
      ]
    },
    {
      id: 3,
      mnemonic: "Woman + Child becomes Good",
      keywords: ["Woman", "Child", "Good"],
      variants: [
        { kanji: "女", meaning: "woman", reading: "onna", hiragana: "おんな" },
        { kanji: "子", meaning: "child", reading: "ko", hiragana: "こ" }
      ],
      result: { kanji: "好", meaning: "good", reading: "kou", hiragana: "こう" },
      options: [
        { kanji: "女", meaning: "woman", reading: "onna", hiragana: "おんな" },
        { kanji: "子", meaning: "child", reading: "ko", hiragana: "こ" },
        { kanji: "男", meaning: "man", reading: "otoko", hiragana: "おとこ" },
        { kanji: "母", meaning: "mother", reading: "haha", hiragana: "はは" },
        { kanji: "父", meaning: "father", reading: "chichi", hiragana: "ちち" },
        { kanji: "王", meaning: "king", reading: "ou", hiragana: "おう" }
      ]
    },
    {
      id: 4,
      mnemonic: "Rice + Tree becomes Autumn",
      keywords: ["Rice", "Tree", "Autumn"],
      variants: [
        { kanji: "禾", meaning: "rice", reading: "ka", hiragana: "か" },
        { kanji: "火", meaning: "fire", reading: "hi", hiragana: "ひ" }
      ],
      result: { kanji: "秋", meaning: "autumn", reading: "aki", hiragana: "あき" },
      options: [
        { kanji: "禾", meaning: "rice", reading: "ka", hiragana: "か" },
        { kanji: "火", meaning: "fire", reading: "hi", hiragana: "ひ" },
        { kanji: "木", meaning: "tree", reading: "ki", hiragana: "き" },
        { kanji: "林", meaning: "forest", reading: "hayashi", hiragana: "はやし" },
        { kanji: "森", meaning: "woods", reading: "mori", hiragana: "もり" },
        { kanji: "竹", meaning: "bamboo", reading: "take", hiragana: "たけ" }
      ]
    },
    {
      id: 5,
      mnemonic: "Mouth + Bird becomes Sing",
      keywords: ["Mouth", "Bird", "Sing"],
      variants: [
        { kanji: "口", meaning: "mouth", reading: "kuchi", hiragana: "くち" },
        { kanji: "鳥", meaning: "bird", reading: "tori", hiragana: "とり" }
      ],
      result: { kanji: "鳴", meaning: "sing", reading: "naku", hiragana: "なく" },
      options: [
        { kanji: "口", meaning: "mouth", reading: "kuchi", hiragana: "くち" },
        { kanji: "鳥", meaning: "bird", reading: "tori", hiragana: "とり" },
        { kanji: "犬", meaning: "dog", reading: "inu", hiragana: "いぬ" },
        { kanji: "猫", meaning: "cat", reading: "neko", hiragana: "ねこ" },
        { kanji: "魚", meaning: "fish", reading: "sakana", hiragana: "さかな" },
        { kanji: "馬", meaning: "horse", reading: "uma", hiragana: "うま" }
      ]
    },
    {
      id: 6,
      mnemonic: "Hand + Eye becomes Look",
      keywords: ["Hand", "Eye", "Look"],
      variants: [
        { kanji: "手", meaning: "hand", reading: "te", hiragana: "て" },
        { kanji: "目", meaning: "eye", reading: "me", hiragana: "め" }
      ],
      result: { kanji: "看", meaning: "look", reading: "kan", hiragana: "かん" },
      options: [
        { kanji: "手", meaning: "hand", reading: "te", hiragana: "て" },
        { kanji: "目", meaning: "eye", reading: "me", hiragana: "め" },
        { kanji: "耳", meaning: "ear", reading: "mimi", hiragana: "みみ" },
        { kanji: "鼻", meaning: "nose", reading: "hana", hiragana: "はな" },
        { kanji: "足", meaning: "foot", reading: "ashi", hiragana: "あし" },
        { kanji: "頭", meaning: "head", reading: "atama", hiragana: "あたま" }
      ]
    },
    {
      id: 7,
      mnemonic: "Stone + Water becomes Sand",
      keywords: ["Stone", "Water", "Sand"],
      variants: [
        { kanji: "石", meaning: "stone", reading: "ishi", hiragana: "いし" },
        { kanji: "少", meaning: "few", reading: "shou", hiragana: "しょう" }
      ],
      result: { kanji: "砂", meaning: "sand", reading: "suna", hiragana: "すな" },
      options: [
        { kanji: "石", meaning: "stone", reading: "ishi", hiragana: "いし" },
        { kanji: "少", meaning: "few", reading: "shou", hiragana: "しょう" },
        { kanji: "水", meaning: "water", reading: "mizu", hiragana: "みず" },
        { kanji: "川", meaning: "river", reading: "kawa", hiragana: "かわ" },
        { kanji: "海", meaning: "sea", reading: "umi", hiragana: "うみ" },
        { kanji: "雨", meaning: "rain", reading: "ame", hiragana: "あめ" }
      ]
    },
    {
      id: 8,
      mnemonic: "Gate + Ear becomes Listen",
      keywords: ["Gate", "Ear", "Listen"],
      variants: [
        { kanji: "門", meaning: "gate", reading: "mon", hiragana: "もん" },
        { kanji: "耳", meaning: "ear", reading: "mimi", hiragana: "みみ" }
      ],
      result: { kanji: "聞", meaning: "listen", reading: "kiku", hiragana: "きく" },
      options: [
        { kanji: "門", meaning: "gate", reading: "mon", hiragana: "もん" },
        { kanji: "耳", meaning: "ear", reading: "mimi", hiragana: "みみ" },
        { kanji: "口", meaning: "mouth", reading: "kuchi", hiragana: "くち" },
        { kanji: "目", meaning: "eye", reading: "me", hiragana: "め" },
        { kanji: "手", meaning: "hand", reading: "te", hiragana: "て" },
        { kanji: "足", meaning: "foot", reading: "ashi", hiragana: "あし" }
      ]
    },
    {
      id: 9,
      mnemonic: "Heart + Blue becomes Feeling",
      keywords: ["Heart", "Blue", "Feeling"],
      variants: [
        { kanji: "心", meaning: "heart", reading: "kokoro", hiragana: "こころ" },
        { kanji: "青", meaning: "blue", reading: "ao", hiragana: "あお" }
      ],
      result: { kanji: "情", meaning: "feeling", reading: "jou", hiragana: "じょう" },
      options: [
        { kanji: "心", meaning: "heart", reading: "kokoro", hiragana: "こころ" },
        { kanji: "青", meaning: "blue", reading: "ao", hiragana: "あお" },
        { kanji: "赤", meaning: "red", reading: "aka", hiragana: "あか" },
        { kanji: "白", meaning: "white", reading: "shiro", hiragana: "しろ" },
        { kanji: "黒", meaning: "black", reading: "kuro", hiragana: "くろ" },
        { kanji: "黄", meaning: "yellow", reading: "ki", hiragana: "き" }
      ]
    },
    {
      id: 10,
      mnemonic: "Roof + Pig becomes Home",
      keywords: ["Roof", "Pig", "Home"],
      variants: [
        { kanji: "宀", meaning: "roof", reading: "ben", hiragana: "べん" },
        { kanji: "豕", meaning: "pig", reading: "inoko", hiragana: "いのこ" }
      ],
      result: { kanji: "家", meaning: "home", reading: "ie", hiragana: "いえ" },
      options: [
        { kanji: "宀", meaning: "roof", reading: "ben", hiragana: "べん" },
        { kanji: "豕", meaning: "pig", reading: "inoko", hiragana: "いのこ" },
        { kanji: "宅", meaning: "house", reading: "taku", hiragana: "たく" },
        { kanji: "室", meaning: "room", reading: "shitsu", hiragana: "しつ" },
        { kanji: "庭", meaning: "garden", reading: "niwa", hiragana: "にわ" },
        { kanji: "門", meaning: "gate", reading: "mon", hiragana: "もん" }
      ]
    }
  ],
  // Level 2 - Word Match (reinforcement of Level 1 kanji)
  level2: [
    {
      id: 1,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "十", meaning: "ten", reading: "juu", hiragana: "じゅう" },
        { kanji: "人", meaning: "person", reading: "hito", hiragana: "ひと" },
        { kanji: "木", meaning: "tree", reading: "ki", hiragana: "き" },
        { kanji: "日", meaning: "sun", reading: "hi", hiragana: "ひ" },
        { kanji: "月", meaning: "moon", reading: "tsuki", hiragana: "つき" }
      ]
    },
    {
      id: 2,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "明", meaning: "bright", reading: "mei", hiragana: "めい" },
        { kanji: "火", meaning: "fire", reading: "hi", hiragana: "ひ" },
        { kanji: "水", meaning: "water", reading: "mizu", hiragana: "みず" },
        { kanji: "山", meaning: "mountain", reading: "yama", hiragana: "やま" },
        { kanji: "大", meaning: "big", reading: "dai", hiragana: "だい" }
      ]
    },
    {
      id: 3,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "女", meaning: "woman", reading: "onna", hiragana: "おんな" },
        { kanji: "子", meaning: "child", reading: "ko", hiragana: "こ" },
        { kanji: "好", meaning: "good", reading: "kou", hiragana: "こう" },
        { kanji: "男", meaning: "man", reading: "otoko", hiragana: "おとこ" },
        { kanji: "小", meaning: "small", reading: "shou", hiragana: "しょう" }
      ]
    },
    {
      id: 4,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "秋", meaning: "autumn", reading: "aki", hiragana: "あき" },
        { kanji: "木", meaning: "tree", reading: "ki", hiragana: "き" },
        { kanji: "林", meaning: "forest", reading: "hayashi", hiragana: "はやし" },
        { kanji: "森", meaning: "woods", reading: "mori", hiragana: "もり" },
        { kanji: "竹", meaning: "bamboo", reading: "take", hiragana: "たけ" }
      ]
    },
    {
      id: 5,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "口", meaning: "mouth", reading: "kuchi", hiragana: "くち" },
        { kanji: "鳥", meaning: "bird", reading: "tori", hiragana: "とり" },
        { kanji: "鳴", meaning: "sing", reading: "naku", hiragana: "なく" },
        { kanji: "犬", meaning: "dog", reading: "inu", hiragana: "いぬ" },
        { kanji: "猫", meaning: "cat", reading: "neko", hiragana: "ねこ" }
      ]
    },
    {
      id: 6,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "手", meaning: "hand", reading: "te", hiragana: "て" },
        { kanji: "目", meaning: "eye", reading: "me", hiragana: "め" },
        { kanji: "耳", meaning: "ear", reading: "mimi", hiragana: "みみ" },
        { kanji: "足", meaning: "foot", reading: "ashi", hiragana: "あし" },
        { kanji: "頭", meaning: "head", reading: "atama", hiragana: "あたま" }
      ]
    },
    {
      id: 7,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "石", meaning: "stone", reading: "ishi", hiragana: "いし" },
        { kanji: "砂", meaning: "sand", reading: "suna", hiragana: "すな" },
        { kanji: "川", meaning: "river", reading: "kawa", hiragana: "かわ" },
        { kanji: "海", meaning: "sea", reading: "umi", hiragana: "うみ" },
        { kanji: "雨", meaning: "rain", reading: "ame", hiragana: "あめ" }
      ]
    },
    {
      id: 8,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "門", meaning: "gate", reading: "mon", hiragana: "もん" },
        { kanji: "聞", meaning: "listen", reading: "kiku", hiragana: "きく" },
        { kanji: "看", meaning: "look", reading: "kan", hiragana: "かん" },
        { kanji: "鼻", meaning: "nose", reading: "hana", hiragana: "はな" },
        { kanji: "魚", meaning: "fish", reading: "sakana", hiragana: "さかな" }
      ]
    },
    {
      id: 9,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "心", meaning: "heart", reading: "kokoro", hiragana: "こころ" },
        { kanji: "青", meaning: "blue", reading: "ao", hiragana: "あお" },
        { kanji: "赤", meaning: "red", reading: "aka", hiragana: "あか" },
        { kanji: "白", meaning: "white", reading: "shiro", hiragana: "しろ" },
        { kanji: "黒", meaning: "black", reading: "kuro", hiragana: "くろ" }
      ]
    },
    {
      id: 10,
      type: "word_match",
      instruction: "Match the kanji with their meanings",
      pairs: [
        { kanji: "家", meaning: "home", reading: "ie", hiragana: "いえ" },
        { kanji: "室", meaning: "room", reading: "shitsu", hiragana: "しつ" },
        { kanji: "庭", meaning: "garden", reading: "niwa", hiragana: "にわ" },
        { kanji: "父", meaning: "father", reading: "chichi", hiragana: "ちち" },
        { kanji: "母", meaning: "mother", reading: "haha", hiragana: "はは" }
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