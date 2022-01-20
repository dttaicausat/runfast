const ListItem = [
    {
        name: 'beer',
        cost: 10000,
        type:"drink",
        id:0,
        detail: "America's beer",
        url:"https://www.liquor.com/thmb/-BGrCOgQV6D2UV-qcqFRLHY7uhs=/2037x1471/filters:fill(auto,1)/GettyImages-519728153-7dca4b18c59f4b1fa3654e4d5c9db884.jpg",
    },
    {
        name: 'cafe',
        cost: 10000,
        id:1,
        type:"drink",
        detail: 'Đặc Sản Tây Bắc',
        url: "https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_700,h_700/https://baristaskills.com.vn/wp-content/uploads/2020/09/do-uong-quan-Puku-Cafe-Bar.jpg"

    },

    {
        name: 'cocktail',
        cost: 35000,
        id:2,
        type:"drink",
        detail: 'Phở truyền thống của Việt Nam ',
        url: "https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15072/rainbowparadisecocktail.jpg?v=1&mode=crop"

    },


    {
        name: 'cocacola',
        cost: 15000,
        id:3,
        type:"drink",
        detail: 'Đặc Sản Huế',
        url: "https://cdn.newsapi.com.au/image/v1/e97c17e71508865674c1bf4f8c46ff17"

    },


    {
        name: 'fry potatoe',
        cost: 25000,
        id:4,
        type:"food",
        detail: ' bánh xèo cực ngon, vừa miệng, đơn giản',

        url: "https://images.media-allrecipes.com/userphotos/4488416.jpg"
    },


    {
        name: 'hamberger',
        cost: 30000,
        id:5,
        type:"food",
        detail: 'mì quảng Phú Chiêm thơm ngon, chuẩn vị tại nhà',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrluvA-PvnjfW_5ItD-Nk-lQnGc8dVPMbOFA&usqp=CAU"

    },


    {
        name: 'pizza',
        cost: 5000,
        id:6,
        type:"food",
        detail: 'anh yêu em ',
        url: "https://img.dominos.vn/Veggie-mania.jpg"


    },
    {
        name: 'redwine',
        cost: 5000,
        id:6,
        type:"drink",
        detail: 'anh yêu em ',
        url: "data:image/jpeg;base64,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"


    },
    {
        name: 'roasted chicken',
        cost: 5000,
        id:6,
        type:"food",
        detail: 'anh yêu em ',
        url: "https://cafedelites.com/wp-content/uploads/2017/12/Perfect-Juicy-Roast-Chicken-IMAGE-28.jpg"


    },
    {
        name: 'spaghetti',
        cost: 5000,
        id:6,
        type:"food",
        detail: 'anh yêu em ',
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTMDmCzchx90xVTLM5R5-kdMOmKeJTpLA4A&usqp=CAU"


    },
]
export  default ListItem;