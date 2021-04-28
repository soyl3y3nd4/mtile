import { types } from "../types/types";
import moment from "moment";

// Set the last clicked event to activeEvent
export const setActiveEvent = (event) => ({
    type: types.eventSetActive,
    payload: event
});

// Change activeEvent to NULL
export const clearActiveEvent = () => ({
    type: types.eventClearActive
});

// Return calendarReducer to its initialState
export const clearEvents = () => ({
    type: types.eventCleaner
});

export const startLoadOrderEvents = () => {

    return async (dispatch) => {

        // Call to load order types and breakdown types
        dispatch(startLoadOrderTypes());
        dispatch(startLoadBreakdownTypes());

        // fetch the events
        const resp = await fetch('http://localhost:8088/api/events/events');
        const { eventsWithData: events } = await resp.json();

        if (events) {
            dispatch(loadOrderEvents(events));
        }

    }
}

const loadOrderEvents = (events) => ({
    type: types.loadOrderEvents,
    payload: events
});

export const startAddOrderEvent = (event) => {

    return async (dispatch) => {

        // fetch the event, get the id and push to store
        // const newEvent = {
        //     id: new Date().getTime(), ...event
        // }
        dispatch(addOrderEvent(event));

        //TODO: SHOW Alert if error or ok
        return {
            ok: true,
            message: 'Orden creada correctamente!'
        }

        //error
        // return {
        //     ok: false,
        //     message: 'Ha ocurrido un error!'
        // }

    }
}

const addOrderEvent = (event) => ({
    type: types.addOrderEvent,
    payload: event
});

export const startUpdateOrderEvent = (event) => {

    return async (dispatch) => {

        // fetch the events
        dispatch(updateOrderEvent(event));

        return {
            ok: true,
            message: 'Orden actualizada correctamente!'
        }

        //error
        // return {
        //     ok: false,
        //     message: 'Ha ocurrido un error!'
        // }
    }
}

const updateOrderEvent = (event) => ({
    type: types.updateOrderEvent,
    payload: event
});

export const startDeleteOrderEvent = () => {

    return async (dispatch) => {

        // fetch the events

        dispatch(deleteOrderEvent());

    }
}

const deleteOrderEvent = (event) => ({
    type: types.deleteOrderEvent,
    payload: event
});

const startLoadOrderTypes = () => {

    return async (dispatch) => {

        // fetch the types
        const resp = await fetch('http://localhost:8088/api/events/types');
        const { types } = await resp.json();

        if (types) {
            dispatch(loadOrderTypes(types));
        }

    }
}
const loadOrderTypes = (orderTypes) => ({
    type: types.loadOrderTypes,
    payload: orderTypes
});

const startLoadBreakdownTypes = () => {

    return async (dispatch) => {

        // fetch the breakdowns
        const resp = await fetch('http://localhost:8088/api/events/breakdowns');
        const { breakdowns } = await resp.json();

        if (breakdowns) {
            dispatch(loadBreakdownTypes(breakdowns));
        }

    }
}
const loadBreakdownTypes = (breakdownTypes) => ({
    type: types.loadBreakdownTypes,
    payload: breakdownTypes
});


const mockEvents2 = [

    {
        id: "1617921793521",
        factory: "123a",
        section: "123d",
        machine: "125p",
        number: "12312e12e",
        technician: "1617921731533",
        worker: "Juanito",
        orderType: "123e123",
        breakdown: "32r23",
        closed: false,
        confirmed: false,
        start: moment("2021-04-08T22:47:41.539+02:00").toDate(),
        end: moment("2021-04-08T22:47:41.539+02:00").toDate(),
        startFix: moment("2021-04-08T22:47:41.539+02:00").toDate(),
        endFix: moment("2021-04-08T22:47:41.539+02:00").toDate(),
        materials: [
            {
                code: "1ACD4",
                description: "Sensor inductivo NPN",
                quantity: "5",
                minStock: "1",
                place: "Estantería 3",
            }, {
                code: '1JRET4',
                description: 'Correa Termosoldable Tipo B con núcleo',
                quantity: '100',
                minStock: '20',
                place: 'Estantería 3B',
            }
        ],
        operations: [{
            time: "1.5",
            operation: "Cambiar correa rodillera mesa 2"
        },
        {
            time: "1",
            operation: "Probar cosas nuevas 2"
        }
        ],
        clocks: [{
            userId: "213123",
            user: "Paco",
            start: moment("2021-04-08T22:47:41.539+02:00").toDate(),
            end: moment("2021-04-08T22:47:41.539+02:00").toDate(),
        }
        ],
        totalMins: 15,
        description: "Se ha roto todo el empujador"

    },
    {
        id: "1617921793589fewdfsd",
        factory: "123a",
        section: "123e",
        machine: "125p",
        number: "12312e12e",
        technician: "1617921731533",
        worker: "Juanito",
        orderType: "123e12312ed1",
        breakdown: "fdsf43",
        closed: false,
        confirmed: false,
        start: moment("2021-04-09T09:00:41.539+02:00").toDate(),
        end: moment("2021-04-10T10:30:41.539+02:00").toDate(),
        startFix: moment("2021-04-08T23:42:11.566Z").toDate(),
        endFix: moment("2021-04-09T22:42:11.000Z").toDate(),
        materials: [
            {
                code: "1ACD4",
                description: "Sensor inductivo NPN",
                quantity: "5",
                minStock: "1",
                place: "Estantería 3",
            }, {
                code: '1JRET4',
                description: 'Correa Termosoldable Tipo B con núcleo',
                quantity: '100',
                minStock: '20',
                place: 'Estantería 3B',
            }
        ],
        operations: [{
            time: "1.5",
            operation: "Cambiar correa rodillera mesa"
        },
        {
            time: "0.5",
            operation: "Probar cosas nuevas"
        }, {
            time: "1.5",
            operation: "Probar cosas nuevas"
        }
        ],
        clocks: [{
            userId: "213123",
            user: "pepele",
            start: moment("2021-04-08T22:47:41.539Z").toDate(),
            end: moment("2021-04-08T23:47:41.539Z").toDate(),
        }
        ],
        totalMins: 30,
        description: "Fallo al parar y arrancar"
    },
    {
        id: "1617921793512erwfwe",
        factory: "123a",
        section: "123f",
        machine: "123p",
        number: "12312e12e",
        technician: "1617921731533",
        worker: "Juanito",
        orderType: "124124124",
        breakdown: "31233f",
        closed: false,
        confirmed: false,
        start: moment("2021-04-15T10:47:41.539+02:00").toDate(),
        end: moment("2021-04-16T23:47:41.539+02:00").toDate(),
        startFix: moment("2021-04-08T23:42:11.566Z").toDate(),
        endFix: moment("2021-04-09T22:42:11.000Z").toDate(),
        materials: [
            {
                code: "1ACD4",
                description: "Sensor inductivo NPN",
                quantity: "5",
                minStock: "1",
                place: "Estantería 3",
            }, {
                code: '1JRET4',
                description: 'Correa Termosoldable Tipo B con núcleo',
                quantity: '100',
                minStock: '20',
                place: 'Estantería 3B',
            }
        ],
        operations: [{
            time: "1.5",
            operation: "Cambiar correa rodillera mesa"
        },
        {
            time: "0.5",
            operation: "Probar cosas nuevas"
        }, {
            time: "1.5",
            operation: "Probar cosas nuevas"
        }
        ],
        clocks: [{
            userId: "213123",
            user: "pepele",
            start: moment("2021-04-08T22:47:41.539Z").toDate(),
            end: moment("2021-04-08T23:47:41.539Z").toDate(),
        }
        ],
        totalMins: 120,
        description: "Olor raro cuando aumenta la velocidad"
    },
    {
        id: "16179217935673123",
        factory: "123a",
        section: "123d",
        machine: "128p",
        number: "12312e12e",
        technician: "1617921731533",
        worker: "Juanito",
        orderType: "345435345",
        breakdown: "asfas",
        closed: true,
        confirmed: true,
        start: moment("2021-04-01T06:47:41.539+02:00").toDate(),
        end: moment("2021-04-03T11:47:41.539+02:00").toDate(),
        startFix: moment("2021-04-08T23:42:11.566Z").toDate(),
        endFix: moment("2021-04-09T22:42:11.000Z").toDate(),
        materials: [
            {
                code: "1ACD4",
                description: "Sensor inductivo NPN",
                quantity: "5",
                minStock: "1",
                place: "Estantería 3",
            }, {
                code: '1JRET4',
                description: 'Correa Termosoldable Tipo B con núcleo',
                quantity: '100',
                minStock: '20',
                place: 'Estantería 3B',
            }
        ],
        operations: [{
            time: "1.5",
            operation: "Cambiar correa rodillera mesa"
        },
        {
            time: "0.5",
            operation: "Probar cosas nuevas"
        }, {
            time: "1.5",
            operation: "Probar cosas nuevas"
        }
        ],
        clocks: [{
            userId: "213123",
            user: "pepele",
            start: moment("2021-04-08T22:47:41.539Z").toDate(),
            end: moment("2021-04-08T23:47:41.539Z").toDate(),
        }
        ],
        totalMins: 60,
        description: "Patinan las correas con 60x60"
    },
]


