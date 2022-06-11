const DUMMY_USERS = [
    {
        id: 'e1',
        userName: 'Turista',
        nombre:
            'Juan',
        apellido: 'Lopez',
        email: 'juan@tuguia.com',
        rol: 'tourist'

    },
    {
        id: 'e1',
        userName: 'Guia',
        nombre:
            'Pedro',
        apellido: 'Garcia',
        email: 'pedro@tuguia.com',
        rol: 'guide'
    }
];

export function getFeaturedEvents() {
    return DUMMY_USERS.filter((event) => event.isFeatured);
}

export function getAllUsers() {
    return DUMMY_USERS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_USERS.find((event) => event.id === id);
}