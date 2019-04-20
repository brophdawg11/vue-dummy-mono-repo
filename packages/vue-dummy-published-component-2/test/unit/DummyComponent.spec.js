import { mount } from '@vue/test-utils';
import DummyComponent from '../../src/DummyComponent.vue';

describe('DummyComponent', () => {

    it('Should render "Hello World"', () => {
        const cmp = mount(DummyComponent);
        expect(cmp.find('h1').text()).toBe('Hello World!');
    });

});
