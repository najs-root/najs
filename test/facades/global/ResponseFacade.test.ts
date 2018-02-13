import 'jest'
import * as Make from '../../../lib/core/make'
import * as Sinon from 'sinon'
import { GlobalFacade } from '../../../lib/constants'
import { ResponseFacade } from '../../../lib/facades/global/ResponseFacade'

describe('ResponseFacade', function() {
  it('calls make() to create new instance of Response as a facade root', function() {
    const makeSpy = Sinon.spy(Make, 'make')
    ResponseFacade.reloadFacadeRoot()
    expect(makeSpy.calledWith(GlobalFacade.Response)).toBe(true)
    expect(makeSpy.calledOnce).toBe(true)
  })
})