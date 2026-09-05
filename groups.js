// structure of each idol array:
// {name: " ", debut_date: "yyyy-mm-dd", disband_date: "yyyy-mm-dd"|null, company: " ", type: "boy group|girl group|coed group|solo|genderless|band?", colors: [#HEX1, #HEX2]}
// maybe add active period?
const groups=[
    // SM
    {   
        name:"H.O.T.", debut_date:"1996-09-07", disband_date:"2001-05-13", company: "sm", type:"boy group",
        colors: ["#fee101", "#0054ff", "#dc143c", "#00A250", "#ff8c00"]
    },
    {   
        name:"Super Junior", debut_date:"2005-11-06", disband_date: null, company: "sm", type:"boy group",
        colors: ["#00239B"]
    },
    {   
        name:"f(x)", debut_date:"2009-09-05", disband_date:"2016-01-01", company: "sm", type:"girl group",
        colors: ["#ccccff"]
    },
    {   
        name:"S.E.S.", debut_date:"1997-11-28", disband_date:"2002-12-19", company: "sm", type:"girl group",
        colors: ["#8147b3"]
    },
    {
        name:"Shinhwa", debut_date:"1998-03-24", disband_date: null, company: "sm", type:"boy group",
        colors: ["#ff8c00"]
    },
    {
        name:"TVXQ", debut_date:"2003-12-26", disband_date: null, company: "sm", type:"boy group",
        colors: ["#E4002B"]
    },
    {
        name:"CSJH The Grace", debut_date:"2005-04-29", disband_date: "2008-01-01", company: "sm", type:"girl group",
        colors:["#FFC0CB"]
    },
    {
        name:"Girls' Generation", debut_date:"2007-08-05", disband_date: null, company: "sm", type:"girl group",
        colors:["#FF84C3"]
    },
    {
        name:"SHINee", debut_date:"2008-05-25", disband_date: null, company: "sm", type:"boy group",
        colors:["#79e5cb"]
    },
    {
        name:"EXO", debut_date:"2012-04-28", disband_date: null, company: "sm", type:"boy group",
        colors:["#929397"]
    },
    {
        name:"Red Velvet", debut_date:"2014-08-01", disband_date: null, company: "sm", type:"girl group",
        colors:["#ffa38b"]
    },
    {
        name:"NCT", debut_date:"2016-04-09", disband_date: null, company: "sm", type:"boy group",
        colors:["#bbe309"]
    },
    {
        name:"SuperM", debut_date:"2019-10-04", disband_date: "2022-01-01", company: "sm", type:"boy group",
        colors:["#000000"]
    },
    {
        name:"aespa", debut_date:"2020-11-17", disband_date: null, company: "sm", type:"girl group",
        colors:["#9CEAFE", "#C88DDD"]
    },
    {
        name:"RIIZE", debut_date:"2023-09-04", disband_date: null, company: "sm", type:"boy group",
        colors: ["#ff8c00"]
    },
    {
        name:"Hearts2Hearts", debut_date:"2025-02-24", disband_date: null, company: "sm", type:"girl group",
        colors:["#a9daf9"]
    },

    // JYP
    {   
        name:"Wonder Girls", debut_date:"2007-02-10", disband_date:"2017-02-10", company: "jyp", type:"girl group",
        colors: ["#C71584"]
    },
    {   
        name:"2AM", debut_date:"2008-07-11", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"2PM", debut_date:"2008-09-04", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"Miss A", debut_date:"2010-07-01", disband_date:"2017-12-27", company: "jyp", type:"girl group",
        colors: ["#e44b78"]
    },
    {   
        name:"GOT7", debut_date:"2014-01-16", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#bfd319"]
    },
    {   
        name:"DAY6", debut_date:"2015-09-07", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#57c3c5", "#093B6C"]
    },
    {   
        name:"TWICE", debut_date:"2015-10-20", disband_date: null, company: "jyp", type:"girl group",
        colors: ["#ff5fa2", "#fcc89b"]
    },
    {   
        name:"Stray Kids", debut_date:"2018-03-25", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"BOY STORY", debut_date:"2018-09-21", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#f0d2e3", "#86d0f2"]
    },
    {   
        name:"ITZY", debut_date:"2019-02-12", disband_date: null, company: "jyp", type:"girl group",
        colors: ["#EE6666","#D9409F", "#A98BC8"]
    },
    {   
        name:"NiziU", debut_date:"2020-06-26", disband_date: null, company: "jyp", type:"girl group",
        colors: ["#D6001C", "#FF6900", "#FEDB00", "#00AA13", "#003DA5", "#001E62", "#5C068C"]
    },
    {   
        name:"Xdinary Heroes", debut_date:"2021-12-06", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"NMIXX", debut_date:"2022-02-22", disband_date: null, company: "jyp", type:"girl group",
        colors: ["#02c5da"]
    },
    {   
        name:"NEXZ", debut_date:"2024-05-20", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"KickFlip", debut_date:"2025-01-20", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#53372d"]
    },
    {   
        name:"奔赴少年 CIIU", debut_date:"2025-08-22", disband_date: null, company: "jyp", type:"boy group",
        colors: ["#3561ff", "#ffce00"]
    },

    // YG
    {   
        name:"1TYM", debut_date:"1998-11-05", disband_date: "2006-01-01", company: "yg", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"Bigmama", debut_date:"2003-02-06", disband_date: null, company: "yg", type:"girl group",
        colors: ["#000000"]
    },
    {   
        name:"BIGBANG", debut_date:"2006-08-19", disband_date: null, company: "yg", type:"boy group",
        colors: ["#fde100"]
    },
    {   
        name:"2NE1", debut_date:"2009-05-17", disband_date: "2016-11-25", company: "yg", type:"girl group",
        colors: ["#ee4b8a"]
    },
    {   
        name:"AKMU", debut_date:"2014-04-17", disband_date: null, company: "yg", type:"coed group",
        colors: ["#13983f"]
    },
    {   
        name:"WINNER", debut_date:"2014-08-17", disband_date: null, company: "yg", type:"boy group",
        colors: ["#003389"]
    },
    {   
        name:"iKON", debut_date:"2015-09-15", disband_date: null, company: "yg", type:"boy group",
        colors: ["#cf1020"]
    },
    {   
        name:"BLACKPINK", debut_date:"2016-08-08", disband_date: null, company: "yg", type:"girl group",
        colors: ["#f7a7bb"]
    },
    {   
        name:"TREASURE", debut_date:"2020-08-07", disband_date: null, company: "yg", type:"boy group",
        colors: ["#6188d5"]
    },
    {   
        name:"BABYMONSTER", debut_date:"2024-04-01", disband_date: null, company: "yg", type:"girl group",
        colors: ["#da303a"]
    },

    // DSP
    {   
        name:"SECHSKIES", debut_date:"1997-04-15", disband_date: "2000-02-18", company: "dsp", type:"boy group",
        colors: ["#fee101"]
    },
    {   
        name:"Fin.K.L", debut_date:"1998-05-12", disband_date: "2005-01-01", company: "dsp", type:"girl group",
        colors: ["#ff0000"]
    },
    {   
        name:"CLICK B", debut_date:"1999-08-07", disband_date: "2004-01-01", company: "dsp", type:"boy group",
        colors: ["#2e8b57"]
    },
    {   
        name:"SS501", debut_date:"2005-06-08", disband_date: "2010-07-11", company: "dsp", type:"boy group",
        colors: ["#90ee90"]
    },
    {   
        name:"KARA", debut_date:"2007-03-29", disband_date: null, company: "dsp", type:"girl group",
        colors: ["#fbbea0"]
    },
    {   
        name:"RAINBOW", debut_date:"2009-11-14", disband_date: "2016-11-12", company: "dsp", type:"girl group",
        colors: ["#D6001C", "#FF6900", "#FEDB00", "#00AA13", "#003DA5", "#001E62", "#5C068C"]
    },
    {   
        name:"A-JAX", debut_date:"2012-06-02", disband_date: "2019-03-31", company: "dsp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"APRIL", debut_date:"2015-08-24", disband_date: "2022-01-28", company: "dsp", type:"girl group",
        colors: ["#fecdec", "#ff9da4"]
    },
    {   
        name:"KARD", debut_date:"2017-07-19", disband_date: "2026-07-06", company: "dsp", type:"coed group",
        colors: ["#000000"]
    },
    {   
        name:"MIRAE", debut_date:"2021-03-17", disband_date: "2024-07-09", company: "dsp", type:"boy group",
        colors: ["#000000"]
    },
    {   
        name:"YOUNG POSSE", debut_date:"2023-10-18", disband_date: null, company: "dsp", type:"girl group",
        colors: ["#ffd400", "#fa3eae", "#8b00ff", "#66cc00", "#448ff2"]
    },
]