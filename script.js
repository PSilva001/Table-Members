const teamMembers = [
    {
        src:'diogoesteves.jpg',
        name: 'Diogo Esteves',
        alias: '@diogoesteves.realestate',
        email: 'dmesteves@remax.pt',
        status: 'active',
        tags: ['Team-Leader', 'Real-Estate-Agent']
    },
    {
        src:'joananeves.jpg',
        name: 'Joana Neves',
        alias: '@joananeves_teammanager',
        email: 'joana.neves@remax.pt',
        status: 'active',
        tags: ['Team-Manager', 'Real-Estate-Agent']
    },
    {
        src:'catarinapereira.jpg',
        name: 'Catarina Pereira',
        alias: '@catarinapereiraconsultora',
        email: 'catarina.v.pereira@remax.pt',
        status: 'offline',
        tags: ['Real-Estate-Agent']
    },
    {
        src:'ricardoisenta.jpg',
        name: 'Ricardo Isenta',
        alias: '@ricardo_isenta_remax',
        email: 'ricardoisenta@remax.pt',
        status: 'active',
        tags: ['Real-Estate-Agent']
    },
    {
        src:'ricardoisenta.jpg',
        name: 'Ricardo Isenta',
        alias: '@ricardo_isenta_remax',
        email: 'ricardoisenta@remax.pt',
        status: 'inactive',
        tags: ['Real-Estate-Agent']
    }
    
    

];

let tableRowCount = document.getElementsByClassName('table-row-count');

tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 4;
const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

let filteredMembers = teamMembers.filter((_, i) => (
    ((start - 1) * itemsOnPage) < i + 1) &&
    (i + 1 <= start * itemsOnPage)
);

let mappedRecords = filteredMembers.map((teamMember) => {
    return `
        <tr>
            <td class="team-member-profile">
                <img src="${teamMember.src}" alt="${teamMember.name}">
                <span class="profile-info">
                    <span class="profile-info_name">
                        ${teamMember.name}
                    </span>
                    <span class="profile-info_alias">
                        ${teamMember.alias}
                    </span>
                </span>
            </td>
            <td>
                <span class="status status--${teamMember.status}">
                    ${teamMember.status}
                </span>
            </td>
            <td>${teamMember.email}</td>
            <td>
                <span class="tags">
                    ${teamMember.tags
                        .map((tag) => `<span class="tag tag--${tag}">${tag}</span>`)
                        .join('')}
                </span>
            </td>
        </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');
const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    linkList.push(`
        <li>
            <a 
                href="?page=${pageNumber}"
                ${pageNumber == start ? 'class="active"' : ''}
                title="page ${pageNumber}">
                    ${pageNumber}
            </a>
        </li>
    `);
}

pagination.innerHTML = linkList.join('');
