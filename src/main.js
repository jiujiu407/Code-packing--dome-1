const div = dom.create('<title>DOM1</title>');
console.log(div);
dom.after(test,div);
dom.attr(test,'title','Hi,你的良心不会痛吗')
const a = dom.attr(test,'title')
console.log(a)

dom.text(test,'你好，这是新的内容')

dom.style(test,{border:'1px solid red',color:'blue'})
console.log(dom.style(test,'border'))
dom.style(test,'border','1px solid black')
dom.class.add(test,'red')
dom.on(test,'click',()=>{
    console.log('点击了')
})
const testDiv = dom.find('#test')[0]
console.log(testDiv)
console.log(dom.siblings(dom.find('#e2')[0]))

