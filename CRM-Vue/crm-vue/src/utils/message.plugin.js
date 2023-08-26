// Вариант для Vue3 (в туториале Vue2)
export default {
  install(app){
    app.config.globalProperties.$message = function(html){
      M.toast({html})
    }

    app.config.globalProperties.$error = function(html){
      M.toast({html: `${html}`})
    }
  }
}