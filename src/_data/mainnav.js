const site = require('./site');

module.exports = [
    {   
        label: "Je suis créateur", 
        trigger: "creator", 
        url: "/creator/",
    },
    {   
        label: "Rejoindre la beta",
        trigger: "App",
        url: site.urlApp,
        isPrimary: true,
    },
    
];
