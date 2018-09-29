export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva:true,
        }]
    ],
    singular: true,
    // proxy:{
    //   '/api/v1':{
    //       target:'http://127.0.0.1:8000/',
    //       changeOrigin:true,
    //   }
    // },
    routes: [{
        path: '/',
        component: '../Layout/BasicLayout',
        routes: [
            {
                path: '/',
                component: './HelloWorld'
            },
            {
                path: 'helloworld/:id',
                component: './HelloWorld'
            },{
                path:'modeView',
                component:'./modeView'
            }, {
                path: 'demo',
                routes: [{
                    path: 'view1',
                    component: './demo/view1'
                },{
                    path: 'view2',
                    component: './demo/view2'
                },{
                    path: 'view3',
                    component: './demo/view3'
                }]
            },{
                path: 'api',
                routes: [{
                    path: 'list',
                    component: './api/list'
                },{
                    path: 'new',
                    component: './api/index'
                },{
                    path: 'edit/:id',
                    component: './api/index'
                },{
                    path: 'cal',
                    component: './api/cal'
                },{
                    path: 'params',
                    component: './api/params'
                }]
            }
        ]
    }],
};