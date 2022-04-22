const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Museos de Posadas',
        description:
            'Una salida a los museos mas importante de Posadas',
        location: 'Casco Historico de Posadas',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
    },
    {
        id: 'e2',
        title: 'Cataratas del Iguazu',
        description:
            "Un paseo por las cataratas mas famosas del mundo.",
        location: 'Iguazu 1234',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Tour',
        description:
            'Sumate al mejor tour por los principales paisajes de Posadas',
        location: 'Calle 1234',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
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
    return DUMMY_EVENTS.find((event) => event.id === id);
}