/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

 var config = {
     
    paths: { //contiene le librerie
        'glide': 'js/glide.min'

    }, 
    
    shim: { //ordine
        'glide': {
            deps: ['jquery']
        },

        bootstrap: {
            deps: ['jquery', '@popperjs/core']
        }
    },
    map: {
        '*': {
            bootstrap: 'js/bootstrap.bundle',
            'glide': 'js/glide.min',
            'app': 'js/app',
        }
    }
};