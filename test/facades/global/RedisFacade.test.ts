import 'jest'
import * as Make from '../../../lib/core/make'
import * as Sinon from 'sinon'
import { GlobalFacadeClass } from '../../../lib/constants'
import { RedisFacade } from '../../../lib/facades/global/RedisFacade'

describe('RedisFacade', function() {
  it('calls make() to create new instance of RedisClient as a facade root', function() {
    const makeSpy = Sinon.spy(Make, 'make')
    RedisFacade.reloadFacadeRoot()
    expect(makeSpy.calledWith(GlobalFacadeClass.Redis)).toBe(true)
    expect(makeSpy.calledOnce).toBe(true)
  })
})
