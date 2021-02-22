// const div1 = dom.create('<div>wwww</div>');
// console.log(div);
// dom.after(test,div1);
// dom.attr(test,'title','Hi,你的良心不会痛吗')
// const div3=dom.create('<div id="parent">wwww</div>')
// dom.wrap(test,div3)
// const nodes = dom.empty(window.empty)
// console.log(nodes)
// const a = dom.attr(test,'title')
// console.log(a)
// dom.text(test,'你好，这是新的内容')

// dom.style(test,{border:'1px solid red',color:'blue'})
// console.log(dom.style(test,'border'))
// dom.style(test,'border','1px solid black')
// dom.class.add(test,'red')
// dom.on(test,'click',()=>{
//     console.log('点击了')
// })
// const testDiv = dom.find('#test')[0]
// console.log(testDiv)
// console.log('.red',testDiv)
// console.log(dom.siblings(dom.find('#e2')[0]))
// const t = dom.find('#travel')[0]
// dom.each(dom.children(t),(n)=> dom.style(n,'color','red'))
const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
