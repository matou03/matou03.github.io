hexo.extend.tag.register('folding', function(args, content){
    return `<details><summary>${args.join(' ')}</summary>${hexo.render.renderSync({text: content, engine: 'markdown'})}</details>`;
}, {ends: true});
