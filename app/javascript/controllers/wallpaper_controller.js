import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["canvas", "save", "apiKey", "load", "width", "height", "spacing", "levelColor", "background"];

  backgroundColor = "#000000";
  height = 256;
  kanjiArray = [];
  kanjiList = "一二三十人大八木力五六口日中月四七九白山出火水女小入本子川上下土牛先気夕天年今目見千田男父休母工左車外右手生学分行万食半止正何言立未来文交校犬毎心私耳聞元方北長少刀切前午早名王玉国後足不字用東兄寺時赤西高会穴空好百同音化花考自多南広円体作青社門間近古弟雨去士売話夜仕石色明肉代知画店太歩昨申電思丁町引死内主姉書笑有安全金走妹家海図京当回冬語写理読虫強声市紙教室事光医者以良台始黒使住物茶場羊着可達友曜米週首道他合答持朝度形待楽打甘俺僕無彼計番号貝買味風夏屋直村界世重由帰発服送己起欠飲次向注病低暗消活終魚歌鳥新丸危別秋記員完院助君両飯館晴違決悪開急春旅反動問対点予野親軍運船具真転馬族必集所羽張果頭酒機等習夫失旦昼曲局科役品意受付草雪毛投表頼怒撮髪嫌遅業戸特各客定負林苦美返乗式痛結段飛放伝育部央英神成末数指守料初配息追取銀原氷星鳴谷皿血優机選進束速要落勝洋面角皮争支老建通系係庭葉遠昔矢列借絵求球池深労都加弱泳非悲法州再泣娘解誕腕例想題変参試公園顔談商約信調念様最久森豆登殺告残陽勉治仲区映堂官単宿折性亡壁感普払望港戦然辺令因糸黄路在連犯件便利任氏波示得徒福覚里奴努喜害漢愛命能駅布希情灯究研寂輩隠頑絡兆逃冷席薬判験皆階島関続余泉線根細働周政存岩歯坂横術囲了格遊雲敗説毒練熱寒協介許妻置険則側容紹静祭察常幸報史箱産岸勇種比荷技差植務功及吸若断温満身質困章貸拾第責限似願師経秒地組実底過委収芸居固供傷趣慮驚踊敢厳壊簡忘留迷候召招鉄府呼栄罪夢司卒農改備座財軽橋確鼻退宅短団辛辞類易洗干処庫松板湯査景雰祝焼給訓資圧疑弁構増油際汽晩緑散済祖効演破象像輪個費倍義議浴値絶課帯賞順防量副認乱平和相位舞流規観寄吉瞬才礼慢緊妙省与刑型的婦否宮混減旧児背永割仮衣程停設識精浅季訪骨案探応届管菜紀逆歴抜整除降刻専慣弓腹快器算民敬警条到倒保県禁接造権詩価雑包勢河復笛票標閉臣移証貧孫担挙欲幼職凶胸積営捕怖難杯期清丘兵突巻暴基昭照論準込避制級状共影城我適句承極録競億故更迎富素片領忙隊陸互粉署暮眠戻境救仏述脳押検射謝博導律恋航総並寝恐宙宇独渡乳築奪筆派宝域婚燃授充統提厚看猫誤祈預舌志捨巨賛健枝評被養厄康態延将豊浮盗姿離激劇窓修砂塩敵又胃略抱災掛即節匂材超補率鏡棒装針恥複捜途革視典裏紅勤庁刺液況従額桜越純党牧採含柱測靴現幻均宗汚損尊貯倉暑灰街吹契幕幹脈煙巣裁触展秘税券緒悩善群恩策編疲占訳翌泥属企貴興卵製蔵護誌炭昇頂梅眼批輸乾討忠皇秀著怪伸謎麦札印武版潰涙替績至宣是郎尾牙芽香攻依江湖鬼層拝叫異益織脱染貨障冒渉尻御墓徳密詞奇臭震崎漁筋戒械援朱株就衛迫聖奥納腰舎菓飼創沢盛肩双扱径振模揮詰畑屈旗歳施拡肥凍妥銭源冊汗偉坊臓跡講裕掃為操惑雄沈虎賀吐択帳垂郵雇訴剣序泊推浜暇誘荒仙審載郷撃諸遺妨華索奏井袋封抗埋酸換妊症咲監般珍潔房匹肌抵詳療矛柔拒鉱衆診床仁乏肺刷患誠豚弾僧販罰佐克励暖巡唱徴叔督既爆尋抑喫樹伺酔魅芝携掘逮銅幽沿悟貞偵妃邪欧崩恵鈴往銃歓斗絞缶沖虚募履刃蒸睡飾盟贈却炎悔糖幾侵削寸賃忍津威描桃塗帝冗杉湾析柄獣昆騒俳漏肝致免姫握濃琴鮮恨端烈微請響葬亀拳狩脅脚縦偽憎丈朗玄拍添呂執慎没勘麻稚継揺獄駐乙腐枚狙頃傾偶衝伴刊伏粒甲哲狂透狭孝粋環邦雷控殴釣幅砲那閣郡賢梨豪陣泰享熟宴斉滞寿鋼憲覧涼鋭耐獲霊洞遣陰阻溶拘称焦雅伯闘犠牲聴嫁硬還斎懐符唯筒呪哀駄滅辱稼催鹿儀排誇隣脂挟亜褒劣剤嬢嵐堀敷滴踏齢盾拐舟縮眺尽竹砕徹融紋黙宜僚侍薄孤償汁綿誰勧胞潮仰輝誓跳姓促帽鈍峰廷核喪婆距繰麗畜撤尉潜廊裂渋彫掲架釈凡懸随較磨欺詐締駆惨摘臨巧陥虐殊泡征魔艦瓦瓶滑誉維浦堅嘆傘拓魂猛磁縁縄遭揚茂冠沼兼棄穂奮丹献寧韓奉遂襲摩紫后殿拠挑童託敏妖紛炉慰菌濯愚晶訟渇囚賊薦隅尿需塚斬卓鉛爪滝飢裸尚倫遇沸顧須惜浄郊彩佳騎悠塊憶賭飽稿併貫穏掌愉漫閥腸卑酷陛廃胆貢棟漠棚塔繁徐邸珠侮妄稲帆隔謀鎖項零瀬湿熊殖荘肯煮露概苗披浸喝範蛇怠譲朴亭如把枢疫鐘闇拶軟鑑隙圏挨慈擦偏貿覆憧壮赦懲鼓躍浪酢扇緩岳猿墨垣培耕畳枕搭寛翻瞳錠枯唐墜枠祉謙盤粘丼粧芋駒錬洪縫膨鍛剰蜂霧頻喚澄陵虜陳椅撲痕暦傑秩癖憩娠簿賄翼搬剛縛紳括抹軌購庶遮眉淑隷蛍籍鶏蜜脇絹繊股噴諾摂該殻爽胎網郭挿衰肪軒漂旨婿鎮崇爵蓄窮奨疎燥抽癒軸淡債捉銘塞酎窒斜赴鶴猶拭陶朽寮鍵肢餌碁渦崖疾漬猟俗恒尺腫糧隻彰蛮悼胴痴刈粛羅壇弄粗宛棺巾啓蚊膚涯棋肖禅吟附睦詮溝乞錯班竜匠鍋盲叱呉娯鉢臆凝俵槽綱旬剖嗅岐慌堕妬貼堪勲曇舗侶諦傍据虹覇溺蓋醜渓湧詠梗唇炊搾扉栽盆宵迅栓媒剥旋稽礎但艇擁匿漆餓潤煩麺謹蹴措峡賠茎窃膜吏訂坪弦憂穫逸酬拷弔骸昧唾懇挫呈僅倣釜串踪矯刹穀循緯璧衡鯨凄髄唆塀轄藻喉幣閲賂塾堤酪薪醒鎌篤甚腎桁柿瞭顕旺暫糾累罵慶岬奔雌哺芯弊践嫉泌羨楼遜憤貌諭戴峠濁勾袖箸遍耗痢慕賜騰拉戯戚膳箋痩箇慨桟紺傲斑柵惰餅堆賓斥玩擬紡弧蔑繕酌碑肘嚇欄愁謡劾憾膝襟舶卸霜譜煎租遡裾喩遵且鬱綻貪叙凸凹遷捗捻罷萎籠曖扶迭氾寡窯畏惧倹醸墳嘲頓顎苛衷閑逓諮詣緻汎濫嘱漸艶賦摯彙麓楷錮";
  kanjiProgress = [];
  levelColors = [
    "#555555",
    "#ed7989",
    "#ed7989",
    "#ed7989",
    "#ed7989",
    "#fdc281",
    "#fdc281",
    "#73ca9d",
    "#66a9e8",
    "#b0a5f2",
  ];
  spacing = 3;
  width = 256;

  connect() {
    const dpr = window.devicePixelRatio;
    this.width = Math.floor(window.screen.width * dpr);
    this.height = Math.floor(window.screen.height * dpr);
    this.canvasTarget.width = this.width;
    this.canvasTarget.height = this.height;

    this.widthTarget.value = this.width;
    this.heightTarget.value = this.height;
    this.spacingTarget.value = this.spacing;

    for (var i = 0; i < this.levelColors.length; ++i) {
      this.levelColorTargets[i].value = this.levelColors[i];
    }

    this.kanjiArray = Array.from(this.kanjiList);

    this.render();
  }

  fontSize() {
    const count = this.kanjiArray.length;
    const aspect = this.width / this.height;
    const i = Math.ceil(Math.sqrt(count * aspect));
    return Math.floor(i / aspect) * i < count ? this.height / Math.ceil(i / aspect) : this.width / i;
  }

  loadProgress() {
    const uri = "/api/known-kanji?key=" + encodeURIComponent(this.apiKeyTarget.value);

    this.loadTarget.classList.add("btn-disabled");
    const currentText = this.loadTarget.innerText;
    this.loadTarget.innerText = this.loadTarget.dataset.loadingText;

    fetch(uri).then((response) => response.json()).then((data) => {
      this.loadTarget.classList.remove("btn-disabled");
      this.loadTarget.innerText = currentText;

      this.setProgress(data);
    }).catch((ex) => {
      this.loadTarget.classList.remove("btn-disabled");
      this.loadTarget.innerText = currentText;

      const alert = document.createElement("div");
      alert.classList.add("alert", "alert-error");
      alert.innerText = "Failed to fetch kanji: " + ex;

      document.getElementById("toasts").appendChild(alert);

      setTimeout(() => alert.remove(), 8000);

      console.log("Failed to fetch kanji: " + ex);
    });
  }

  render() {
    const context = this.canvasTarget.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.fillStyle = this.backgroundColor;
    context.fillRect(0, 0, this.width, this.height);

    const fontSize = this.fontSize();
    const fontPadding = this.spacing;
    const rows = Math.floor(this.height / (fontSize - 1));
    const columns = Math.ceil(this.kanjiArray.length / rows);
    const xPad = (this.width - fontSize * columns) / columns;
    const yPad = (this.height - fontSize * rows) / (rows + 1);
    context.font = "900 " + (fontSize - fontPadding) + "px sans-serif";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillStyle = "#555";

    let xOff = 0.5;
    let yOff = 0.5;
    for (var i = 0; i < this.kanjiArray.length; ++i) {
      const character = this.kanjiArray[i];
      const x = xOff * (fontSize + xPad);
      const y = yOff * (fontSize + yPad);

      const level = this.kanjiProgress[character] || 0;
      context.fillStyle = this.levelColors[level];
      context.fillText(character, x, y);

      if (yOff >= rows - 1) {
        xOff += 1;
        yOff = 0.5;
      } else {
        yOff += 1;
      }
    }

    this.saveTarget.href = this.canvasTarget.toDataURL();
  }

  setProgress(data) {
    this.kanjiProgress = [];
    for (var i = 0; i < data.items.length; ++i) {
      this.kanjiProgress[data.items[i].item] = Math.min(Math.max(data.items[i].level, 0), 9);
    }
    this.render();
  }

  update() {
    this.width = this.widthTarget.value;
    this.height = this.heightTarget.value;
    this.spacing = this.spacingTarget.value;

    for (var i = 0; i < this.levelColors.length; ++i) {
      this.levelColors[i] = this.levelColorTargets[i].value;
    }
    this.backgroundColor = this.backgroundTarget.value;

    this.canvasTarget.width = this.width;
    this.canvasTarget.height = this.height;

    this.render();
  }

  updateApiKey() {
    const key = this.apiKeyTarget.value;
    if (key.match(/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}-[0-9]+/)) {
      this.loadTarget.classList.remove("btn-disabled");
    } else {
      this.loadTarget.classList.add("btn-disabled");
    }
  }
}