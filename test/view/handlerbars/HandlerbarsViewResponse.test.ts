import 'jest'
import * as Sinon from 'sinon'
import { ResponseTypeClass } from '../../../lib/constants'
import { ViewResponse } from '../../../lib/http/response/types/ViewResponse'
import { HandlebarsViewResponse } from '../../../lib/view/handlebars/HandlebarsViewResponse'

describe('HandlebarsViewResponse', function() {
  it('extends ViewResponse', function() {
    const handlerbarsView = new HandlebarsViewResponse('test')
    expect(handlerbarsView).toBeInstanceOf(ViewResponse)
  })

  it('returns different class name', function() {
    const handlerbarsView = new HandlebarsViewResponse('test')
    expect(handlerbarsView.getClassName()).toEqual(ResponseTypeClass.HandlebarsView)
  })

  describe('.helper()', function() {
    it('is chain-able', function() {
      const handlerbarsView = new HandlebarsViewResponse('test')
      expect(handlerbarsView.helper('test', () => {}) === handlerbarsView).toBe(true)
    })

    it('registers an handlebars instance level helper by assign helpers to "helpers" in variables', function() {
      const handlerbarsView = new HandlebarsViewResponse('test')
      const withSpy = Sinon.spy(handlerbarsView, 'with')
      const helper = () => {}
      handlerbarsView.helper('test', helper)
      expect(withSpy.calledWith('helpers.test', helper)).toBe(true)
      withSpy.restore()
    })

    it('can register same helper with multiple name', function() {
      const handlerbarsView = new HandlebarsViewResponse('test')
      const helper = () => {}
      handlerbarsView.helper(['a', 'b'], helper)
      expect(handlerbarsView.getVariables()).toEqual({
        helpers: {
          a: helper,
          b: helper
        }
      })
    })
  })
})
