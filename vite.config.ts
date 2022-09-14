import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
// https://vitejs.dev/config/

//const aa = import.meta.env.VITE_APP_PAYMENT_ENV
export default defineConfig(({command, mode}) => {
console.log('aaasss')
const env = loadEnv(mode, process.cwd(), '')
  return {
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,

      inject: {
        data: {

          injectScript: env.VITE_APP_PAYMENT_ENV === 'sandbox' ? ` <script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://sandbox.gerencianet.com.br/v1/cdn/f4159a2f96b651fe4fb6978c758dd44d/'+v;s.async=false;s.id='f4159a2f96b651fe4fb6978c758dd44d';if(!document.getElementById('f4159a2f96b651fe4fb6978c758dd44d')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>`: `<script type='text/javascript'>var s=document.createElement('script');s.type='text/javascript';var v=parseInt(Math.random()*1000000);s.src='https://api.gerencianet.com.br/v1/cdn/f4159a2f96b651fe4fb6978c758dd44d/'+v;s.async=false;s.id='f4159a2f96b651fe4fb6978c758dd44d';if(!document.getElementById('f4159a2f96b651fe4fb6978c758dd44d')){document.getElementsByTagName('head')[0].appendChild(s);};$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}};</script>`,
        },

      },
    }),
  ],
  define: {
    global: "window",
  },
  server: {
    port: 3001
  },

}})

