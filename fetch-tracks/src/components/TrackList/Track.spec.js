import Track from './Track';
import {shallow} from 'enzyme';

describe('Track', () => {

  it('shows track title', () => {
    const props = {
      track: {origin: {title: 'foo'}}
    }
    const element = shallow(<Track {...props} />);

    expect(element.contains('foo')).to.be.true;
  })

});
