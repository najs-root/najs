"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const Sinon = require("sinon");
const najs_facade_1 = require("najs-facade");
const TestSuite_1 = require("../../lib/test/TestSuite");
const isPromise_1 = require("../../lib/private/isPromise");
describe('TestSuite', function () {
    describe('static .getFramework()', function () {
        it('simply returns TestSuite.najs framework instance if there is no params (getter)', function () {
            TestSuite_1.TestSuite['najs'] = 'anything';
            expect(TestSuite_1.TestSuite.getFramework()).toEqual('anything');
            TestSuite_1.TestSuite.clear();
        });
    });
    describe('static .setFramework()', function () {
        it('assigns the param to TestSuite.najs if there is an param, the startOptions is {createServer:false} by default', function () {
            const najs = {};
            expect(TestSuite_1.TestSuite.setFramework(najs) === najs).toBe(true);
            expect(TestSuite_1.TestSuite['startOptions']).toEqual({ createServer: false });
            TestSuite_1.TestSuite.clear();
        });
        it('assigns the param to TestSuite.najs if there is an param with custom startOptions', function () {
            const najs = {};
            expect(TestSuite_1.TestSuite.setFramework(najs, { createServer: true }) === najs).toBe(true);
            expect(TestSuite_1.TestSuite['startOptions']).toEqual({ createServer: true });
            TestSuite_1.TestSuite.clear();
        });
    });
    describe('.setUp()', function () {
        it('does nothing and return undefined if the TestSuite.najs instance is undefined', function () {
            const testSuite = new TestSuite_1.TestSuite();
            expect(testSuite.setUp()).toBeUndefined();
        });
        it('does nothing and return undefined if the TestSuite.najs already started', function () {
            const najs = {
                isStarted() {
                    return true;
                }
            };
            TestSuite_1.TestSuite.setFramework(najs);
            const testSuite = new TestSuite_1.TestSuite();
            expect(testSuite.setUp()).toBeUndefined();
            TestSuite_1.TestSuite.clear();
        });
        it('returns an promise with call TestSuite.najs.started() and resolve the nativeHttpDriver to this.nativeHttpDriver', async function () {
            const najs = {
                isStarted() {
                    return false;
                },
                start() {
                    return new Promise(resolve => {
                        resolve('anything');
                    });
                },
                getNativeHttpDriver() {
                    return 'nativeHttpDriver';
                }
            };
            TestSuite_1.TestSuite.setFramework(najs);
            const testSuite = new TestSuite_1.TestSuite();
            const result = testSuite.setUp();
            expect(isPromise_1.isPromise(result)).toBe(true);
            await result;
            expect(testSuite['nativeHttpDriver']).toEqual('nativeHttpDriver');
        });
    });
    describe('.tearDown()', function () {
        it('is called after running test case', function () { });
        it('calls verifyAndRestoreFacades() from FacadeContainer', function () {
            const verifyAndRestoreAllFacadesSpy = Sinon.spy(najs_facade_1.FacadeContainer, 'verifyAndRestoreAllFacades');
            const testSuite = new TestSuite_1.TestSuite();
            testSuite.tearDown();
            expect(verifyAndRestoreAllFacadesSpy.called).toBe(true);
        });
    });
});
