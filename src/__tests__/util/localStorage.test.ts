import React, { useState as stateMock, useEffect as effectMock } from 'react';
import useLocalStorage from "../../util/localStorage";

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useEffect: jest.fn(),
	useState: jest.fn()
}))

describe('Util: localStorage', () => {
    let getSpy: any;
    let setSpy: any;
    // const realUseState: any = stateMock;
    // const realUseEffect: any = effectMock;
    const setState = jest.fn()
    const useEffect = jest.fn()
    
    beforeEach(() => {
        getSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
        setSpy = jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
        (stateMock as jest.Mock).mockImplementation((init: any) => [init, setState]);
        (effectMock as jest.Mock).mockImplementation((f: Function, params: any) => f(params));
    });

    afterEach(() => {
        getSpy.mockRestore();
        setSpy.mockRestore();
    });

    it('should store the default value', () => {
        useLocalStorage('key', 'value');

        expect(getSpy).toHaveBeenCalledWith('key');
        expect(setSpy).toHaveBeenCalledWith('key', JSON.stringify('value'));
    });

    it('should update the stored value', () => {
        const [stored, set] = useLocalStorage('update', 'old');
        set('new');

        expect(setSpy).toHaveBeenCalledWith('update', JSON.stringify('new'));
    })
});