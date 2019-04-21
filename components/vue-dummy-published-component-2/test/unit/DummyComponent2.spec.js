import { mount } from '@vue/test-utils';
import DummyComponent from '../../src/DummyComponent2.vue';

describe('DummyComponent2', () => {

    it('Should render "Hello World"', () => {
        const cmp = mount(DummyComponent);
        expect(cmp.find('h1').text()).toBe('Hello World 2!');
    });

});
