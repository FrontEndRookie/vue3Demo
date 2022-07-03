export default {
    install(app) { 
        app.directive('iLimit', { //指令的名字
            mounted(el, binding) { // el 是当前绑定的元素，binding 是一个对象
                if(binding.value == 1){
                    el.onkeyup=(val)=>{
                        val.target.value = val.target.value.replace(/[^\d]/g, "") //限制输入数字
                    }
                } else if(binding.value == 2){
                    let flag = false
                    el.addEventListener('compositionstart',()=>{
                        flag = true
                    })
                    el.addEventListener('compositionend',()=>{
                        flag = false
                    })
                    el.onkeyup=(val)=>{
                        setTimeout(()=>{
                            if(!flag){
                                val.target.value = val.target.value.replace(/[^\da-zA-Z]/g, "") //限制输入数字大小写字母
                            }
                        },0)
                        
                    }
                } else if(binding.value == 3){
                    let flag = false
                    el.addEventListener('compositionstart',()=>{
                        flag = true
                    })
                    el.addEventListener('compositionend',()=>{
                        flag = false
                    })
                    el.onkeyup=(val)=>{
                        setTimeout(()=>{
                            if(!flag){
                                val.target.value = val.target.value.replace(/[^\da-zA-Z\u4e00-\u9fa5]/g, "") //限制输入数字大小写字母
                            }
                        },0)
                        
                    }
                }
             
            },
            updated(el, binding) {
                el.style.backgroundColor = binding.value
            },
        }),
        app.directive('whSet', { 
            mounted(el, binding) { 
                console.log(binding)
                if(binding.value && binding.value[0]){
                    el.style.width = binding.value[0]+'px'
                    el.style.height = binding.value[1]+'px'
                }
            },
            updated(el, binding) {
                el.style.backgroundColor = binding.value
            },
        })
    }
} 