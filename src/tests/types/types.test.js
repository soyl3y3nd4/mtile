import React from 'react';
import { types } from '../../types/types';

describe('tests on types', () => {

    test('types should be equal than the object provided', () => {
        expect(types).toEqual(mockTypes);
    });
});

const mockTypes = {

    /* login */
    authLogin: '[auth] User Login',
    authLogout: '[auth] User Logout',
    authCheckingFinish: '[auth] Checking Finish',
    authLoadingStart: '[auth] Loading Start',
    authLoadingFinish: '[auth] Loading Finish',

    /* show/hide extended nav */
    toggleNav: '[nav] Toggle Nav',
    toggleResponsiveNav: '[nav] Toggle Responsive',

    /* modal */
    uiOpenModal: "[UI] Open Modal",
    uiCloseModal: "[UI] Close Modal",
    uiToggleAlerts: "[UI] Open/Close Alerts",

    /* calendar */
    eventSetActive: "[event] Set Active",
    eventClearActive: "[event] Clear Active",
    eventCleaner: "[event] Clean events",
    loadOrderEvents: "[event] Load Order Events",
    loadOrderTypes: "[event] Load Order Types",
    loadBreakdownTypes: "[event] Load Breakdown Types",
    addOrderEvent: "[event] Add Order Event",
    updateOrderEvent: "[event] Update Order Event",
    deleteOrderEvent: "[event] delete Order Event",

    /* crew */
    crewLoadTechnicians: "[crew] Load techinicians",
    crewSetActive: "[crew] Set active",
    crewClearActive: "[crew] Clear active",
    crewAddNewTechnician: "[crew] Add new technician",
    crewUpdateTechnician: "[crew] Update technician",
    crewDeleteTechnician: "[crew] Delete technician",
    crewClearTechnician: "[crew] Clear Technicians",

    /* warehouse */
    warehouseLoaded: "[warehouse] Loaded Data",
    warehouseRemoveItem: "[warehouse] Remove Item",
    warehouseAddItem: "[warehouse] Add Item",
    warehouseUpdateItem: "[warehouse] Update Item",
    warehouseSetActiveItem: "[warehouse] Set Active Item",
    warehouseRemoveActiveItem: "[warehouse] Remove Active Item",
    warehouseClear: "[warehouse] Clear All",
    warehouseItemsToOrder: "[warehouse] Items To Order Loaded",

    /* factory */
    factorySetFactories: "[factories] Set Factories",
    factorySetSections: "[factories] Set Sections",
    factorySetMachines: "[factories] Set Machines",
    factorySetNumberSections: "[factories] Set Number Sections",
    factorySetDocs: "[factories] Set Docs",
    factorySetActiveDoc: "[factories] Set Active Doc",
    factoryClearActiveDoc: "[factories] Clear Active Doc",
    factoryAddDoc: "[factories] Add Doc",
    factoryDeleteDoc: "[factories] Delete Doc",
    factoryClearFactory: "[factories] Clear Factory",

    /* warnings */
    warningLoadWarnings: "[warnings] Load warnings",
    warningAddWarning: "[warnings] Add warning",
    warningRemoveWarning: "[warnings] Remove warning",
    warningClear: "[warnings] Clear All",

    /* statistics */
    statisticsLoadWeeks: "[statistics] Load Weeks",
    statisticsLoadThreeWeeksSections: "[statistics] Load 3 Weeks Sections",
    statisticsLoadlastWeekByOrderType: "[statistics] Load Last Week by OrderType",
    statisticsLoadlastWeekByBreakdown: "[statistics] Load Last Week by Breakdown",
    statisticsLoadlastWeekByTechnician: "[statistics] Load Last Week by Technician",
    statisticsLoadInterventionsWeeks: "[statistics] Load Interventions by Week",
    statisticsLoadTotalTimeByWeek: "[statistics] Load Total Time by Week",
    statisticsClear: "[statistics] Clear All",
}
