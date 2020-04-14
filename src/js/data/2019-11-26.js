dataSetVersion = "2020-04-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
 
  {
    name: "按组分类",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain troupe as enemies.",
    checked: false,
    sub: [ { name: "春", key: "st1" }, { name: "夏", key: "st2" }, { name: "秋", key: "st3" }, { name: "冬", key: "st4" }

    ]
  },
  
];

dataSet[dataSetVersion].characterData = [
  {
    name: "古市左京",
    img: "j4MV0Qh.jpg",
    opts: {
            stage: ["st3"]
    }
  },
  {
    name: "GUY",
    img: "qZSbTmY.jpg",
    opts: {
      stage: ["st4"]
    }
  },
  {
    name: "三好一成",
    img:"e9ZFfdj.jpg",
    opts: {
      stage: ["st2"]
    }
  },
  {
    name: "摄津万里",
    img: "4KKRs5Q.jpg",
    opts: {
      stage: ["st3"]
    },
  },
  {
    name: "雪白东",
    img: "CCj4FrH.jpg",
    opts: {
      stage: ["st4"]
    }
  },
  {
    name: "琉璃川幸",
    img: "adPEinz.jpg",
    opts: {
      stage: ["st2"]
    }
  },
  {
    name: "泉田莇",
    img: "MRKF67K.jpg",
    opts: {

      stage: ["st3"],

    }
  },
  {
    name: "七尾太一",
    img: "QEBsWVL.jpg",
    opts: {
      stage: ["st3"]
    }
  },
  {
    name: "皇天马",
    img: "Ohb2ksa.jpg",
    opts: {
      stage: ["st2"]
    }
  },
  {
    name: "高远丞",
    img: "bfaH3um.jpg",
    opts: {
      stage: ["st4"]
    }
  },
  {
    name: "有栖川誉",
    img: "oHnT0Wi.jpg",
    opts: {
      stage: ["st4"]
    }
  },
  {
    name: "兵头十座",
    img: "qv0xUOp.jpg",
    opts: {

      stage: ["st3"]
    }
  },
  {
    name: "希特隆",
    img: "BdSsGSm.jpg",
    opts: {
      stage: ["st1"]
    }
  },
  {
    name: "卯木千景",
    img: "v5BFYIg.jpg",
    opts: {
      stage: ["st1"]
    }
  },
  {
    name: "兵头九门",
    img: "7zNgUty.jpg",
    opts: {
    
      stage: ["st2"]
    }
  },
  {
    name: "御影密",
    img: "uVJKzgV.jpg",
    opts: {

      stage: ["st4"]
    }
  },
  {
    name: "伏见臣",
    img: "8c7doqz.jpg",
    opts: {

      stage: ["st3"]
    }
  },
  {
    name: "斑鸠三角",
    img: "6Orex6t.jpg",
    opts: {

      stage: ["st2"]
    }
  },
  {
    name: "茅崎至",
    img: "6JVNEYM.jpg",
    opts: {
      stage: ["st1"]
    }
  },
  {
    name: "向坂椋",
    img: "x4nOLUf.jpg",
    opts: {

      stage: ["st2"]
    }
  },
  {
    name: "月冈紬",
    img: "gqJnIj2.jpg",
    opts: {
     
      stage: ["st4"]
    }
  },
  {
    name: "皆木缀",
    img: "mVtKziP.jpg",
    opts: {

      stage: ["st1"]
    }
  },
  {
    name: "碓冰真澄",
    img: "DyCz0N1.jpg",
    opts: {
      stage: ["st1"]
    }
  },
  {
    name: "佐久间咲也",
    img: "21L1ahu.jpg",
    opts: {
      stage: ["st1"]
    }
  },
  
];
