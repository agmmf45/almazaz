window.CATALOG = {
  categories: [
    {id:'protein',name:'بروتين وكارب'}, {id:'salad',name:'السلطات'},
    {id:'sandwich',name:'الساندويتشات'}, {id:'plate',name:'طبقك'},
    {id:'drink',name:'المشروبات'}, {id:'dessert',name:'الحلى'}
  ],
  items: [
    ['p1','سالمون',38,'protein'],['p2','سمك فيليه',27,'protein','top'],['p3','ديناميت شرمب',25,'protein'],['p4','تشيكن جريل',22,'protein','top'],['p5','ديناميت تشيكن',21,'protein'],['p6','تشيكن إيطالي',21,'protein'],['p7','كودو',21,'protein'],
    ['s1','سمووكي سالاد',32,'salad','new'],['s2','سيزر سالاد',32,'salad'],['s3','روبيان سالاد',30,'salad'],['s4','مشاوي سالاد',28,'salad','top'],['s5','تشيكن مانجو سالاد',28,'salad'],['s6','تونة بالباستا سالاد',28,'salad'],['s7','خضرة سالاد',22,'salad'],['s8','سالاد اليوم',12,'salad'],['s9','سالاد من اختيارك',30,'salad'],
    ['w1','سيزر راب',22,'sandwich','new'],['w2','تونا راب',13,'sandwich','new'],['w3','فاهيتا تشيكن راب',13,'sandwich','new'],['w4','توست تشيكن',13,'sandwich'],['w5','توست تيركي',13,'sandwich'],
    ['b1','مكسيكان شرمب',25,'plate'],['b2','مكسيكان تشيكن',19,'plate'],
    ['d1','برتقال',12,'drink'],['d2','مانجو',10,'drink'],['d3','فراوله',10,'drink'],['d4','حبب',10,'drink'],['d5','كركديه',9,'drink'],['d6','كينزا',3,'drink'],['d7','ماء',1,'drink'],
    ['t1','جرانولا',15,'dessert'],['t2','تشيز كيك',13,'dessert'],['t3','فروتي كرانشي',12,'dessert'],['t4','مانجو شيا بول',12,'dessert'],['t5','ستروبيري شيا بول',12,'dessert'],['t6','باشون فروت شيا بول',12,'dessert'],['t7','رز بلبن',9,'dessert']
  ].map(([id,name,price,category,badge])=>({id,name,price,category,badge,weight:id==='p3'?'100 جرام':''})),
  extras: [
    {id:'sauce',name:'صوص',price:3}, {id:'cheese',name:'جبنة',price:3},
    {id:'carb',name:'كارب',weight:'100 جرام',price:5}, {id:'chicken',name:'دجاج',weight:'50 جرام',price:5},
    {id:'tuna',name:'تونة',weight:'50 جرام',price:5}, {id:'shrimp',name:'روبيان',weight:'50 جرام',price:8}
  ],
  plans: {meal:[{count:15,price:285},{count:30,price:540},{count:50,price:860},{count:100,price:1650}],salad:[{count:15,price:375},{count:30,price:675},{count:50,price:1075}]}
};
