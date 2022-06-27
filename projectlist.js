const projects = [
    {
        "slno": '1',
        "name": "Personal Portfolio",
        'url': 'https://arnab-k-s.github.io/Personal-Portfolio-/',
        'repo': 'https://github.com/Arnab-K-S/Personal-Portfolio-',
        'description': ` (This website)`
    },

    {
        "slno": '2',
        "name": "Real-Time-Chat App Solochat",
        'url': '',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App-2.0',
        'description': ` `
    },

    {
        "slno": '3',
        "name": "Real-Time-Chat-App 2.0",
        'url': 'https://arnab-k-s.github.io/Real-Time-Chat-App-2.0/login-local.html',
        'repo': '',
        'description': ` `
    },

    {
        "slno": '4',
        "name": "Real-Time-Chat-App",
        'url': '',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App',
        'description': ` `
    },

    {
        "slno": '5',
        "name": "Coding Website",
        'url': 'https://arnab-k-s.github.io/ARNAB-CODING-WEBSITE',
        'repo': 'https://github.com/Arnab-K-S/ARNAB-CODING-WEBSITE',
        'description': ` `
    },

    {
        "slno": '6',
        "name": "Personal Portfolio (Reactjs)",
        'url': 'https://arnab-k-s.github.io/Personal-Portfolio-Reactjs/',
        'repo': 'https://github.com/Arnab-K-S/Personal-Portfolio-Reactjs.git',
        'description': `working `
    },

    // {
    //     "slno":' ',
    //     "name": " ",
    //     'url':'',
    //     'githubrepo':' '
    // },
]
const TeamProjects = [
    {
        "slno": '1',
        "name": "Deepor Bill",
        'teamname': 'Coding Noobs',
        'url': '',
        'repo': ' ',
        "description": `Deepor Bil boasts of an enormous variety of flora and fauna, rich biodiversity and varied wildlife. The lakeside has divergent species of plants- water hyacinths, water lilies, aquatic grasses, marshy lands and vegetation patches. As per research 18 varieties of phytoplanktons have been found at the site. Also, rare plants like Euryale Ferox, potamogeton crispus etc have been spotted.

        Needless to mention, Dipor Bil is a proud abode of a sweeping number of very rare and endangered birds. Harbouring close to 19000 birds on a single day basis, the lake is a dwelling of approx 220 bird species out of which 70 are migratory. Some endangered birds found here include Spot Billed Pelican, Lesser Adjutant Stork, White Bellied Eagle, Siberian Crane etc.

        A total of 20 amphibians, 12 lizards, 18 snakes, 6 turtle and tortoise species have been listed here. Considering the aforementioned factors, the area attracts a lot of researchers, students and wildlife photographers other than the regular tourists.`
    },

    { 
        "slno": '2',
         "name": "E-Libary Project",
         'teamname': 'Coding Noobs',
         'url': '',
         'repo': '',
         'description': ` ` 
    },
]

TeamProjects.forEach(data => {
    document.getElementById('team').innerHTML += `
     <tr>
            <td>${data.slno}</td>
            <td><a href=${data.repo}>${data.name}</a></td>
            <td><p>${data.description}</p></td>
            <td>${data.teamname}</td>
            <td><button class="link" ><a href=${data.url}>Go</a></button></td>
        </tr>
    `
});

projects.forEach(data => {
    document.getElementById('solo').innerHTML += `
     <tr>
            <td>${data.slno}</td>
            <td><a href=${data.repo}>${data.name}</a></td>
            <td><p>${data.description}</p></td>
            <td><button class="link" ><a href=${data.url}>Go</a></button></td>
        </tr>
    `
});