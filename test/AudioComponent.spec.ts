import { mount } from '@vue/test-utils'
import { AudioComponent } from '../src/components/AudioComponent.vue'
import { describe, it, expect, beforeAll } from 'vitest'

describe('AudioComponent', () => {
  describe('When mounting', () => {
    let wrapper: any

    beforeAll(() => {
      wrapper = mount(AudioComponent)
    })
    it('should mount the component', function () {
      expect(wrapper.exists()).toBe(true)
    })
  })
})
