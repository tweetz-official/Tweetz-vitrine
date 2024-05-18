const site = require('./site');

module.exports = [
    {   
        label: "Je suis créateur", 
        trigger: "creator", 
        url: "/creator/",
    },
    {   
        label: "Démarrer",
        trigger: "App",
        url: site.urlApp,
        isPrimary: true,
    },
    
];
